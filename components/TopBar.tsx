import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState } from "react";

const TopBar: React.FC<{
  onClick: (data: any) => void;
  showSidebar: boolean;
}> = ({ onClick, showSidebar }) => {
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    onClick(!showSidebar);
  };

  return (
    <>
      <header className="fixed w-full top-0 top-0 z-50 flex items-center justify-between px-3 py-2 border-b shadow-lg bg-white/90 backdrop-blur-sm border-slate-400/40">
        <div className="flex items-center flex-grow basis-0">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            NextJS Documentation Template
          </Link>
        </div>
        <SearchBar />
        <button className="lg:hidden" onClick={handleClick}>
          {showSidebar ? (
            <svg
              className="w-8 h-8 lg:hidden"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
                  fill="#0F0F0F"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                  fill="#0F0F0F"
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              className="w-8 h-8 lg:hidden"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          )}
        </button>
      </header>
    </>
  );
};

export default TopBar;
