import React from "react";
import CopyButton from "./CopyButton";

interface CodeBlockProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  inline,
  className,
  children,
}) => {
  const code = children ? children.toString() : "";

  if (inline) {
    return <code className={className}>{children}</code>;
  }

  return (
    // <div className="relative">
    //   <CopyButton code={code} />
    //   <pre>{children}</pre>
    // </div>

    <div className="">
      <div className="flex bg-gray-700 justify-between items-center px-4 py-4 rounded-t-lg">
        <span className="text-xs font-semibold text-gray-400">terminal</span>
        <CopyButton code={code} />
      </div>
      <pre className="text-sm text-white overflow-x-auto">{children}</pre>
    </div>
  );
};

export default CodeBlock;
