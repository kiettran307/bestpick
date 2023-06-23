import React from "react";
import SectionTitle from "../Common/SectionTitle";
import { FAQAccordion } from "./FAQAccordion";
import Image from "next/image";
import { Button } from "@/shared/utils/form/Button";
import { MdOutlineEmail } from "react-icons/md";

type Props = {};

export function AskedQuestions({}: Props) {
  return (
    <section className="py-10 md:py-12 lg:py-20">
      <div className="container flex flex-col items-center ">
        <Image
          src={"/svg/image-faq.svg"}
          alt="image FAQ"
          className="mb-4"
          width={327}
          height={207}
        />

        <div className={`mb-11 text-center lg:mb-16`} data-wow-delay=".1s">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black  sm:text-2xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto text-base !leading-relaxed text-accent md:text-xl lg:max-w-[650px]">
            We tried to answer most common questions, if you have any
            additional, please get in touch with our friendly team
          </p>
        </div>
        <FAQAccordion />
        <div className="flex w-full text-center flex-col items-center justify-center gap-8 rounded-lg bg-primary-light p-8 lg:max-w-[800px] mt-10">
          <div className="text-xl font-semibold">Still have a questions?</div>
          <p className="w-2/3 text-base text-accent">
            We're sorry we couldn't provide you with the information you were
            looking for. Please contact us and we'll be happy to help.{" "}
          </p>
          <Button
            text="Contact us"
            className={"bg-primary rounded-xl"}
            icon={<MdOutlineEmail />}
            iconPosition="start"
            iconClassName={"mr-2"}
          />
        </div>
      </div>
    </section>
  );
}
