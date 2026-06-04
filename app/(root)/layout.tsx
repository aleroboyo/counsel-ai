import NavBar from "@/components/ui/NavBar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-[#D4A017] rounded-full opacity-20 blur-[120px]"/>
        
        <div className="hidden lg:block">
            <NavBar />
        </div>

        <div>
            {children}
        </div>

    </div>
  )
}

export default Layout