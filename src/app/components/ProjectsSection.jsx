"use client";
import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {animate, motion, useInView} from "framer-motion";

const projectsData = [
    {
        id:1,
        title: "Full Stack Website", 
        description:"Cinéfilos es una plataforma dedicada a explorar y analizar las preferencias de consumo audiovisual.",
        image:"/images/cine.png",
        tag:["All", "Web"],
        gitUrl:"https://github.com/P4ul4f/CinefilosFront.git",
        previewUrl:"/",
    },
    {
        id:2,
        title: "React Portfolio Website", 
        description:"Portfolio personal.",
        image:"/images/fondo.png",
        tag:["All", "Web"],
        gitUrl:"https://github.com/P4ul4f/Portfolio.git",
        previewUrl:"/",
    },
    
    {
        id:3,
        title: "E-commerce Aplication", 
        description:"Este proyecto fue desarrollado en una asignatura de la universidad.",
        image:"/images/sabor.png",
        tag:["All", "Web"],
        gitUrl:"https://github.com/Lisandro939/el-buen-sabor-API.git",
        previewUrl:"/",
    },
    {
        id:4,
        title: "Frontend Website", 
        description:"Proyecto realizado para curso de JavaScript.",
        image:"/images/uco.png",
        tag:["All", "Web"],
        gitUrl:"https://github.com/P4ul4f/proyectofinal.git",
        previewUrl:"/",
    },
    {
        id:5,
        title: "App", 
        description:"Updating...",
        image:"/images/fondo.png",
        tag:["All", "Mobile"],
        gitUrl:"/",
        previewUrl:"/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
      };

      
    const filterProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariant = {
        initial: { y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
    };

    return (
      
    <section id='projects'>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
    </h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
        onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
        <ProjectTag
        onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
        <ProjectTag
        onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}/>
    </div>
    
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((project, index) => (
        <motion.li 
        key={index}
        variants={cardVariant} 
        initial="initial" 
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.image}
                tags={project} 
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
        </motion.li>
    ))}
    </ul>
</section>
);
};

export default ProjectsSection;
