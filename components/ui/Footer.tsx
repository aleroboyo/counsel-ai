'use client'

import Link from "next/link"
import Image from "next/image"

const Footer = () => {

  return (
    <section className="font-inter text-[#94A3B8] flex items-center justify-between py-4 px-20 border border-[#D4A017]/10">
      <div>
        <Link href="/">
          <Image
            src='/logos/counsel-logo-transparent.png'
            alt='Counsel AI Logo'
            width={150}
            height={150}
          />
        </Link>
      </div>

      <nav className="flex gap-8 items-center">
        <Link href='#features' className="hover:text-[#D4A017]">
          <button> Features</button>
        </Link>
        <Link href='#how-it-works' className="hover:text-[#D4A017]">
          <button>How it works</button>
        </Link>
        <a href='mailto:aleroboyo0@gmail.com' className="hover:text-[#D4A017]">
          <button>Contact</button>
        </a>
        <Link href='/sign-in' className="hover:text-[#D4A017]">
          <button>Sign in</button>
        </Link>
        <Link href='/sign-up' className="hover:text-[#D4A017]">
          <button>Sign up </button>
        </Link>
      </nav>

      <div>2026 ©</div>
    </section>
  )
}

export default Footer