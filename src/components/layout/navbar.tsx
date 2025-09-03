import { cn } from "@/shared/utils";
import { Link, useLocation } from "wouter";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  Search01Icon,
  Tv01Icon,
  UserGroup03Icon,
  FlimSlateIcon,
} from "@hugeicons/core-free-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { href: "/", icon: Home01Icon },
  { href: "/search", icon: Search01Icon },
  { href: "/movies", icon: FlimSlateIcon },
  { href: "/tv-shows", icon: Tv01Icon },
  { href: "/group-watch", icon: UserGroup03Icon },
];

export default function Navbar() {
  const [location] = useLocation();

  const isActive = (href: string) => {
    return location === href;
  };

  return (
    <header className="w-full flex justify-between items-center bg-background/60 px-7 py-6 pt-4 backdrop-blur-lg">
      <div className="flex items-center gap-8">
        <Link href="/" className="w-fit flex items-center gap-1">
          <span
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-gray-400"
            style={{ fontFamily: '"Inter Tight", sans-serif' }}
          >
            streamo
          </span>
        </Link>
        <nav className="flex gap-4 justify-center">
          {navItems.map(({ href, icon }, idx) => (
            <Link key={idx} href={href}>
              <span
                className={cn(
                  "w-7 h-7 flex gap-2 justify-center text mt-2 hover:text-secondary transition-colors relative",
                  isActive(href)
                    ? "text-foreground font-medium"
                    : "text-gray-300"
                )}
              >
                <HugeiconsIcon
                  icon={icon}
                  size={18}
                  strokeWidth={isActive(href) ? 2 : 1.5}
                />
                {isActive(href) && (
                  <div className="w-2/3 h-0.5 rounded-full bg-foreground absolute left-1/2 -translate-1/2 bottom-0"></div>
                )}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
}
