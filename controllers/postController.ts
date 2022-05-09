import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

//Get All Post
async function getPosts(req: Request, res: Response) {
  try {
    const getPost = await prisma.post.findRaw();
    res.status(200).json(getPost);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

module.exports = {
  getPosts,
};
