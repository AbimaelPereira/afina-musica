'use client'

import Cronometro, { CronometroHandle } from "@/components/Cronometro/Cronometro"
import { useRef } from "react"

type Props = {
    clef: string
    data: any[]
    svgPath: string
}

export default function PlayGameClient({ clef, data, svgPath }: Props) {
    const cronometroRef = useRef<CronometroHandle>(null) // 

    return (
        <main className="align-center flex flex-col items-center">
            <Cronometro ref={cronometroRef} />

            {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <p>
                        {item.key} - {item.file}
                    </p>
                </div>
            ))}
        </main>
    )
}