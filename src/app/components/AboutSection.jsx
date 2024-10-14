"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title:"Skills",
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
        <li>Test Management</li>
      </ul>
    ),
  },
  {
    title:"Education",
    id:"education",
    content: (
      <ul className="list-disc pl-2">
        <li>Information Systems Engineering Student, Universidad Tecnológica Nacional</li>
        <li>Information Systems Developer Analyst, Universidad Tecnológica Nacional</li>
      </ul>
    ),
  },
  {
    title:"Certification",
    id:"certification",
    content: (
      <ul className="list-disc pl-2">
        <li>First Certificate, Cultural Inglesa</li>
        <li>Full Stack Course, Egg</li>
        <li>Backend Programming, CoderHouse</li>
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
                <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                <p className="text-base lg:text-lg text-justify">
                I am a fourth-year Information Systems Engineering student with experience in web development and advanced programming.
                 My education has enabled me to develop technical skills in various programming languages, complemented by a focus on 
                 systems management and data analysis. I specialize in designing efficient, secure, and scalable solutions, applying a methodical
                  and results-driven approach. I am interested in participating in innovative projects where I can apply my knowledge and contribute
                   to the development of technological solutions.
                </p>
                <div className="flex flex-row  justify-start mt-8">
                  <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                    Education
                  </TabButton>
                  <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
                    Certifications
                  </TabButton>
                  <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                    Skills
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
