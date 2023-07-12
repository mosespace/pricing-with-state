'use client'
import Image from 'next/image'
import Package from '@/components/Package'
import { monthlyPrice, annualPrice } from '@/pricingData'
import { useState } from 'react'

export default function Home() {
  const[pricing, setPricing] = useState("monthly")
  const[pricingData, setPricingData] = useState(monthlyPrice)

  function changePricing(pricing){
    setPricing(pricing)

    if(pricing=="monthly"){
      setPricingData(monthlyPrice)
    }else{
      setPricingData(annualPrice)
    }
  }

  return (
    <main>
      <div className="main-content">
        <h1>Pricing</h1>
        <p>Sign up in less than 30 Seconds. Try out our seven day risk free trial! Upgrade at any time no question, no hassle</p>
        <div className='buttons'>
          <button onClick={()=>changePricing('monthly')} className={pricing=="monthly"? 'monthly-btn active-btn': "monthly-btn"}>Monthly</button>
          <button  onClick={()=>changePricing('anually')} className={pricing=="anually"? "anually-btn active-btn":"anually-btn"}>Anually</button>
        </div>
        
      </div>
      <div className='pricing-package'>
          {pricingData.map((month, i) =>{
              return (
              <Package key={i} data={month}/>
              )
            })}
        </div>
    </main>
  )
}
