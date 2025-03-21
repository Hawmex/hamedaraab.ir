import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <div className="grid grid-cols-[1fr_max-content_1fr] p-4 gap-4 items-center w-[100%] sticky top-0 bg-background border-b-[1px]">
      <div className="flex flex-row gap-4 justify-start"></div>
      <h1 className="text-center font-extrabold text-2xl">Homepage</h1>
      <div className="flex flex-row gap-4 justify-end">
        <ModeToggle />
      </div>
    </div>
  );
}
