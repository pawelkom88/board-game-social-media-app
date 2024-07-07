import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "@fontsource-variable/dm-sans";
import "@fontsource/marcellus";
import DesktopNav from "./components/desktop-nav/DesktopNav";
import IconButtonWithToolbar from "./components/icon-button-with-toolbar/IconButtonWithToolbar";
import Logo from "./components/icons/logo/Logo";
import { UserIcon } from "./components/icons/user/User";
import MobileNav from "./components/mobile-nav/MobileNav";
import { ModeToggle } from "./components/mode-toggle";
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card";
import { Layout } from "./layout/Layout";

export function App() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-[150px_auto] h-screen w-full lg:w-3/4 xl:w-1/2 mx-auto mt-4 overflow-hidden">
        <div className="bg-background border-r order-2 lg:order-1">
          <div className="flex flex-col h-full gap-4 p-4">
            <Logo className="hidden lg:block" />
            <DesktopNav />
            <MobileNav />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden order-1 lg:order-2">
          <header className="bg-background border-b px-4 py-3 flex items-center gap-4">
            <Logo className="lg:hidden block" size={50} showText={false} />
            <Input
              type="text"
              placeholder="Search"
              className="bg-muted rounded-full px-4 py-2 flex-1"
            />
            <IconButtonWithToolbar tooltipContent="asd">
              <SignalIcon className="h-5 w-5 mx-auto mt-1" />
            </IconButtonWithToolbar>
            <Button variant="ghost" size="icon" className="hidden lg:block rounded-full">
              <MessageCircleIcon className="h-5 w-5 mx-auto" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden lg:block rounded-full">
              <UserIcon className="h-5 w-5 mx-auto" />
            </Button>
            <ModeToggle />
          </header>
          <div className="flex-1 overflow-auto">
            <div className="grid gap-4 p-4">
              <Card>
                <CardHeader className="flex items-center gap-4 font-heading">
                  Avatar
                  <div>
                    <div className="font-semibold">Acme Inc</div>
                    <div className="text-sm text-muted-foreground">@acmeinc · 2h</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Excited to announce our latest product launch! Check it out and let us
                    know what you think.
                  </p>
                  <img
                    src="/placeholder.svg"
                    alt="Product image"
                    className="mt-4 rounded-lg object-cover max-w-full"
                  />
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                      <HeartIcon className="h-5 w-5" />
                      <span className="sr-only">Like</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageCircleIcon className="h-5 w-5" />
                      <span className="sr-only">Comment</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ShareIcon className="h-5 w-5" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    125 Likes · 15 Comments
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function SignalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}
