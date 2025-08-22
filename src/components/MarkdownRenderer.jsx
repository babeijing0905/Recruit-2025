import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="prose prose-invert max-w-none prose-sm sm:prose-base lg:prose-lg prose-headings:text-[#EEF9FF] prose-p:text-[#EEF9FF] prose-strong:text-[#ACFFF7] prose-code:text-[#C6FFC7] prose-pre:bg-[#0052AA]/20 prose-a:text-[#ACFFF7] prose-li:text-[#EEF9FF]">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
