import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL as string;

export async function connect() {
  try {
    await mongoose.connect(MONGO_URL);
  } catch (error) {
    console.error(error);
  }
}
