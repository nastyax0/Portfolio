"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Agreement from "./components/package";
import Hero from "./components/hero";
import PortfolioPage from "./components/portfolio";
import Contact from "./components/contact";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Portfolio Section */}
      <PortfolioPage />
      <div id="package">
        <section className="px-6">
          <span className="text-sm text-gray-500 italic block mt-8 max-w-xl mx-auto">
            *Please note: The work displayed here is either pre-production,
            based on placeholder content, or shared with full client consent. I
            respect NDAs and value client privacy — no active, confidential, or
            sensitive projects are showcased.
          </span>
        </section>
        {/* Agreement Section */}
        <Agreement />
      </div>

      <section
        id="values"
        className="py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white via-purple-50 to-white text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          What Drives My Work
        </h2>

        <div className="max-w-2xl mx-auto text-gray-700 leading-relaxed text-base sm:text-lg">
          <p className="mb-6">
            Your time matters — and so does mine. I treat every project like a
            digital investment. With each site I build, my goal is simple:
            deliver something that not only looks beautiful, but performs like a
            pro.
          </p>

          {/* Inner card block */}
          <div className="bg-purple-100 border-l-4 border-purple-400 p-5 sm:p-6 rounded-xl shadow-inner text-left space-y-4">
            <p className="relative text-purple-900 font-semibold text-base sm:text-lg before:bg-purple-600">
              <span className="inline-block mr-2 text-purple-600 text-xl">
                ✨
              </span>
              What you can expect from me{" "}
              <span className="font-normal">(regardless of package):</span>
            </p>
            <ul className="list-disc list-inside space-y-2 text-purple-800 text-sm sm:text-base">
              <li>Custom design tailored to your brand and goals</li>
              <li>Responsive layouts that work seamlessly on all devices</li>
              <li>Fast-loading performance with image and code optimization</li>
              <li>Accessible, conversion-focused, user-first UI/UX</li>
            </ul>
          </div>

          <p className="mt-6 text-sm sm:text-base">
            My approach blends aesthetic sensibility with functional clarity,
            following{" "}
            <a
              href="https://www.feelingpeaky.com/9-principles-of-good-web-design/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 underline hover:text-purple-800 transition"
            >
              proven design principles
            </a>{" "}
            and real-world strategies to help your site do more than just exist
            — it works.
          </p>

          {/* CTA Button with Glass Effect */}
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="relative px-8 py-4 font-semibold text-purple-800 rounded-full border-2 border-purple-300 bg-white/20 backdrop-blur-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-purple-500 hover:bg-purple-100/30"
            >
              Let's Build Something!
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-400 bg-white">
        © {new Date().getFullYear()} Anastasia{"<3"}. All rights reserved.
      </footer>
    </main>
  );
}
