import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { dummyProfileData } from '../assets/assets'
import { MenuIcon } from 'lucide-react'

const Sidebar = () => {

    const { pathname } = useLocation()

    const [userName, setUserName] = useState('')
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(()=>{
        setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName)
    },[])

    // Close mobile sidebar on route change

    useEffect(()=>{
        setMobileOpen(false)
    },[pathname])


    const sidebarContent = (
        <>
        
        </>
    )

  return (
    <>
    {/* Mobile Hamburger Button */}

    <button onClick={()=>setMobileOpen(true)} className='lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10'>
        <MenuIcon size={20} />
    </button>

    {/* Mobile Overlay */}

    {mobileOpen && <div className='lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40' onClick={()=>setMobileOpen(false)} /> }


    {/* Sidebar - Desktop */}
    <aside className='hidden lg:flex flex-col h-full w-[260px] bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white shrink-0 border-r border-white/4'>
        {sidebarContent}
    </aside>
    </>
  )
}

export default Sidebar

