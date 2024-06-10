import { getDocData, getAllDocPaths } from "../../../lib/markdown";
import Pagination from "../../../components/Pagination";
import "github-markdown-css/github-markdown.css";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../../components/CodeBlock";

export async function generateStaticParams() {
  const paths = getAllDocPaths();
  return paths;
}

export default async function DocPage({
  params,
}: {
  params: { section: string; id: string };
}) {
  const docData = await getDocData(params.section, params.id);
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
            {docData.contentMarkdown}
          </ReactMarkdown>
        </article>
      </div>
      <Pagination section={params.section} id={params.id} />
    </>
  );
}
