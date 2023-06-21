"use client";
import { useEffect, useRef } from "react";



export function AccordionItem(props: {
  handleToggle: (id: string) => void;
  active: string | null;
  faq: { header: string; id: string; text: string };
}) {
  const contentEl = useRef<HTMLDivElement>(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;
  useEffect(() => {
    if (active === id && contentEl.current) {
      contentEl.current.style.height = `${contentEl.current.scrollHeight}px`;
      contentEl.current.style.transition = `all 0.5s ease`
    } else {
      contentEl.current?.style.setProperty("height", "0px");
      contentEl.current.style.transition = `all 1s ease`

    }
  }, [active, id]);
  return (
    <div className="border border-dark/[10%]">
      <div className="">
        <div
          className={`flex justify-between items-center p-3 cursor-pointer `}
          onClick={() => handleToggle(id)}
        >
          <h5 className="font-medium ">{header}</h5>
          <span>{active === id ? "-" : "+"}</span>
        </div>
      </div>
      <div
        ref={contentEl}
        className={` ${active === id ? "block" : "hidden"} transition-all`}
      >
        <div className="">
          <p className="p-3 text-body-color">{text}</p>
        </div>
      </div>
    </div>
  );
}
