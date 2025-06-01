import React from 'react'
import TitleBanner from './TitleBanner'
import StepGuide from './StepGuide'

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full py-[100px] bg-[#060710] gap-[50px]'>
      <TitleBanner label='Our Process' headingStart='Become a' highlight='Abcd Pro' headingEnd='in sec...' description='🚀 Sign up. Fund. Trade.'/>
      <StepGuide />
    </section>
  )
}

export default HeroSection