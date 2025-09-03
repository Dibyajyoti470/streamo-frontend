import type { ContentItem, WatchProgress } from "@/shared/schema";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Link } from "wouter";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/shared/utils";
import { Progress } from "../ui/progress";

interface ContentRowProps {
  title: string;
  contents: ContentItem[];
  viewAllLink?: string;
  aspectRatio?: "portrait" | "landscape" | "square";
  showPlayButton?: boolean;
  progress?: Record<number, WatchProgress>;
}

export default function ContentRow({
  title,
  contents,
  viewAllLink,
  aspectRatio = "portrait",
  showPlayButton = false,
  progress,
}: ContentRowProps) {
  if (contents.length === 0) {
    return null;
  }
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">{title}</h2>
        {viewAllLink && (
          <Link
            className="text-sm text-gray-400 hover:text-foreground transition-colors flex items-center gap-1"
            href={viewAllLink}
          >
            View All
            {/* <HugeiconsIcon icon={ArrowRight01Icon} size={18} /> */}
          </Link>
        )}
      </div>
      <Carousel>
        <CarouselContent className="-ml-2">
          {contents.map((content, index) => (
            <CarouselItem
              key={index}
              className={cn("flex flex-col gap-2 pl-2", {
                "basis-1/7": aspectRatio === "portrait",
                "basis-1/5": aspectRatio === "landscape",
              })}
            >
              <Card className="overflow-hidden border-none rounded-sm">
                <CardContent className="p-0">
                  <img
                    className={cn("w-full object-cover", {
                      "aspect-[16/9]": aspectRatio === "landscape",
                      "h-full": aspectRatio === "portrait",
                    })}
                    src={
                      aspectRatio === "landscape"
                        ? content.bannerUrl
                        : content.thumbnailUrl
                    }
                    alt={content.title}
                  />
                </CardContent>
                {aspectRatio === "landscape" && (
                  <CardFooter className="p-0">
                    <Progress
                      value={40}
                      className="h-0.5 rounded-none"
                    ></Progress>
                  </CardFooter>
                )}
              </Card>
              {aspectRatio === "landscape" && (
                <span className="text-gray-300">{content.title}</span>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
