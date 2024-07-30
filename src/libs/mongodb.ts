import mongoose from "mongoose";

export async function connectDB() {
  const mongoUrl = process.env.MONGODB_URL_ATLAS;
  if (!mongoUrl) {
    throw new Error("MONGODB_URL_ATLAS no está definida en las variables de entorno.");
  }
  await mongoose.connect(mongoUrl);
}
