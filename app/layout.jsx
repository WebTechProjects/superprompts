import '@styles/global.css'

import Navbar from "@components/Navbar";

export const metadata ={
    title: "superprompts",
    description: "super-prompts"
}

import React from 'react'
import Provider from '@components/Provider';

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <div className="main">
                <div className="gradient">

                </div>
            </div>
            <main className="app">
            <Navbar />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout