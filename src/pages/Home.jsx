import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Features from '../components/Features'
import Marketplace from '../components/Marketplace'
import StatsStrip from '../components/StatsStrip'
import WhatWeDo from '../components/WhatWeDo'
import WhyChoose from '../components/WhyChoose'
import ContactCard from '../components/ContactCard'

export default function Home(){
  return (
    <>
      <Hero />

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Discover Apps" description="Browse curated apps and tools for small businesses." />
        <Card title="Build Profiles" description="Create professional profiles and portfolios quickly." />
        <Card title="Connect" description="Message vendors and handle simple contracts in-app." />
      </section>

      <StatsStrip />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Features />
          <WhatWeDo />
          <WhyChoose />

          {/* Move Marketplace / Top Rated Listings below WhyChoose as requested */}
          <Marketplace />
        </div>

        <div>
          <ContactCard />
        </div>
      </div>
    </>
  )
}
