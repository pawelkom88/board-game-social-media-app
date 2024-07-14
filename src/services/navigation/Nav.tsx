import { DesktopNav } from "./desktop-nav/DesktopNav";
import { MobileNav } from "./mobile-nav/MobileNav";

export default function Nav() {
  // TODO: depends on current page ( events, marketplace, etc. ) to determine which nav content to show
  return (
    <>
      {/* // most likely shared state to open post */}
      <DesktopNav />
      {/* // use drawer */}
      <MobileNav />
    </>
  );
}
