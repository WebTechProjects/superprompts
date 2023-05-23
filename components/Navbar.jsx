"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, getProviders } from "next-auth/react";


const Navbar = () => {
    // const {data: session} = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);
  return (
    <nav className='flex-center mb-16 pt-3'>


      {/* Mobile Navigation */}
      <div>
        {/* {session?.user ? ( */}
          <div className='flex'>
            <div className='logo_text' onClick={() => setToggleDropdown(!toggleDropdown)}><h1>folio</h1></div>
            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        {/* ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )} */}
      </div>
    </nav>
  )
}

export default Navbar