const rootRoute = "/app";

export const RoutesConfig = {
  login: "/login",
  signup: "/signup",
  app: rootRoute,
  home: `${rootRoute}/home`,
  events: `${rootRoute}/events`,
  market: `${rootRoute}/market`,
  profile: `${rootRoute}/profile`,
} as const;
