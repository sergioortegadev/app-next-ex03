import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  await connectDB();

  const users = await User.find();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  await connectDB();
  const data = await request.json();

  const users = await User.create(data);
  return NextResponse.json(users);
}
