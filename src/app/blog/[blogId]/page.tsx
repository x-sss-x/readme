import Image from "next/image";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const response = await fetch(`https://freefakeapi.io/api/posts/${blogId}`, {
    method: "GET",
  });
  const blog = await response.json();
  return (
    <div className="py-4 px-4 rounded-lg space-y-2 ">
      <h2 className="text-3xl font-bold">{blog.title}</h2>
      <div>
        <span className="text-sm text-white/60">Anonymous</span>
      </div>
      <hr className="bg-white/60 opacity-40" />
      <div className="relative h-96 w-full">
        <Image src={blog.picture} fill alt={blog.title} />
      </div>
      <p className=" text-white leading-6">{blog.content}</p>
    </div>
  );
}
