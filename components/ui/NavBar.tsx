'use client'

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"

const NavBar = () => {
  const { isSignedIn } = useUser()

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-playfair font-bold text-[#D4A017]">Counsel AI</div>
      
      <div className="flex items-center gap-4">
        {!isSignedIn ? (
          <>
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-[#F8FAFC] hover:text-[#D4A017] transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-2 rounded-lg bg-[#D4A017] text-[#1E293B] font-semibold hover:bg-[#E6B82D] transition-colors">
                Get Started
              </button>
            </SignUpButton>
          </>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>
    </nav>
  )
}

export default NavBar  