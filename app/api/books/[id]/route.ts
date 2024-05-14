import { prisma } from "@/app/db";
import { NextResponse } from "next/server";
export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  await prisma.book.delete({where: {id:id}}) 
  return NextResponse.json({ "Book deleted": id });
};
