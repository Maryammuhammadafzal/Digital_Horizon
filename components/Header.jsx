import Image from "next/image";
import React from "react";
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
import { SquareMenu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-auto flex justify-center items-center">
      <div className="lg:w-[85%] md:w-[95%] w-[98%] py-8 md:py-12 flex justify-between items-center">
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
                    <NavigationMenuLink href="/services/development&design" className="w-[200px]">Web Development & Design</NavigationMenuLink>
                    <NavigationMenuLink href="/services/marketing">Digital Marketing</NavigationMenuLink>
                    <NavigationMenuLink href="/services/brand">Branding & Identity</NavigationMenuLink>
                    <NavigationMenuLink href="/services/ecommerce">Ecommerce Solution</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              {/* Item 4 */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="/blog/project" className="w-[200px]">Project Alpha</NavigationMenuLink>
                  <NavigationMenuLink href="/blog/brand" className="w-[200px]">Brand Beta</NavigationMenuLink>
                  <NavigationMenuLink href="/blog/tech" className="w-[200px]">Tech Gamma</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* Item 5 */}
              <NavigationMenuItem>
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    FAQ
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

          <Toggle className="md:hidden flex text-2xl">
                <SquareMenu size={64} className="w-[100px]" />
          </Toggle>
        </div>
      </div>
    </header>
  );
};

export default Header;
