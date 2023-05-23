import '@styles/global.css'

export const metadata ={
    title: "folio",
    description: "make your portfolio now"
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
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout