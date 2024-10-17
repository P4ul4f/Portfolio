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
        e.target.reset();
    }
};

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id='contact'>
        
        <div>
            <h5 className="text-xl font-bold text-white my-2">Contact</h5>
            <p className="text-[#ADB7BE] mb-4 max-2-md">
                {""}
                Interested in new professional opportunities. If you have a project in mind, 
                I would be happy to discuss how I can add value to your team.
            </p>
            <div className="socials flex flex-row gap-6">
                <Link href="https://github.com/P4ul4f">
                    <Image 
                        src="/images/github.png"
                        alt="Github Icon"
                        width={40}
                        height={40}
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/paula-antonella-ferreyra-879983236/">
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
                placeholder="your@email.com" 
                />
                </div>
                <div className="mb-6">
                <label htmlFor="subject" type="text" className="text-white block mb-2 text-sm font-medium">Subject</label>
                <input 
                name="subject"
                type="text" 
                id="subject" 
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                required 
                placeholder="Topic of your message" 
                />
                </div>
                <div className="mb-6">
                    <label 
                        htmlFor="message"
                        className="text-white block text-sm mb-2 font-medium"
                    >
                        Message
                    </label>
                    <textarea 
                    name="message" 
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Type your message here"
                    >
                    </textarea>
                </div>
                <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                    Submit
                </button>
                {
                    emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            Email sent successfully.
                        </p>
                    )
                }
            </form>
        </div>
        <div className="absolute bottom-[-80px] left-[20%] transform -translate-x-1/2 pointer-events-none z-0">
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-96 w-96 blur-3xl"></div>
            </div>
    </section>
  )
}

export default EmailSection
