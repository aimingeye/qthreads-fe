// src/pages/api/posts.ts

import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const posts = [
    { id: 1, username: "user1", content: "This is the first post!" },
    { id: 2, username: "user2", content: "Hello world!" },
    // Add more mock posts here
  ];

  res.status(200).json(posts);
};

export default handler;
