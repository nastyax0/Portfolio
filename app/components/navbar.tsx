// app/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold tracking-wide">Anastasia</h1>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#package" className="hover:text-purple-600">
            Package
          </a>
          <a href="#portfolio" className="hover:text-purple-600">
            Portfolio
          </a>
          <a href="#values" className="hover:text-purple-600">
            Values
          </a>
          <a href="#contact" className="hover:text-purple-600">
            Contact
          </a>
        </div>
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/40 backdrop-blur px-6 py-4 space-y-4 text-center">
          <a href="#about" onClick={() => setIsOpen(false)} className="block">
            About
          </a>
          <a
            href="#portfolio"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Portfolio
          </a>
          <a
            href="#agreement"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Agreement
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
