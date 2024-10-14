"use client";
import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion } from "framer-motion";
import Link from 'next/link';

const HeroSection = () => {

  const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyVisible = entry.isIntersecting;
        setIsVisible(isCurrentlyVisible); // Cambia el estado basado en la visibilidad
      },
      { threshold: 0.1 } // Detecta si el componente es visible al menos en un 10%
    );

    if (textRef.current) {
      observer.observe(textRef.current); // Observa el componente
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current); 
      }
    };
  }, []);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600" style={{ fontSize: '4.5rem' }}>
              Hello, I&apos;m {" "}
            </span>
            <br></br>
            <span ref={textRef}>
            {isVisible && (
              <TypeAnimation
                sequence={[
                  "Paula",
                  1000,
                  "Systems Analyst",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "Engineering Student",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{fontSize:'4rem'}}
              />
            )}
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          With a results-oriented mindset, I am motivated to work in dynamic environments where I can apply my skills and continuously learn.
           I seek to contribute to projects that challenge my abilities and allow me to grow professionally.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-purple-200 hover:bg-slate-200 text-white"
            >
              Hire me
            </Link>
            <Link
              href="/CV.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-purple-200 hover:bg-slate-800 text-white mt-3"
              download="CV.pdf"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/girl1.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
