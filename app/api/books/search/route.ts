import { NextResponse } from "next/server";
import books from "../data.json";
import { prisma } from "@/app/db";
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  if (!query) {
    return NextResponse.json({ msg: "Query term not found" }, { status: 400 });
  }
  const filteredBooks = await prisma.book.findMany({
    where: {
      title: {
        contains: query,
      },
    },
  });
  return NextResponse.json(filteredBooks);
  return NextResponse.json(books);
}
