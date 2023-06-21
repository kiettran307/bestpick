import React from "react";
import SectionTitle from "../Common/SectionTitle";
import blogData from "../Blog/blogData";
import SingleBlog from "../Blog/SingleBlog";
import { NewItem } from "./NewItem";
import newData from "./newData";

type Props = {};

export function News({}: Props) {
  return (
    <section className="py-10 md:py-12 lg:py-20">
      <div className="container">
        <SectionTitle title="Blog or news" paragraph="" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {newData.map((item,index) => (
            <div key={index} className="w-full">
             <NewItem post={item}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
