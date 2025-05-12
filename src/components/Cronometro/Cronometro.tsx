'use client'

import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react'
import { formatarTempo } from '@lib/utils'

export type CronometroHandle = {
    getTempoTotal: () => number
}

const Cronometro = forwardRef<CronometroHandle>((_, ref) => {
    const [segundos, setSegundos] = useState(1)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSegundos(prev => prev + 1)
        }, 1000)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        getTempoTotal: () => segundos
    }))

    const tempoFormatado = formatarTempo(segundos)
    
    return (
        <>
            <p className="text-2xl font-bold text-primary">{tempoFormatado}</p>
            <small>Termine o mais rápido que puder!</small>
        </>
    )
})

export default Cronometro