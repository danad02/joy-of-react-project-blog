import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";
import { getBlogPostList } from "@/helpers/file-helpers";

import styles from "./homepage.module.css";

export const metadata = {
  title: "Bits & Bytes",
  content: "A wonderful blog about JavaScript",
};

async function Home() {
  const blogPostList = await getBlogPostList();

  console.log({ blogPostList });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPostList.map((blogPost) => (
        <BlogSummaryCard key={blogPost.slug} {...blogPost} />
      ))}
    </div>
  );
}

export default Home;
