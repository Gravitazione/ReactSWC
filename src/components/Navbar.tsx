/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '/images/LogoWhite.png';

interface INavbarProps {
  title: string;
  classProps: string;
}

function NavbarItems({ title, classProps }: INavbarProps) {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
}

function Navbar(): JSX.Element {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-6">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {['Market', 'Exchant', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavbarItems key={item + index} title={item} classProps="" />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">Login</li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {['Market', 'Exchant', 'Tutorials', 'Wallets'].map((item, index) => (
              <NavbarItems key={item + index} title={item} classProps="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
