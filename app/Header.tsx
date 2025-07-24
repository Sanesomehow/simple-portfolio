import Link from "next/link";
import { ModeToggle } from "./components/ModeToggle";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export const Header = () => {
  return (
    <header className="flex justify-between w-full max-w-screen md:w-6/10 p-5">
      <div className="flex items-center">
        <Link href="/">
          <p>Siddhesh Narsingkar</p>
        </Link>
      </div>
      <div className="flex items-center gap-4 md:gap-20">
        {/* <div className="gap-6 md:gap-10 hidden md:flex">
          <Link href="/projects">
            <p>Projects</p>
          </Link>
          <Link href="/blog">
            <p>Blog</p>
          </Link>
        </div> */}
        <div className="flex gap-5 justify-center items-center">
          <ModeToggle />
          {/* <div className="flex md:hidden items-center">
            <Menu>
              <MenuButton>
                <svg
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </MenuButton>
              <MenuItems anchor="bottom" className="w-full max-w-screen flex flex-col items-center">
                <MenuItem>
                  <a className="flex data-focus:bg-blue-100" href="/projects">
                    Projects
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="flex data-focus:bg-blue-100" href="/blog">
                    Blog
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div> */}
        </div>
      </div>
    </header>
  );
};
