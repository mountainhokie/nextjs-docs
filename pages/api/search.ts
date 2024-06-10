import type { NextApiRequest, NextApiResponse } from "next";
import { getSortedDocsData } from "../../lib/markdown";
import fs from "fs";
import path from "path";

const docsDirectory = path.join(process.cwd(), "docs");

const searchDocs = (query: string) => {
  const results: { title: string; link: string }[] = [];
  const sections = fs.readdirSync(docsDirectory);

  sections.forEach((section) => {
    const sectionPath = path.join(docsDirectory, section);
    const items = fs.readdirSync(sectionPath);

    items.forEach((item) => {
      const fullPath = path.join(sectionPath, item);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      if (fileContents.toLowerCase().includes(query.toLowerCase())) {
        const titleMatch = fileContents.match(/title:\s*(.*)/);
        const title = titleMatch ? titleMatch[1] : item.replace(/\.md$/, "");
        results.push({
          title,
          link: `/${section}/${item.replace(/\.md$/, "")}`,
        });
      }
    });
  });

  return results;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q } = req.query;
  if (typeof q !== "string" || q.length < 3) {
    res.status(400).json([]);
    return;
  }

  const results = searchDocs(q);
  res.status(200).json(results);
}
