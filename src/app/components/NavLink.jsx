import Link from "next/link";


const NavLink = ({href, title}) => {
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").substring(1); // Obtener el ID de la sección
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
            const offset = 70; // Ajusta este valor según la altura de tu navbar
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <a
        href={href}
        onClick={handleSmoothScroll}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
            {title}
        </a>
    );
};

export default NavLink;