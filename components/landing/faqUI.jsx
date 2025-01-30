import { faqs } from "@/app/data/faq";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqUI = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container  mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Frequently Asked Questions
          </h2>
          <p>Find answers to common Questions about our platform</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => {
            return (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqUI;
