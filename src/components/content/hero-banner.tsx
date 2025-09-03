import React from "react";
import type { ContentItem } from "@/shared/schema";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon } from "@hugeicons/core-free-icons";

interface HeroBannerProps {
  contents: ContentItem[];
}

export default function HeroBanner({ contents }: HeroBannerProps) {
  const fadePlugin = React.useRef(Fade());
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative">
      <Carousel className="w-full" plugins={[fadePlugin.current]}>
        <CarouselContent>
          {contents.map((content, index) => (
            <CarouselItem key={index}>
              {/* <Card className="p-0 border-0 rounded-none overflow-hidden"> */}
              <Card className="overflow-hidden border-0">
                <CardContent className="relative flex items-center justify-center p-0">
                  <img
                    className="w-full h-[85vh] object-cover"
                    src={content.bannerUrl}
                    alt={content.title}
                  />
                  <div className="absolute w-2xl flex flex-col gap-3 left-0 bottom-0 p-12 z-10">
                    <h1 className="text-4xl font-semibold">{content.title}</h1>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-medium">
                        {content.releaseYear}
                      </span>
                      <span className="text-lg font-medium">
                        {content.duration}
                      </span>
                    </div>
                    <span className="text-lg font-light line-clamp-3">
                      {content.description}
                    </span>
                    {/* <Button className="text-foreground text-lg w-1/3 h-12 font-semibold bg-gradient-to-tr from-red-500 to-pink-500 [&_svg]:size-6 mt-2"> */}
                    <Button className="text-lg text-[#ff355e] mt-2 w-1/3 py-3 h-auto font-medium bg-foreground/10 backdrop-blur-sm [&_svg]:size-6">
                      <HugeiconsIcon
                        icon={PlayIcon}
                        fill="#ff355e"
                        strokeWidth={2}
                      />
                      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-pink-500">
                        Watch Now
                      </span>
                      {/* <HugeiconsIcon icon={PlayIcon} strokeWidth={2} /> */}
                      {/* <span className="text-foreground">Watch Now</span> */}
                    </Button>
                  </div>
                  {/* <div className="absolute bg-gradient-to-r from-black/80 to-transparent w-2xl top-0 bottom-0 left-0"></div> */}
                  <div className="absolute bg-gradient-to-tr from-black via-black/10 to-transparent top-0 bottom-0 left-0 right-0"></div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
      {/* <div className="w-lg p-12 z-10 bottom-0 right-0 absolute">
        <Carousel className="">
          <CarouselContent className="-ml-2">
            {contents.map((content, index) => (
              <CarouselItem className="basis-1/5 pl-2" key={index}>
                <Card className="overflow-hidden border-0 rounded-[4px]">
                  <CardContent className="flex aspect-3/2 items-center justify-center p-0 ">
                    <img
                      className="w-full h-full object-cover"
                      src={content.bannerUrl}
                      alt={content.title}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div> */}
    </section>
  );
}
