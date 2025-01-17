import axios from "axios";
import { NextResponse } from "next/server";
import { PrismaClient as prisma } from "@prisma/client";

// const healthCheck = async (req) => {
//   return NextResponse.json({ status: "ok" });
// };

const getTeamAllMembers = async (req) => {
  try {

    const { data } = prisma.teamMember.findMany();
    return new NextResponse.json(data);

  } catch (error) {

    return NextResponse.json({
      error: error,
      status: 404
    });

  }
};

const addTeamMember = async (req) => {
  try {

    const req = await req.json();
// req object will have the same data as sent in the body of the request.
// Can be destructured as well.
// const { data } = await req.json()
    prisma.teamMember.create({ data });
    
  } catch (error) {

    console.log(error);
    return NextResponse.json({
      error: error,
      status: 400
    });
    
  }
};

export { getTeamAllMembers as GET, addTeamMember as POST };
