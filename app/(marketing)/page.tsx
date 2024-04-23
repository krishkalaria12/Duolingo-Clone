import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col items-center lg:flex-row justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src={"/hero.svg"} fill alt="Hero" />
      </div>
      <div className="flex gap-y-8 flex-col items-center">
        <h1 className="text-xl lg:text-3xl font-extrabold text-neutral-600 max-w-[480px] text-center">
          Learn, Practice, and master new languages with Lingo
          </h1>
      </div>
      <div>
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-mute-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton 
              mode='modal' 
              fallbackRedirectUrl={"/learn"}
              forceRedirectUrl={"/learn"}
              signInFallbackRedirectUrl={"/learn"}
              signInForceRedirectUrl={"/learn"}
              >
              <Button size="lg" variant="secondary" className="w-full">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton 
                mode='modal' 
                fallbackRedirectUrl={"/learn"}
                forceRedirectUrl={"/learn"}
                signUpFallbackRedirectUrl={"/learn"}
                signUpForceRedirectUrl={"/learn"}
                >
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I Already have an account
                </Button>
              </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button className="w-full" variant={"secondary"} size={"lg"}>
              <Link href={"/learn"}>
                Continue Learning
              </Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
}
