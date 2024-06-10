import type { NextApiRequest, NextApiResponse } from "next";
import { getSortedDocsData } from "../../lib/markdown";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const navItems = getSortedDocsData();
  res.status(200).json(navItems);
}
