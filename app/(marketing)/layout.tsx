
import { marketingConfig } from "@/config/marketing"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import NavSigninButton from "@/components/nav-signin-button"
import { getCurrentUser} from "@/lib/session"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
const user = await getCurrentUser()
  return (
    <>
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">          
          <MainNav items={marketingConfig.mainNav} />
          <NavSigninButton user={user} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
    </>
  )
}
