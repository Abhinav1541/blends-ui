import React from "react";
import { Link } from "react-router-dom";
import { TextDivider } from "../components/ui/TextDivider/TextDivider";
import { LetsConnect } from "../components/ui/LetsConnect/LetsConnect";

const blogPosts = [
  {
    id: "7-digital-marketing-design-trends-pune-2025",
    title: "7 DIGITAL MARKETING & DESIGN TRENDS EVERY PUNE BRAND MUST EMBRACE IN 2025",
  },
  {
    id: "diy-marketing-vs-hiring-agency-2025",
    title: "DIY MARKETING VS HIRING AN AGENCY: WHAT'S RIGHT FOR YOUR BRAND IN 2025?",
  },
  {
    id: "why-small-businesses-need-social-media-agency-pune",
    title: "WHY SMALL BUSINESSES NEED THE BEST SOCIAL MEDIA AGENCY IN PUNE (NOW MORE THAN EVER)",
  },
  {
    id: "affordable-website-design-startups-india-2025",
    title: "AFFORDABLE WEBSITE DESIGN FOR STARTUPS IN INDIA: WHAT YOU NEED TO KNOW IN 2025",
  },
];

const BlogCard = ({ id, title }) => {
  return (
    <Link to={`/blogs/${id}`}>
      <div className="bg-brand rounded-lg p-8 flex items-center justify-center min-h-[280px] hover:opacity-90 transition-opacity cursor-pointer">
        <h3 className="text-white font-akira text-lg md:text-xl text-center leading-tight">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export const Blogs = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Page Title */}
      <TextDivider className="pt-40 pb-10">
        <div className="text-white font-akira text-4xl sm:text-5xl lg:text-6xl text-center">
          BLOGS
        </div>
      </TextDivider>

      {/* Blog Cards Grid */}
      <div className="px-5 sm:px-10 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {blogPosts.map((blog) => (
            <BlogCard key={blog.id} id={blog.id} title={blog.title} />
          ))}
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="px-5 sm:px-10 lg:px-20 py-20">
        <LetsConnect className="w-full" />
      </div>
    </div>
  );
};