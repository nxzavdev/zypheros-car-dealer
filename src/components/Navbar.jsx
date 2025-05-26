/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle';
import navLogo from '../assets/zypheros.svg';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = throttle(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY === 0) {
      setAtTop(true);
      setVisible(true);
    } else {
      setAtTop(false);
      setVisible(currentScrollY < lastScrollY);
    }
    lastScrollY = currentScrollY;
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    }
  }, []);

  let headerClassName = 'header ';

  if (!atTop && visible) headerClassName = 'header blurred'
  else if (!visible) headerClassName='header hiddenx'
  else headerClassName= 'header'

  return (
    <header className={`${headerClassName} h-20 w-full fixed top-0 left-0 z-10`}>
      <div className="max-w-[1920px] px-6 mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-x-4">
          <svg data-v-18c94385="" width="28" height="28" viewBox="0 0 28 28" fill="#fffbf3" xmlns="http://www.w3.org/2000/svg">
            <path data-v-18c94385="" d="M25.6667 25.6667H18.6667V17.0226L11.6667 10.027V2.33114H25.6667V25.6667ZM2.33333 25.6667V2.33114H9.33334V10.9994L16.3333 17.995V25.6776L2.33333 25.6667ZM28 0H0V28H28V0Z" fill="#fffbf3"></path>
          </svg>
          <nav>
            <ul className="flex gap-x-4">
              <li><a href="#">Models</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Service</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <span className="text-xl absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <img width={140} src={navLogo} alt="Logo" />
          </span>
        </div>
        <div className="flex items-center">
          <nav>
            <ul className="flex gap-x-4">
              <li><a href="">Drive Test</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Dealers</a></li>
              <li><a href="">English</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
