import { Routes, RoutesConfig } from "@/router/routes";
import { useState } from "react";

export function useActivePath() {
  const [activePath, setActivePath] = useState<Routes>(RoutesConfig.home);

  return {
    activePath,
    setActivePath: (path: Routes) => {
      setActivePath(path);
    },
  };
}
