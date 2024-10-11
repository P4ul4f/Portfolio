import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between">
          <Image className="ml-4" src="/images/logo.png" width={50} height={50} alt="Logo image"></Image>
            <p className="text-slate-400">© 2024</p>
        </div>
    </footer>
  )
}

export default Footer
