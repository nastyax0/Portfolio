"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#fefaf6] to-[#f3f4f6] text-center px-4 overflow-hidden">
      {/* Soft purple overlay highlight */}
      <div className="absolute inset-0 bg-purple-200 opacity-20 pointer-events-none"></div>

      <div className="relative z-10 space-y-6 max-w-2xl backdrop-blur-sm p-4 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-purple-800">
          <span className="inline-block">
            <Typewriter
              words={[
                "Hi, I'm Anastasia!",
                "Creative Designer",
                "Web Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700">
          Crafting beautiful, high‑performing web experiences for brands that
          mean business.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
          {/* Solid Premium Button */}
          <a
            href="https://anastasiadev464.carrd.co/"
            className="px-8 py-4 bg-purple-600/80 text-white font-semibold rounded-full shadow-lg backdrop-blur-md border border-white/20 hover:bg-purple-700/90 transition-all duration-300"
          >
            Get E-Card
          </a>

          {/* Glass Button */}
          <a
            href="#contact"
            className="relative px-8 py-4 font-semibold text-purple-800 rounded-full border-2 border-purple-300 bg-white/20 backdrop-blur-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-purple-500 hover:bg-purple-100/30"
          >
            Book a Chat
          </a>
        </div>
      </div>
    </section>
  );
}
