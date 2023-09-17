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
        <nav>
            <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose className=" "></AiOutlineClose> : <FiMenu className=" "></FiMenu>
                }
            </div>
            <ul className="md:flex gap-4">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    )
}

export default NavBar