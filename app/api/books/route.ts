// import books from "./data.json";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "../../db";
export async function GET(req: Request) {
  // await prisma.book.create({data:{
  //   title: 'Prisma Book',
  //   link:"https://www.amazon.com/dp/B0BXMRB5VF/",
  //   img:" https://via.placeholder.com/600/92c952"
  //   } })
  const books = await prisma.book.findMany();
  return NextResponse.json(books);
}

export async function POST(req: Request) {
  const { title, link, img } = await req.json();
  await prisma.book.create({
    data: {
      title: title,
      link: link,
      img: img,
    },
  });
  return NextResponse.json("Book added successfully");
}
