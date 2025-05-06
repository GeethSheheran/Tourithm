"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const DefaultHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const asPath = usePathname();

  // Improved isPathActive to handle nested routes more accurately
  const isPathActive = (path) => {
    if (path === '/') return asPath === '/';
    return asPath.startsWith(path) || asPath === path;
  };

  const handleSubMenuClick = (index, e) => {
    e.preventDefault();
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  useEffect(() => {
    // Close mobile menu and submenu on route change
    setToggle(false);
    setActiveSubMenu(null);
  }, [asPath]);

  return (
    <>
      {/* top bar */}
      <div className="mil-top-panel bg-gray-800 text-white">
        <div className="container-fluid">
          <div className="mil-top-panel-content flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="mil-logo">
              <img src={AppData.header.logo.image} alt={AppData.header.logo.alt} style={{ width: "130px" }} />
            </Link>

            {/* Navigation */}
            <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
              <nav>
                <ul className="flex flex-col md:flex-row md:space-x-6">
                  {AppData.header.menu.map((item, index) => (
                    <li
                      key={`header-menu-item-${index}`}
                      className={`mil-has-children ${isPathActive(item.link) ? "mil-active text-blue-400" : ""}`}
                    >
                      <Link
                        href={item.link}
                        onClick={item.children > 0 ? (e) => handleSubMenuClick(index, e) : null}
                        className="hover:text-gray-300"
                      >
                        {item.label}
                      </Link>
                      {item.children > 0 && (
                        <ul
                          className={`md:absolute md:bg-gray-700 md:rounded md:shadow-lg md:mt-2 ${
                            activeSubMenu === index ? "mil-active block" : "hidden"
                          }`}
                        >
                          {item.children.map((subitem, subIndex) => (
                            <li
                              key={`header-submenu-item-${subIndex}`}
                              className={`${
                                isPathActive(subitem.link) ? "mil-active text-blue-400" : ""
                              } md:px-4 md:py-2 md:hover:bg-gray-600`}
                            >
                              <Link href={subitem.link} className="block hover:text-gray-300">
                                {subitem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right buttons */}
            <div className="mil-top-panel-buttons flex items-center space-x-4">
              <Link href="/contact" className="mil-button mil-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Get Expert Help
              </Link>

              <div
                className={`mil-menu-btn ${toggle ? "mil-active" : ""} md:hidden cursor-pointer`}
                onClick={() => setToggle(!toggle)}
              >
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </div>
            {/* right buttons end */}
          </div>
        </div>
      </div>
      {/* top bar end */}
    </>
  );
};

export default DefaultHeader;