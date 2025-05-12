'use client'

import Cronometro, { CronometroHandle } from "@/components/Cronometro/Cronometro"
import Logo from "@/components/Logo/Logo"
import { playSound } from "@lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

type Props = {
    data: any[]
    svgPath: string
}

const btns = [
    { name: "Do", value: "do" },
    { name: "Ré", value: "re" },
    { name: "Mi", value: "mi" },
    { name: "Fá", value: "fa" },
    { name: "Sol", value: "sol" },
    { name: "Lá", value: "la" },
    { name: "Si", value: "si" },
]

export default function PlayGameClient({ data, svgPath }: Props) {
    const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0)
    const [stateGame, setStateGame] = useState("playing")
    const [tempoFinal, setTempoFinal] = useState(0)
    const cronometroRef = useRef<CronometroHandle>(null)

    const handleClick = (value: string) => () => {
        const currentQuestion = data[currentIndexQuestion]
        const isCorrect = currentQuestion.correctNote === value

        if (isCorrect) {
            if (currentIndexQuestion < data.length - 1) {
                playSound("/sounds/correct.wav")
                setCurrentIndexQuestion(currentIndexQuestion + 1)
            } else {
                setStateGame("finished")
                const tempo = cronometroRef.current?.getTempoTotal()
                if (tempo) {
                    setTempoFinal(tempo)
                    // playSound("/sounds/aplausos.wav")
                }
            }
        } else {
            playSound("/sounds/error.wav")
        }
    }

    if (stateGame === "playing") {
        return (
            <main className="align-center flex flex-col items-center h-min-screen">
                <Cronometro ref={cronometroRef} />
                {/* Barra de progresso com o resto visível */}
                <div className="w-full max-w-2xs mt-2 bg-gray-300 rounded-full h-2.5 mb-4 relative overflow-hidden">
                    <div
                        className="bg-primary h-full absolute left-0 top-0 rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${((currentIndexQuestion + 1) / data.length) * 100}%` }}
                    />
                </div>

                <div className="flex flex-col items-center">
                    <Image
                        src={`${svgPath}/${data[currentIndexQuestion].file}.svg`}
                        alt={data[currentIndexQuestion].key}
                        width={256}
                        height={256}
                        className="w-64 h-44 object-fit"
                    />
                </div>
                <div>
                    <p className="text-center mb-2 text-sm">
                        Selecione a nota correta para a imagem acima:
                    </p>
                </div>
                <div className="rounded-2xl p-4 w-full max-w-2xl bg-white shadow-lg">
                    <div className="flex flex-col items-center gap-2">
                        {btns.map((btn, index) => (
                            <button
                                key={index}
                                className="w-full cursor-pointer h-10 rounded-xl bg-primary text-white text-lg font-semibold shadow-md"
                                onClick={handleClick(btn.value)}
                            >
                                {btn.name}
                            </button>
                        ))}
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="align-center flex flex-col items-center h-min-screen">
            <Logo size="md" />
            <p className="text-center text-xl font-bold mt-10">
                Nota Certa
            </p>
            <p className="text-center mb-2 text-primary text-3xl font-semibold mt-5">
                Parabéns!
            </p>
            <p className="text-center mb-2 text-lg">
                Seu tempo: {tempoFinal}s
            </p>
            <Link
                href="/games/nota-certa"
                className="w-full max-w-2xs mt-4 cursor-pointer h-10 rounded-xl bg-primary text-white text-lg font-semibold shadow-md"
            >
                Jogar Novamente
            </Link>
        </main>
    )
}