import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-[#D4A017] rounded-full opacity-20 blur-[120px] lg:hidden"/>
        
        <div className="hidden lg:block">
            <NavBar />
        </div>

        <div>
            {children}
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-75 bg-[#D4A017] rounded-full opacity-20 blur-[80px] hidden lg:block"/>

         <div className="hidden lg:block">
            <Footer />
        </div>

    </div>
  )
}

export default Layout