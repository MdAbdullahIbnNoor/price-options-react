import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/products', name: 'Products', id: 'products' }
    ];


    return (
        <nav className="text-black p-6 bg-yellow-300">
            <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <FiMenu></FiMenu>
                }
            </div>
            <ul className={`md:flex md:items-center gap-4 duration-1000 md:-ml-100
            ${open ? 'top-10' : '-top-60'}
            absolute md:static bg-yellow-300 px-4 py-4 shadow-lg md:shadow-none space-y-2 rounded-xl`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    )
}

export default NavBar