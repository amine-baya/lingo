import { Button } from "@/components/ui/button";

export const Footer = () => {
  return <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between h-full" >
          <Button size="lg" variant="ghost" >Arabic</Button>
          <Button size="lg" variant="ghost" >French</Button>
          <Button size="lg" variant="ghost" >English</Button>
          <Button size="lg" variant="ghost" >Spanish</Button>
      </div>
      </footer>;
};
