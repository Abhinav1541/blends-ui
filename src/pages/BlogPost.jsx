import React from "react";
import { useParams } from "react-router-dom";
import { TextDivider } from "../components/ui/TextDivider/TextDivider";
import { LetsConnect } from "../components/ui/LetsConnect/LetsConnect";
import { BlogDatabase } from "../utils/BlogDatabase";

export const BlogPost = () => {
  const { blogId } = useParams();
  const blog = BlogDatabase[blogId];

  if (!blog) {
    return (
      <div className="bg-black min-h-screen pt-40 px-5 sm:px-10 lg:px-20">
        <div className="text-white font-akira text-2xl text-center">
          Blog post not found
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Page Title */}
      <TextDivider className="pt-40 pb-10">
        <div className="text-brand font-akira text-4xl sm:text-5xl lg:text-6xl text-center">
          BLOGS
        </div>
      </TextDivider>

      {/* Blog Content */}
      <div className="px-5 sm:px-10 lg:px-20 py-10">
        <div>
          {/* Blog Title */}
          <h1 className="text-white font-akira text-4xl sm:text-5xl lg:text-6xl text-center mb-12 leading-tight">
            {blog.title}
          </h1>

          {/* Content Container */}
          <div className="border border-brand rounded-lg">
            {/* Introduction */}
            <div className="p-6 sm:p-8 lg:p-12">
              <h2 className="text-white font-poppins text-xl sm:text-2xl font-semibold mb-6">
                Introduction
              </h2>
              <div className="text-gray-300 font-poppins text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {blog.content.introduction.text}
              </div>
            </div>

            {/* Sections */}
            {blog.content.sections.map((section, index) => (
              <div key={index} className="px-6 py-6 sm:px-8 lg:px-12">
                <h3 className="text-white font-poppins text-lg sm:text-xl font-semibold mb-4 flex items-center gap-3">
                  {section.icon && <span className="text-2xl">{section.icon}</span>}
                  {section.number}. {section.title}
                </h3>
                <div className="text-gray-300 font-poppins text-base sm:text-lg leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Conclusion */}
            {blog.content.conclusion && (
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="text-gray-300 font-poppins text-base sm:text-lg leading-relaxed whitespace-pre-line">
                  {blog.content.conclusion}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="px-5 sm:px-10 lg:px-20 py-20">
        <LetsConnect className="w-full" />
      </div>
    </div>
  );
};