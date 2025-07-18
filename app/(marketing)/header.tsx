import { Button } from "@/components/ui/button"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slkate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
      <div className="">Lingo</div>
      <ClerkLoading>
        <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" fallbackRedirectUrl="/learn" signUpFallbackRedirectUrl="/learn">
            <Button size="lg" variant='ghost' className="pointer">
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>

      </div>

      </header>
  )
}
