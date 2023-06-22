
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import {useSignInModal} from "@/components/sign-in-modal"
import useScroll from "@/lib/hooks/use-scroll"
import { UserAccountNav } from "@/components/user-account-nav"
import {getCurrentUser} from "@/lib/session"


interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const user = await getCurrentUser()

  return (
    <>
    <SignInModal />
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <div className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}>
          <MainNav items={marketingConfig.mainNav} />
          </div>
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
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
    </>
  )
}
