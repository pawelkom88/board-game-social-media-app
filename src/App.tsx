import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card";

export function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[150px_auto] h-screen w-full lg:w-3/4 xl:w-1/2 mx-auto mt-4 overflow-hidden">
      <div className="bg-background border-r">
        <div className="flex flex-col h-full gap-4 p-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <LogInIcon className="h-6 w-6" />
            <span className="text-lg">Social App</span>
          </a>
          <nav className="flex flex-col gap-2">
            <a
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <HomeIcon className="h-5 w-5" />
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <CompassIcon className="h-5 w-5" />
              Explore
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <BellIcon className="h-5 w-5" />
              Notifications
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <UserIcon className="h-5 w-5" />
              Profile
            </a>
          </nav>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <header className="bg-background border-b px-4 py-3 flex items-center gap-4">
          <Input
            type="text"
            placeholder="Search"
            className="bg-muted rounded-full px-4 py-2 flex-1"
          />
          <Button variant="ghost" size="icon" className="rounded-full">
            <SignalIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MessageCircleIcon className="h-5 w-5" />
          </Button>
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </header>
        <div className="flex-1 overflow-auto">
          <div className="grid gap-4 p-4">
            <Card>
              <CardHeader className="flex items-center gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
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
            <Card>
              <CardHeader className="flex items-center gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Acme Inc</div>
                  <div className="text-sm text-muted-foreground">@acmeinc · 1d</div>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Excited to share our new office space! We've been working hard to create
                  a modern and collaborative environment for our team.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <img
                    src="/placeholder.svg"
                    alt="Office image 1"
                    className="rounded-lg object-cover max-w-full"
                  />
                  <img
                    src="/placeholder.svg"
                    alt="Office image 2"
                    className="rounded-lg object-cover max-w-full"
                  />
                </div>
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
                  250 Likes · 32 Comments
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CompassIcon(props) {
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
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function HashIcon(props) {
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
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
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

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LogInIcon(props) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
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

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
