
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {


  return (
    <header className="shadow-lg fixed w-full bg-white">
      <nav className="max-w-7xl mx-auto p-4 flex items-center justify-between ">
        {/* logo */}
        <div>
          <Link className="font-bold text-2xl" href={"/"}>
            Daily Blog
          </Link>
        </div>
        {/* menu  */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex gap-x-5 items-center">
              <NavigationMenuLink href={"/news"}>News</NavigationMenuLink>

              <NavigationMenuLink href={"/services"}>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="px-4 py-2 text-gray-500 w-full shadow-sm space-y-2">
                    <li>
                      <NavigationMenuLink href={"/services/react"}>
                        Web
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href={"/services/next"}>
                        Web_Develoment
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href={"/services/express"}>
                        Express JS
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>

              <NavigationMenuLink href="/about">About</NavigationMenuLink>
              <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* drak mood  */}
        <div className="hidden lg:flex items-center gap-x-10">
          <div className="flex items-center gap-x-2">
            <span>Dark</span>
            <Switch />
          </div>
          <div>
            <Button variant="default">Login</Button>
          </div>
        </div>

        {/* mobile device  */}
        <MobileMenu/>
      </nav>
    </header>
  );
};

export default Navbar;
