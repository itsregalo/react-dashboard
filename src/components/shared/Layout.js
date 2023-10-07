import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout (){
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar/>
            {/* <div className="">
                Header
            </div> */}
            <div className="p-4">
                {<Outlet/>}
            </div>
            {/* <div className="">
                Footer
            </div> */}
        </div>
    )
}