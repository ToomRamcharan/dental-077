"use client"
import { Heart } from "lucide-react"

export default function Footer({ config }: { config: any }) {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-bold font-heading mb-2">{config.clinicName}</h3>
        <p className="text-white/70 text-sm mb-6">{config.city} | +917730826666</p>
        <div className="flex justify-center gap-8 text-sm text-white/80 mb-6">
          {["Home","About","Services","Doctors","Contact"].map(l => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a>)}
        </div>
        <div className="border-t border-white/20 pt-6 text-xs text-white/50">&copy; 2024 {config.clinicName} | Made with <Heart className="w-3 h-3 inline text-red-300" /></div>
      </div>
    </footer>
  )
}
