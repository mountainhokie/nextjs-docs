"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar: React.FC<{
  showSidebar: boolean;
}> = ({ showSidebar }) => {
  const pathname = usePathname();
  const [navItems, setNavItems] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    const fetchNavItems = async () => {
      const response = await fetch("/api/navigation");
      const data = await response.json();
      setNavItems(data);
    };

    fetchNavItems();
  }, []);

  return (
    <div
      className={`${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } transition duration-150 lg:translate-x-0 fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none`}
    >
      <div className="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"></div>
      <nav className="sticky top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
        <ul
          role="list"
          className="h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-8 space-y-8"
        >
          {/* <div className="w-64 bg-gray-100 h-full p-4 overflow-auto"> */}
          {Object.keys(navItems).map((section) => (
            <li key={section}>
              <h2 className="capitalize font-semibold tracking-tight text-slate-900">
                {section.slice(section.indexOf(".") + 1).replace("-", " ")}
              </h2>
              <ul role="list" className="pl-1 mt-3 mb-8 space-y-2">
                {navItems[section].map((item) => {
                  const href = `/${section}/${item}`;
                  const isActive = pathname === href;
                  return (
                    <li key={item}>
                      <Link
                        href={href}
                        className={`capitalize block p-2 ${
                          isActive
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {item.slice(item.indexOf(".") + 1).replace("-", " ")}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
