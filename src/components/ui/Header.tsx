import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { Button } from "@/components/ui/Button"
// import { Calendar } from "@/components/ui/Calendar"
// import { AnimatedSVGComponent } from "@/components/ui/Drone"
import { Logo } from "@/components/ui/Logo"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/NavigationMenu"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover"
// import { cn } from "@/lib/utils"
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"

import React from "react"

export const Header: React.FC = () => {
  // const [date, setDate] = React.useState<Date>()

  return (
    <div className="w-full py-8 flex justify-between">
      <Logo></Logo>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-menu grid w-[400px] gap-3 p-4 md:w-[436px] md:grid-cols-2 bg-black">
                <li>
                  <NavigationMenuLink
                    href="/"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="/contacts"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="/about"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="/about"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Book</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-menu grid w-[400px] gap-3 p-4 md:w-[436px] md:grid-cols-2 bg-black">
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contacts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="nav-menu grid w-[400px] gap-3 p-4 md:w-[436px] md:grid-cols-2 bg-black">
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-nonetransition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-700"
                  >
                    <div className="text-sm font-medium leading-none text-white">Lend a drone</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pick an appropriate price </p>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              {/* <AvatarImage src={userLogo} /> */}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant="outline">Log Out</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
