import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Main = ({children}) => {
  return (
    <>
        <Navbar />
        <Sidebar />

        <div className="p-4 mt-16 sm:ml-64">
            {children}
        </div>
    </>
  )
}

export default Main