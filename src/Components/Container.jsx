/* eslint-disable no-unused-vars */
import desktop from './assets/pattern-divider-desktop.svg'
import mobile from './assets/pattern-divider-desktop.svg'
import icon from './assets/icon-dice.svg'
import { useState } from 'react'
import { useEffect } from 'react'


const Container = () => {
        const [text, setText] = useState([])

    const fetchAdvice = async() => {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()

        console.log(data)

        setText(data)
    }

    useEffect(() =>{
        fetchAdvice()
    }, [] )

    return ( 
        <div className="relative bg-GrayishBlue lg:w-4/12 w-11/12 h-fit ml-auto mr-auto rounded-lg px-5">
            <div>
               <h1 className="font-semibold text-center  text-NeonGreen text-xs tracking-widest pt-5">ADVICE # {text.slip.id}</h1>
            </div>

            <div className="h-fit my-6">
                <p className="text-center font-semibold text-LightCyan text-2xl">{text.slip.advice}</p>
            </div>

            <div className="pb-14">
               <img className="hidden lg:block ml-auto mr-auto" src={desktop}/>
               <img className="lg:hidden block ml-auto mr-auto" src={mobile}/>
            </div>

            <div className="absolute bottom-[-2rem] left-[50%] -translate-x-1/2">
                <div className="block relative w-14 h-14 rounded-full bg-NeonGreen cursor-pointer" onClick={fetchAdvice}>
                  <img className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" src={icon} />
                </div>           
            </div>
         </div>
     );
}
 
export default Container;