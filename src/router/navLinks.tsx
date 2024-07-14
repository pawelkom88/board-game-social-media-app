import { Union } from "@/shared/utils/ts-helpers";
import { CalendarCheck, HomeIcon, Store, UserIcon } from "lucide-react";
import { RoutesConfig } from "./routes";

export const navIconStyles = "w-5 h-5";

export const navLinks = [
  {
    name: "Home",
    path: RoutesConfig.home,
    icon: <HomeIcon className={navIconStyles} />,
  },
  {
    name: "Events",
    path: RoutesConfig.events,
    icon: <CalendarCheck className={navIconStyles} />,
  },
  {
    name: "Market",
    path: RoutesConfig.market,
    icon: <Store className={navIconStyles} />,
  },
];

export const profileNavLink = {
  name: "Profile",
  path: RoutesConfig.profile,
  icon: <UserIcon className={navIconStyles} />,
};

export type NavLink = {
  name: string;
  path: Union<typeof RoutesConfig>;
  icon: JSX.Element;
};

export type ExtendedNavLinks = (NavLink | typeof profileNavLink)[];
