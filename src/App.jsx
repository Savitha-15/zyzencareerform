import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CareerForm from './components/CareerForm'
import { motion } from 'framer-motion'

export default function App(){
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <section className="hero">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="hero-title">Join Our Team — Shape the Future</h1>
            <p className="hero-sub">We're excited to see what you can bring. Submit your details below.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <CareerForm />
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
