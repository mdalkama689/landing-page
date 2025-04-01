"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    url: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-[100%] overflow-hidden ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li key={item.name}>
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none  pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)]  w-[calc(100%_+_4px)]"
              ></div>

              <div className="relative z-20 mt-6 flex items-center justify-center w-[300px] h-[200px]">
                <span className="flex flex-col gap-6 transition duration-300 w-[300px] border-t-1 border-b-1 border-[#f08739] rounded-2xl hover:border hover:border-[#f08739] h-[150px]  items-center justify-center">
                  <Image
                    src={item.url}
                    alt={item.name}
                    height={200}
                    width={200}
                    className="object-contain"
                  />
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
