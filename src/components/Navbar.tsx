"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar({ config }: { config: any }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h)
  }, [])
  return (
    <nav className={`"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white py-3"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <a href="#home" className="text-xl font-bold font-heading text-primary">Navatha Multi Speciality Dental Hospital</a>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-8 pb-1">
          {["Home","About","Services","Doctors","Testimonials","FAQ","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">{l}</a>
          ))}
          <a href="#contact" className="bg-primary text-white px-5 py-2 font-medium text-sm ml-4">Book Now</a>
        </div>
        <button className="lg:hidden absolute right-4 top-4" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  )
}
