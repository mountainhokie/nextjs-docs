import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkParse from "remark-parse";

const docsDirectory = path.join(process.cwd(), "docs");

export const getSortedDocsData = () => {
  const sections = fs.readdirSync(docsDirectory);
  const navItems: { [key: string]: string[] } = {};

  sections.forEach((section) => {
    const sectionPath = path.join(docsDirectory, section);
    const items = fs
      .readdirSync(sectionPath)
      .map((filename) => filename.replace(/\.md$/, ""));
    navItems[section] = items;
  });

  return navItems;
};

export const getAllDocs = () => {
  const sections = fs.readdirSync(docsDirectory);
  const allDocs: { section: string; id: string }[] = [];

  sections.forEach((section) => {
    const sectionPath = path.join(docsDirectory, section);
    const items = fs
      .readdirSync(sectionPath)
      .map((filename) => filename.replace(/\.md$/, ""));

    items.forEach((id) => {
      allDocs.push({ section, id });
    });
  });

  return allDocs;
};

export const getAllDocPaths = () => {
  const sections = fs.readdirSync(docsDirectory);
  const paths: { params: { section: string; id: string } }[] = [];

  sections.forEach((section) => {
    const sectionPath = path.join(docsDirectory, section);
    const items = fs
      .readdirSync(sectionPath)
      .map((filename) => filename.replace(/\.md$/, ""));

    items.forEach((id) => {
      paths.push({ params: { section, id } });
    });
  });

  return paths;
};

const processor = remark().use(remarkParse);

export const getDocData = async (section: string, id: string) => {
  const fullPath = path.join(docsDirectory, section, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const processedContent = processor.processSync(matterResult.content);
  const contentMarkdown = processedContent.toString();

  return {
    id,
    contentMarkdown,
    ...matterResult.data,
  };
};

export const getReadMeData = async () => {
  const fullPath = path.join(process.cwd(), "ReadMe.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const processedContent = processor.processSync(matterResult.content);
  const contentMarkdown = processedContent.toString();

  return {
    contentMarkdown,
    ...matterResult.data,
  };
};
