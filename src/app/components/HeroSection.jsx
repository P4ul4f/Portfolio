"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion } from "framer-motion";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{opacity: 1, scale: 1}} 
                transition={{duration: 0.5}} 
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start max-w-[700px]">
                <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200">
                        Hola, soy {""}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Paula',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Analista de Sistemas de Información',
                            1000,
                            'Estudiante de Ingeniería en Sistemas de Información',
                            1000,
                            'Full Stack Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-justify">
                Con una mentalidad orientada a resultados, me motiva trabajar 
                en entornos dinámicos donde puedo aplicar mis habilidades y aprender continuamente. 
                Busco contribuir a proyectos que desafíen mis capacidades y me permitan crecer profesionalmente.
                </p>
                <div>
                    <Link href="#contact">
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-200 text-white">
                        Contratame
                    </button>
                    </Link>
                    <a href="/CVPaulaFerreyra.pdf" download="CVPaulaFerreyra">
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> Descargar CV </span>
                    </button>
                    </a>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{opacity: 1, scale: 1}} 
            transition={{duration: 0.5}} 
            className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className=" bg-[#181818] w-[300px] h-[250px] lg:w-[400px] rounded-full lg:h-[400px] relative mx-auto">
                    <Image 
                    src="/images/girl1.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={350}
                    height={350}
                    />
                </div>
                
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection
