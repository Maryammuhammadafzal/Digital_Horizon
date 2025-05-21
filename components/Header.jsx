"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../public/logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Toggle } from "./ui/toggle";
import { AlignCenter, X } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  });
let menuRef = useRef(null);
useEffect(() => {
  const closeMenuhandler = (event) => {
    if (menuRef.current && menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener("click", closeMenuhandler);

  return () => {
    document.removeEventListener("click", closeMenuhandler);
  };
}, []);
  return (
    <header className="w-full h-auto flex justify-center items-center">
      <div className="lg:w-[85%] md:w-[95%] w-[98%] py-8 md:py-12 flex justify-between items-center relative">
        <Link href="/" className="w-60 h-[50px]">
          <Image
            src={Logo}
            title="Digital Horizon"
            alt="Digital Horizon"
            className="md:max-w-[200px] max-w-[160px] h-[50px] object-fill"
          />
        </Link>
        <div className="w-auto h-auto px-2">
          <NavigationMenu className="justify-center items-center hidden md:flex">
            <NavigationMenuList className="flex gap-2 lg:gap-4">
              {/* Item 1 */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 2 */}
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 3 */}
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink
                      href="/services/development&design"
                      className="w-[200px]"
                    >
                      Web Development & Design
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/services/marketing">
                      Digital Marketing
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/services/brand">
                      Branding & Identity
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/services/ecommerce">
                      Ecommerce Solution
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              {/* Item 4 */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink
                    href="/blog/project"
                    className="w-[200px]"
                  >
                    Project Alpha
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/blog/brand" className="w-[200px]">
                    Brand Beta
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/blog/tech" className="w-[200px]">
                    Tech Gamma
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* Item 5 */}
              <NavigationMenuItem>
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    FAQs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 6 */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Toggle
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden flex text-2xl cursor-pointer"
          >
            <AlignCenter size={64} className="w-[100px] " />
          </Toggle>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen ? (
          <div
            data-aos="fade-left"
            ref={menuRef}
            className="mobile-menu absolute -right-2 top-0 p-3 w-[280px] h-screen bg-white shadow-lg"
          >
            <Toggle
              data-aos="fade-right"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden flex text-2xl cursor-pointer"
            >
              <X size={64} className="w-[100px] " />
            </Toggle>

            <NavigationMenu className="w-full py-10 ">
              <NavigationMenuList className="w-full flex flex-col items-start gap-2 lg:gap-4">
                {/* Item 1 */}
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* Item 2 */}
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* Item 3 */}
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink
                        href="/services/development&design"
                        className="w-[200px]"
                      >
                        Web Development & Design
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/services/marketing">
                        Digital Marketing
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/services/brand">
                        Branding & Identity
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/services/ecommerce">
                        Ecommerce Solution
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
                {/* Item 4 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink
                      href="/blog/project"
                      className="w-[200px]"
                    >
                      Project Alpha
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/blog/brand"
                      className="w-[200px]"
                    >
                      Brand Beta
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/blog/tech" className="w-[200px]">
                      Tech Gamma
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Item 5 */}
                <NavigationMenuItem>
                  <Link href="/faq" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      FAQs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* Item 6 */}
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
