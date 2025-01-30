import { features } from "@/app/data/features";
import React from "react";
import { Card, CardContent } from "../ui/card";

const FeaturesUI = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container  mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          Powerful Features for your career growth
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => {
          return (
            <Card
              key={index}
              className="border-2  hover:border-primary transition-colors duration-300"
            >
              <CardContent className="pt-6 text-center flex flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                  {item.icon}
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesUI;
