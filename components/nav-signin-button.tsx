"use client";
import {User} from "@prisma/client"

import {useSignInModal} from "@/components/sign-in-modal"
import { UserAccountNav } from "@/components/user-account-nav"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"


export default function NavSigninButton({ user }: { user: User | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();


  return (
    <>
      <SignInModal />
      {user ? <UserAccountNav
                    user={{
                      name: user.name,
                      image: user.image,
                      email: user.email,
                    }}/> :
          <nav>
            <button
              onClick={() => setShowSignInModal(true)}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Sign In
            </button>
          </nav>          
          }
    </>
  );
}
