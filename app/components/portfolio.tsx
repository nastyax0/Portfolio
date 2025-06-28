"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "Academica Style",
    description:
      "“Clear, structured, and easy to navigate, my clients told me how awesome it looked!”",
    image: "/image.png",
    link: "https://tbi-ten.vercel.app",
  },
  {
    title: "Creative Style",
    description:
      "“I love my new site — fast, clean, and exactly what I asked for! It truly represents my brand!”",
    image: "/Palco.png",
    link: "https://palco-seven.vercel.app",
  },
  {
    title: "Professional Style",
    description:
      "“The site layout made it simple for my audience to find what they needed. Perfect for my work!”",
    image: "/yccexmun.webp",
    link: "https://www.yccexmun.in",
  },
];

export default function PortfolioPage() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
        Sample Work
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            el: ".custom-pagination", // Target this custom container
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          className="pb-12"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-4 flex justify-center space-x-2" />
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div
      className={`
    group bg-white rounded-xl overflow-hidden 
    shadow-md transition-all duration-300 mx-2
    hover:shadow-xl hover:-translate-y-2 hover:border-purple-600
    md:hover:shadow-xl md:hover:-translate-y-2 md:hover:border-purple-600
    md:group-hover:shadow-xl md:group-hover:-translate-y-2 md:group-hover:border-purple-600
    border border-purple-600 md:border-transparent
    bg-purple-300
  `}
    >
      <div className="relative">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className={`
            w-full h-48 object-cover transition-all duration-300
            md:group-hover:ring-4 md:group-hover:ring-purple-400/40
            ring-4 ring-purple-400/30 md:ring-0
          `}
        />
      </div>
      <div className="p-6">
        <h3
          className={`
            font-semibold text-xl mb-2 transition-colors duration-300
            text-purple-700 md:text-gray-900 md:group-hover:text-purple-700
          `}
        >
          {project.title}
        </h3>
        <p className="text-sm text-gray-600">
          <mark
            className={`
              px-1 transition-colors duration-300
              bg-purple-100 md:bg-gray-100 md:group-hover:bg-purple-100
            `}
          >
            {project.description}
          </mark>
        </p>
        <a href={project.link}>
          <button
            className={`
            mt-4 transition duration-300 inline-block px-6 py-2 bg-purple-600 text-white rounded-full font-medium
            hover:bg-purple-700
            opacity-100 md:opacity-0 md:group-hover:opacity-100
          `}
          >
            View Case Study
          </button>
        </a>
      </div>
    </div>
  );
}
