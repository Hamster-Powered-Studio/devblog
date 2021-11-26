import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {unified} from 'unified';
import remarkHtml from "remark-html";
import remarkParse from 'remark-parse';
//directory for stored markdown posts
const postsDirectory = path.join(process.cwd(), "posts");

/**
 * Gets the front mater data of all posts, sorted in the order of the upload date
 * @returns {Array} `data` The sorted front matter data array of objects
 * 
 */
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory).filter((fileName) => {
    return fileName !== "README.md";
  });

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

//returns both the YAML front matter data as well as the content
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await unified()
    .use(remarkHtml)
    .use(remarkParse)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
