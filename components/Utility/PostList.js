import Date from "../Layout/Date";
import Link from "next/link";

const PostList = ({ postData }) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-7">Posts</h2>
      <ul>
        {postData.map(({ id, date, title, author }) => {
          return (
            <li className="my-2" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="font-semibold hover:text-blue-500">{title}</a>
              </Link>

              <div className="flex justify-between w-fit gap-5">
                <small>
                  <Date dateString={date} />
                </small>
                <small>- {author}</small>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PostList;
