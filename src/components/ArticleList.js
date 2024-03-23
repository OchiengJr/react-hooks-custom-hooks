import React from "react";
import ArticlePreview from "./ArticlePreview";

function ArticleList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>No articles found.</p>; // Render a message if there are no posts
  }

  return (
    <main>
      {posts.map((post) => (
        <ArticlePreview key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;
