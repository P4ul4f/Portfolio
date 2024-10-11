"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
 
const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
    };
    
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
        console.log('Mensaje enviado.');
        setEmailSubmitted(true);
    }
};

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id='contact'>
        
        <div>
            <h5 className="text-xl font-bold text-white my-2">Contacto</h5>
            <p className="text-[#ADB7BE] mb-4 max-2-md">
                {""}
                Interesada en nuevas oportunidades profesionales. Si tienes un proyecto en mente, 
                estaré encantada de conversar sobre cómo puedo aportar valor a tu equipo.
            </p>
            <div className="socials flex flex-row gap-6">
                <Link href="github.com">
                    <Image 
                        src="/images/github.png"
                        alt="Github Icon"
                        width={40}
                        height={40}
                    />
                </Link>
                <Link href="github.com">
                    <Image 
                        src="/images/linkedin.png"
                        alt="Linkedin Icon"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col " onSubmit={handleSubmit}>
                <div className="mb-6">
                <label htmlFor="email" type="email" className="text-white block mb-2 text-sm font-medium">Email</label>
                <input 
                name="email"
                type="email" 
                id="email" 
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                required 
                placeholder="contact@example.com" 
                />
                </div>
                <div className="mb-6">
                <label htmlFor="subject" type="text" className="text-white block mb-2 text-sm font-medium">Asunto</label>
                <input 
                name="subject"
                type="text" 
                id="subject" 
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                required 
                placeholder="Asunto de interés" 
                />
                </div>
                <div className="mb-6">
                    <label 
                        htmlFor="message"
                        className="text-white block text-sm mb-2 font-medium"
                    >
                        Mensaje
                    </label>
                    <textarea 
                    name="message" 
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Escribe tu mensaje aquí"
                    >
                    </textarea>
                </div>
                <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                    Enviar Mensaje
                </button>
                {
                    emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            Email enviado exitosamente.
                        </p>
                    )
                }
            </form>
        </div><div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute bottom-[-0] -left-10 transform -translate-x-1 -translate-1/2">
        </div>
    </section>
  )
}

export default EmailSection
