"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Me from "@/public/Me.jpeg";
import { socials } from "@/data/socials";
import Link from "next/link";

export default function Hero() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const MAX_ROTATION = 180; // degrees
  const rotation = Math.min(scrollY * 0.15, MAX_ROTATION);


  return (
    <section className="min-h-screen flex items-center justify-center pt-22">
      <div className="flex flex-col items-center">
        {/* Avatar + Floating Icons */}
        <div className="relative w-75 h-75 md:w-105 md:h-105 mb-10 flex justify-center items-center">
          {/* Profile Image */}
          <div className="relative w-55 h-55 md:w-75 md:h-75 appear">
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
              className="
              absolute
              top-1/2 left-1/2
              w-59 h-59 md:w-80 md:h-80 
              transition-transform duration-75"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgb(31 41 55)" // gray-800
                  strokeWidth="1"
                  strokeDasharray="16 4"
                />
              </svg>
            </div>

            <Image
              src={Me}
              alt="Annsh Kumar Singh"
              fill
              className="object-cover rounded-full z-10"
              priority
            />
          </div>

          {/* Floating Icons */}
          {socials.map((social, index) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                absolute ${social.className}
                w-10 h-10
                rounded-full
                bg-white shadow-md
                flex items-center justify-center
                float
              `}
              style={{
                animationDelay: `${index * 0.8}s`,
                animationDuration: `${6 + index}s`,
              }}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>

        {/* Text */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 appear">
          Annsh Kumar Singh
        </h1>
        <p className="text-lg text-gray-600 appear">
          Full Stack Developer
        </p>
      </div>
    </section>
  );
}