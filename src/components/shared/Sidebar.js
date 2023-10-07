import React from 'react'
import { FcMultipleInputs } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation';
import { Link, useLocation } from 'react-router-dom';
export default function Sidebar() {
    const pathname = useLocation()
    return (
        <div className='flex flex-col bg-slate-700 w-60 text-white p-3'>
            <div className="flex items-center gap-2 p-3">
                <FcMultipleInputs fontSize={24} />
                <span className="text-2xl font-bold">R-SHOP</span>
            </div>
            <div className="flex-1">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <Link to={link.path} 
                        className={`flex items-center gap-2 p-3 rounded-md ${pathname.pathname === link.path ? 'bg-slate-600' : ''}`}
                        key={link.key}>
                        {link.icon}
                        <span>{link.label}</span>
                    </Link>
                ))}
            </div>
            <div className="">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <Link to={link.path} 
                        className={`flex items-center gap-2 p-3 rounded-md ${pathname.pathname === link.path ? 'bg-slate-600' : ''}`}
                        key={link.key}>
                        {link.icon}
                        <span>{link.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
