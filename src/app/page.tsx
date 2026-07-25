'use client'

import React, { useState, useEffect } from 'react'
import Motion from '../components/Motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Doctors from '../components/Doctors'
import Technology from '../components/Technology'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import GoogleMap from '../components/GoogleMap'
import Footer from '../components/Footer'
import WhatsAppCTA from '../components/WhatsAppCTA'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  const siteConfig = {
    clinicName: "Navatha Multi Speciality Dental Hospital",
    phone: "+917730826666",
    email: "",
    address: "Dwaraka Nagar, Nizamabad",
    city: "Nizamabad",
    pincode: "503001",
    rating: "4.7",
    waLink: "https://wa.me/917730826666",
    designFamily: "Corporate",
    navType: "Centered",
    heroType: "Split Screen",
    servicesType: "Masonry",
    footerType: "Gradient",
    colors: {"primary": "#2563EB", "primary_light": "#60A5FA", "secondary": "#1E40AF", "secondary_light": "#93C5FD", "accent": "#1D4ED8", "bg": "#FFFFFF", "bg_dark": "#1E3A5F", "fg": "#0F172A", "fg_muted": "#64748B", "border": "#DBEAFE", "white": "#FFFFFF"},
  }

  return (
    <main id="main-content" className="min-h-screen bg-bg-site text-foreground">
      <Navbar config={siteConfig} />
      <Hero config={siteConfig} />
      <About config={siteConfig} />
      <Services config={siteConfig} />
      <Doctors config={siteConfig} />
      <Technology config={siteConfig} />
      <Testimonials config={siteConfig} />
      <Gallery config={siteConfig} />
      <FAQ config={siteConfig} />
      <Contact config={siteConfig} />
      <GoogleMap config={siteConfig} />
      <Footer config={siteConfig} />
      <WhatsAppCTA config={siteConfig} />
    </main>
  )
}
