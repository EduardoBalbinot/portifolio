"use client";

import Image from "next/image";
import Jobs from "../data/jobs";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden font-sans bg-white text-gray-800">
      <div className="flex flex-col xl:flex-row items-center gap-[7vw]">
        <div>
          <h1 className="xl:text-[2vw] text-center xl:text-left font-bold text-blue-900">Eduardo Balbinot</h1>
          <p className="xl:text-[1vw] text-center xl:text-left text-gray-600">Desenvolvedor Web FullStack</p>
          <p className="xl:hidden xl:text-[1vw] text-center xl:text-left text-gray-500">eduardo.balbinot.dev@gmail.com</p>
        </div>
        <div className="relative mt-12 xl:mt-28">
          <Image
            src="/logos.png"
            alt="logos"
            width={600}
            height={600}
            className="absolute scale-150 animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <Image
            src="/perfil.jpg"
            alt="foto de perfil"
            className="rounded-full max-w-[60vw] xl:w-[15vw] border-4 border-gray-300 shadow-lg"
            width={300}
            height={300}
          />
        </div>
        <div className="hidden xl:block">
          <h2 className="xl:text-[2vw] text-center xl:text-left font-semibold text-blue-900">Contato</h2>
          <p className="xl:text-[1vw] text-center xl:text-left text-gray-500">eduardo.balbinot.dev@gmail.com</p>
        </div>
      </div>
      <h3 className="mt-40 mb-8 font-semibold text-3xl text-center xl:text-left text-blue-800">Alguns projetos em que trabalhei</h3>
      <div className="flex flex-wrap gap-4 w-full xl:w-[1090px]">
        {Jobs.map((job) => (
          <a
            href={job.link}
            target="_blank"
            key={job.title}
            className="m-4 p-4 bg-gray-100 rounded-lg w-[500px] hover:scale-105 transition-transform shadow-md hover:shadow-lg"
          >
            <Image
              src={job.image}
              alt={job.title}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h4 className="py-1 font-bold text-lg text-blue-900">{job.title}</h4>
            <p className="text-sm text-gray-700">{job.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}