import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/NavigationMenu"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import { Logo } from "@/components/ui/Logo"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover"
import { cn } from "@/lib/utils"

export const Header: React.FC = () => {
  const [date, setDate] = React.useState<Date>()

  return (
    <>
      <Logo></Logo>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>User</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <ul className="xl:w-36">
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Log</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <ul className="xl:w-36">
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contacts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <ul className="xl:w-36">
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button>Log Out</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
    </>
  )
}
