"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title:"Habilidades",
    id:"skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>SQL</li>
        <li>Java</li>
        <li>Python</li>
        <li>Git</li>
        <li>API</li>
        <li>Gestión de Pruebas</li>
      </ul>
    ),
  },
  {
    title:"Educación",
    id:"education",
    content: (
      <ul className="list-disc pl-2">
        <li>Estudiante de Ingeniería en Sistemas de Información, Universidad Tecnológica Nacional</li>
        <li>Analista Desarrollador de Sistemas de Información, Universidad Tecnológica Nacional</li>
      </ul>
    ),
  },
  {
    title:"Certificaciones",
    id:"certification",
    content: (
      <ul className="list-disc pl-2">
        <li>First Certificate, Cultura Inglesa</li>
        <li>Curso Full Stack, Egg</li>
        <li>Programación Backend, CoderHouse</li>
        <li>React Js, CoderHouse</li>
        <li>Python, Udemy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const[isPending, startTransition]= useTransition();

  const handleTabChange = (id) => {
    startTransition(()=> {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
            <Image src="/images/aboutimage.jpg" width={400} height={400} className="rounded-lg" alt="About me image"></Image>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">Acerca de mí</h2>
                <p className="text-base lg:text-lg text-justify">Soy estudiante de cuarto año de Ingeniería en Sistemas de Información, con experiencia en desarrollo web y programación avanzada. Mi formación me ha permitido desarrollar habilidades técnicas en diversos lenguajes de programación, complementadas con un enfoque en la gestión de sistemas y el análisis de datos. Me especializo en el diseño de soluciones eficientes, seguras y escalables, aplicando un enfoque metódico y orientado a resultados. Estoy interesado en participar en proyectos innovadores donde pueda aplicar mis conocimientos y contribuir al desarrollo de soluciones tecnológicas.
                </p>
                <div className="flex flex-row  justify-start mt-8">
                  <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                    Educación
                  </TabButton>
                  <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
                    Certificaciones
                  </TabButton>
                  <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                    Habilidades
                  </TabButton>
                </div>
                <div className="mt-8">
                </div>
                  {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
    </section>
  )
}

export default AboutSection;
