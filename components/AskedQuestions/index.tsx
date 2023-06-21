import React from "react";
import SectionTitle from "../Common/SectionTitle";
import { FAQAccordion } from "./FAQAccordion";

type Props = {};

export function AskedQuestions({}: Props) {
  return (
    <section className="py-10 md:py-12 lg:py-20">
      <div className="container">
        <SectionTitle title="Frequently asked questions (FAQ)" paragraph="" center width="auto" />
        <FAQAccordion />
      </div>
    </section>
  );
}
