'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { title: 'Step 1', description: 'Register your account'},
  { title: 'Step 2', description: 'Deposit your funds'},
  { title: 'Step 3', description: 'KYC'},
  { title: 'Step 4', description: 'Start Trading & Earn Profits'},
]

export default function StepGuide() {

    const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    refs.current.forEach((el, index) => {
      if (!el) return

      const num = el.querySelector('.step-number')
      const bar = el.querySelector('.step-bar')

      if (num && bar) {
        gsap.fromTo(
          num,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )

        gsap.fromTo(
          bar,
          { height: 0, opacity: 0 },
          {
            height: '100%',
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      }
    })
  }, [])


  return (
    <div className='max-w-[1280px] w-full px-5 flex flex-col gap-[5px] justify-center relative'>

        {steps.map((step, index) => {
            const isRight = index % 2 === 0;

            return(
                <div key={index} className={`flex w-full items-stretch gap-12 ${isRight ? 'flex-row' : 'lg:flex-row-reverse'}`} ref={(el) => (refs.current[index] = el)}>
                    <div className='blank'/>

                    <div className='flex flex-col gap-5 justify-center items-center min-h-[385px] w-[100px]'>
                        <h2 className='text-[42px] text-white'>{`0${index + 1}`}</h2>
                        <div className={`flex-1 w-[3px] ${isRight ? 'bg-[#ffffff00]' : 'bg-[#a35ca200]'} `} />
                    </div>
                    
                    <div className={`flex flex-col gap-6 justify-center max-w-[610px] pb-6 flex-1 ${isRight ? 'items-start' : 'items-start text-left lg:items-end lg:text-right'}`}>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-lg text-[#FFFFFF80]'>{step.title}</h3>
                            <p className='text-[#FFFFFFBF] text-[22px]'>{step.description}</p>
                        </div>
                        <div className='h-[250px] w-[350px]' />
                    </div>
                </div>
            )
        })}        

    </div>
  )
}
