import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center p-4 gap-2">
      <h1 className="text-center py-4">Learn, practice and master new languages with Lingo</h1>
      <div className="flex flex-col items-center gap-y-3 maw-w-[330px] w-full">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal" fallbackRedirectUrl="/learn">
              <Button size="lg" variant="secondary" className="w-full">
                Get started
              </Button>
            </SignUpButton>
            <SignInButton mode="modal" fallbackRedirectUrl="/learn">
              <Button size="lg" variant="primaryOutline" className="w-full">
              I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/learn">Continue Learning</Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
}
