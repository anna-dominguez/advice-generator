import PatternDividerDesktop from './images/pattern-divider-desktop.svg'
import PatternDividerMobile from './images/pattern-divider-mobile.svg'
import IconDice from './images/icon-dice.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [advice, setAdvice] = useState()

  useEffect(() => {
    getRandomAdvice()
  }, [])

  const getRandomAdvice = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice')
    setAdvice(res.data)
  }

  return (
    <main
      className="relative bg-darkGrayishBlue h-fit pt-10 px-6 pb-16 rounded-[10px] md:rounded-[15px] mx-auto
    w-[95%] md:w-[540px] text-center md:px-12 md:pt-12 md:pb-[72px]
    shadow-[30px_50px_80px_0_rgba(0,0,0,0.10)]"
    >
      <h1 className="pb-6 text-neonGreen tracking-[4.086px] text-[11px] md:text-[13px]">
        ADVICE #{advice?.slip.id}
      </h1>
      <p className="tracking-[-0.3px] text-[24px] md:text-[28px]">
        “{advice?.slip.advice}”
      </p>
      <img
        src={PatternDividerMobile}
        alt="delimitor mobile device"
        className="w-full h-4 md:hidden mt-6"
      />
      <img
        src={PatternDividerDesktop}
        alt="delimitor desktop device"
        className="w-full h-4 hidden md:inline mt-10"
      />
      <button
        onClick={() => getRandomAdvice()}
        className="mt-8 absolute bg-neonGreen p-4 rounded-full left-[42%] md:left-[45%] md:-bottom-7
        hover:shadow-[0_0_40px_0_#53FFAA]"
      >
        <img src={IconDice} alt="Dice button for new advice" />
      </button>
    </main>
  )
}

export default App
