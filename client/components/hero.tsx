"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play } from "lucide-react";

const Hero = () => {
  const [showThumbnail, setShowThumbnail] = useState(true);

  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const thumbnailUrl =
    "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg";

  const handlePlayClick = () => {
    setShowThumbnail(false);
  };

  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
        {/* Left Side */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Master <span className="text-gradient">New Skills</span> & Advance
            Your Career
          </h1>
          <p className="text-xl text-foreground/80">
            A powerful, secure, and intuitive platform for learning that helps
            you develop in-demand skills with courses led by industry experts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/courses">
              <Button className="hero-button bg-hero-gradient hover:opacity-90">
                Explore Courses
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" className="hero-button">
                Join For Free
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Join over{" "}
              <span className="font-bold text-foreground">10,000+</span>{" "}
              students already learning
            </p>
          </div>
        </div>

        {/* Right Side: Video Player */}
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-xl border border-neutral-700 bg-black relative">
            {showThumbnail ? (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                onClick={handlePlayClick}
              >
                <img
                  src={thumbnailUrl || "/placeholder.svg"}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/educational-video.png";
                  }}
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform hover:scale-110 shadow-lg">
                  <Play className="h-10 w-10 text-white fill-white ml-1" />
                </div>
              </div>
            ) : (
              <iframe
                src={`${videoUrl}?autoplay=1&rel=0`}
                title="Educational Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
