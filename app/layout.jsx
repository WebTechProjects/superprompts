import "@styles/global.css"

import Provider from "@components/Provider";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "superprompts",
    description: "superprompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Navbar />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
