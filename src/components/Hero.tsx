"use client"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

export default function Hero({ config }: { config: any }) {
  return (
    <section id="home" className="min-h-screen flex">
      <div className="w-full lg:w-1/2 bg-bg-site flex items-center px-8 md:px-16 py-32">
        <motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{duration:0.6}}>
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">Premium Dental Care</span>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
            Advanced Dentistry<br />in {config.city}
          </h1>
          <p className="text-lg text-foreground-muted mb-8 max-w-md">{config.clinicName} combines expertise with cutting-edge technology.</p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-primary text-white px-8 py-3.5 font-semibold hover:opacity-90 transition-all flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Book Now
            </a>
            <a href="#services" className="border border-foreground/20 text-foreground px-8 py-3.5 font-semibold hover:bg-foreground/5 transition-all flex items-center gap-2">
              Our Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-white"></div>
              ))}
            </div>
            <p className="text-sm text-foreground-muted">Trusted by 5000+ patients</p>
          </div>
        </motion.div>
      </div>
      <div className="hidden lg:block w-1/2 bg-gradient-to-bl from-primary to-primary-light relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-sm p-8">
          <p className="text-2xl font-bold font-heading text-primary">{config.clinicName}</p>
          <p className="text-foreground-muted mt-1">{config.address}</p>
          <div className="mt-3 flex items-center gap-2 text-primary font-bold">
            <span>â­ {config.rating}</span>
            <span className="text-foreground-muted font-normal">|</span>
            <span className="text-foreground-muted font-normal">{config.city}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
