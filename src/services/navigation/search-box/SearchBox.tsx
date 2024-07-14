import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "@/shared/components/ui/input";

export function SearchBox() {
  return (
    <div className="bg-muted flex-1 relative rounded-md">
      <Input type="search" placeholder="Search ..." className="placeholder:text-ring" />
      {/* // todo: if input hide glass */}
      <MagnifyingGlassIcon className="h-5 w-5 absolute right-5 top-1/2 -translate-y-1/2 text-background" />
    </div>
  );
}
