import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://freefakeapi.io/api/posts", {
    method: "GET",
  });
  const blogs = await response.json();

  return (
    <div className="space-y-8">
      <h1 className="text-5xl px-4 text-white/40 font-mono font-bold">
        README
      </h1>

      {blogs.map((blog: any) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <div className="py-4 px-4 rounded-lg hover:cursor-pointer transition-all duration-200 space-y-2 hover:bg-white/10">
            <div>
              <span className="text-sm text-white/60">Anonymous</span>
            </div>
            <h2 className="text-3xl font-bold">{blog.title}</h2>
            <p className=" text-white/60 leading-6">
              {blog.content.substring(0, 200)}...
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
