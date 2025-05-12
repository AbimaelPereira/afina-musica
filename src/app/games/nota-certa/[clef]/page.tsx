// app/play/[clef]/page.tsx
import { redirect } from "next/navigation"
import { readJSON, shuffleArray } from "@lib/jsonHandler"
import { playSound } from "@lib/utils"
import PlayGameClient from "./PlayGameClient"

const validClefs = ["treble-clef", "bass-clef", "bass-clef-octave-down"] as const
type Clef = typeof validClefs[number]

async function loadDataGame(fileName: string) {
    const data = await readJSON(fileName)
    return shuffleArray(data)
}

export default async function PlayGame({
    params,
  }: {
    params: { clef: string }
  }) {
    const { clef } = await params  

    if (!validClefs.includes(clef as Clef)) {
        redirect('/')
    }

    const data = await loadDataGame(`nota-certa/${clef}.json`)
    const svgPath = "/nota-certa/" + clef

    return <PlayGameClient clef={clef} data={data} svgPath={svgPath} />
}