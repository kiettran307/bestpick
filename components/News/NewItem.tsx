import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export type NewProps = {
  title:string;
  content:string;
}

export  function NewItem({ post }: { post: NewProps }) {

  return (
    <div
    className="relative overflow-hidden bg-white rounded-md wow fadeInUp shadow-one dark:bg-dark"
    data-wow-delay=".1s"
  >
    <Link href="/" className="relative block h-[220px] w-full">
      <span className="absolute z-20 inline-flex items-center justify-center px-4 py-1 text-sm font-semibold text-white capitalize rounded-md top-4 left-4 bg-primary">
      hot
      </span>
      <Image src={"/default.jpg"} alt="image" fill />
    </Link>
    <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-4 xl:py-4 xl:px-4 2xl:p-6">
      <h3 className=''>
        <Link
          href="/"
          className="block mb-4 text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
        >
          {post.title}
        </Link>
      </h3>
      <p className="text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
      {post.content}
      </p>
     
    </div>
  </div>
  )
}