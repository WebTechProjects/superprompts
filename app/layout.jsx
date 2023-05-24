import '@styles/global.css'

import Navbar from "@components/Navbar";
// import Provider from "@components/Provider";

export const metadata ={
    title: "superprompts",
    description: "super-prompts"
}

import React from 'react'

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient">

                </div>
            </div>
            <main className="app">
            <Navbar />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout