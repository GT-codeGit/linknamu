import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

// 개발 모드의 HMR에서 연결이 계속 새로 생기지 않도록 전역에 캐시합니다.
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

function getClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo.mongoClientPromise;
}

type ClickDoc = { _id: string; count: number };

async function clicksCollection() {
  const client = getClient();
  if (!client) return null;
  return (await client).db(dbName).collection<ClickDoc>("clicks");
}

export async function incrementClick(linkId: string): Promise<boolean> {
  const col = await clicksCollection();
  if (!col) return false;
  await col.updateOne({ _id: linkId }, { $inc: { count: 1 } }, { upsert: true });
  return true;
}

export async function getClickCounts(): Promise<Record<string, number>> {
  const col = await clicksCollection();
  if (!col) return {};
  const docs = await col.find().toArray();
  return Object.fromEntries(docs.map((d) => [d._id, d.count]));
}
