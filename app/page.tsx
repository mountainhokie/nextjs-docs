import { getReadMeData } from "../lib/markdown";
import "github-markdown-css/github-markdown.css";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../components/CodeBlock";
import Pagination from "@/components/Pagination";

export default async function HomePage({
  params,
}: {
  params: { section: string; id: string };
}) {
  const readMeData = await getReadMeData();

  return (
    <>
      <div className="markdown-body">
        <article>
          <ReactMarkdown
            components={{
              code({ node, className, children, ...props }) {
                return (
                  <CodeBlock className={className} {...props}>
                    {children}
                  </CodeBlock>
                );
              },
              pre({ children }) {
                return <div>{children}</div>;
              },
            }}
          >
            {readMeData.contentMarkdown}
          </ReactMarkdown>
        </article>
      </div>
      <Pagination section={params.section} id={params.id} />
    </>
  );
}
