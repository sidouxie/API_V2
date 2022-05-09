import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

//Add new post
async function addPost(req: Request, res: Response) {
  try {
    const { title, slug } = req.body;
    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

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
  addPost,
  getPosts,
};
