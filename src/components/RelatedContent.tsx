import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface RelatedItem {
  title: string;
  description: string;
  href: string;
  type: "internal" | "external";
}

interface RelatedContentProps {
  title: string;
  items: RelatedItem[];
}

const RelatedContent: React.FC<RelatedContentProps> = ({ title, items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 px-4">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                {item.type === "internal" ? (
                  <Link
                    to={item.href}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Kunjungi Situs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
