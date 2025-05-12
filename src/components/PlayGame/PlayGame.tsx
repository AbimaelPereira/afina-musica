'use client'

import { playSound } from '@lib/utils'
import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react'

type PlayGameProps = {
    clef: "treble-clef" | "bass-clef" | "bass-clef-octave-down",
    gameRoute: "nota-certa" | "tom-mestre"
}

export default function PlayGame({ clef, gameRoute }: PlayGameProps) {
    const [isCounting, setIsCounting] = useState(false)
    const [count, setCount] = useState(3)

    useEffect(() => {
        if (isCounting && count > 0) {
            const timer = setTimeout(() => setCount(prev => prev - 1), 1000)
            return () => clearTimeout(timer)
        } else if (count === 0) {
            playSound('/sounds/init.wav')
            const goTimer = setTimeout(() => {
                redirect(`/games/${gameRoute}/${clef}`)
            }, 1000)
            return () => clearTimeout(goTimer)
        }
    }, [isCounting, count, clef, gameRoute])

    const handleStart = () => {
        setIsCounting(true)
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <section className="text-center">
                {!isCounting ? (
                    <>
                        <p className="font-bold text-2xl">
                            Tudo pronto para começar? 🧐
                        </p>
                        <button
                            onClick={handleStart}
                            className="bg-primary mt-4 text-white w-56 rounded-full px-4 py-2 m-2 hover:bg-primary-dark transition duration-300"
                        >
                            Iniciar
                        </button>
                    </>
                ) : (
                    <p className="mt-5 font-bold text-4xl animate-bounce text-primary">
                        {count === 0 ? 'Goooo!! 🚀' : count}
                    </p>
                )}
            </section>
        </div>
    )
}
