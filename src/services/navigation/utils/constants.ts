import { RoutesConfig } from "@/router/routes";
import { MessageCircleIcon, UserIcon } from "lucide-react";

export const topNavButtons = [
  // {
  //   id: 1,
  //   tolltipContent: "asd",
  //   icon: SignalIcon,
  //   path: RoutesConfig.app,
  // },
  {
    id: 2,
    tolltipContent: "asd",
    icon: MessageCircleIcon,
    path: RoutesConfig.events,
  },
  {
    id: 3,
    tolltipContent: "Open profile page",
    icon: UserIcon,
    path: RoutesConfig.profile,
  },
];
