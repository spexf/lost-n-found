'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react';
import Cookies from 'js-cookie';
import './style.css'

interface Routes {
    id: number;
    name: string;
    path: string
}

const Navbar = () => {
    const token = Cookies.get('token')
    const [navTrigger , setNavTrigger] = useState(false)
    const pathname: string = usePathname()    
    const routes: Array<Routes> = [
        {
            id:1,
            name: 'home',
            path: '/'
        },
        {
            id:2,
            name: 'lost',
            path: '/lost'
        },
        {
            id:3,
            name: 'found',
            path: '/found'
        },
        {
            id:4,
            name: 'finished',
            path: '/finished'
        },
        {
            id:5,
            name: 'my-uploads',
            path: '/my-uploads'
        },

    ]
    const path = pathname.split("/")
    const currentPath: string = path.length > 2 ? `${path[1]} - detail` : pathname.length <= 1 ? 'home' : pathname.replace('/','')

    return ( 
        <nav className={`navbar ${navTrigger ? 'active' : ''}`}>
            {token == undefined ? <div><a className='hover:text-cyan-500 transition-all duration-200' href="/auth/login">Login</a> / <a className='hover:text-cyan-500 transition-all duration-200' href="/auth/register">Register</a></div> : <div className={`current-page ${navTrigger ? 'active' : 'deactive'}`}>
                <p>{currentPath}</p>    
                <div className="trigger" onClick={()=>setNavTrigger((old)=> !old)}>
                    <div className={`layer-1 ${navTrigger ? 'active' : ''}`}></div>
                    <div className={`layer-2 ${navTrigger ? 'active' : ''}`}></div>
                    <div className={`layer-3 ${navTrigger ? 'active' : ''}`}></div>
                </div>
            </div>}
            <div className={`navigation  ${navTrigger ? 'active' : 'sm:opacity-0'}`}>
                {
                    routes.map((n) => <a className={`mx-5 my-3 ${n.name == currentPath ? 'hidden' : ''}`} id={`navigation-${n.id}`} key={n.id} href={n.path}> {n.name} </a>)
                }
            </div>
        </nav>
     );
}
 
export default Navbar;