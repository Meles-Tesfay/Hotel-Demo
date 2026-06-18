import React, { useEffect } from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import SideBar from '../../components/hotelOwner/SideBar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const LayOut = () => {
    const { user, isOwner, authLoading, navigate } = useAppContext()

    useEffect(() => {
        if (authLoading) return
        if (!user) {
            navigate('/login')
            return
        }
        if (!isOwner) {
            navigate('/')
        }
    }, [user, isOwner, authLoading, navigate])

    if (authLoading || !user || !isOwner) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <SideBar />
                <div className="flex-1 p-4 pt-10 md:px-10 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayOut
