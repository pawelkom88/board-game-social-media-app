import Nav from "@/services/navigation/Nav";
import { SearchBox } from "@/services/navigation/search-box/SearchBox";
import { TopNavButtons } from "@/services/navigation/top-nav-buttons/TopNavButtons";
import { Outlet } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Logo } from "./shared/components/logo/Logo";
import { ModeToggle } from "./shared/components/mode-toggle";

export function App() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-[150px_auto] h-screen w-full lg:w-3/4 xl:w-1/2 mx-auto mt-4 overflow-hidden">
        <div className="bg-background border-r order-2 lg:order-1">
          <div className="flex flex-col h-full gap-4 p-4">
            <Logo className="hidden lg:block" showText />
            <Nav />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden order-1 lg:order-2">
          <header className="bg-background border-b px-4 py-3 flex items-center gap-4">
            <Logo className="lg:hidden block" size={50} />
            <SearchBox />
            <TopNavButtons />
            <ModeToggle />
          </header>
          <div className="flex-1 overflow-auto">
            <div className="grid gap-4 p-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
