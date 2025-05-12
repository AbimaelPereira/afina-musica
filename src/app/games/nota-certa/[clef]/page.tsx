// app/play/[clef]/page.tsx
import { redirect } from "next/navigation"
import { readJSON, shuffleArray } from "@lib/jsonHandler"
import PlayGameClient from "./PlayGameClient"

// metadata
export const metadata = {
  title: "Nota Certa",
  description: "Desafie sua leitura das notas no pentagrama!",
}

const validClefs = ["treble-clef", "bass-clef", "bass-clef-octave-down"] as const
type Clef = typeof validClefs[number]

async function loadDataGame(fileName: string) {
  const data = await readJSON(fileName)
  return shuffleArray(data)
}

export default async function PlayGame({ params }) {
  const { clef } = params as { clef: Clef }

  if (!validClefs.includes(clef)) {
    redirect('/')
  }

  const data = await loadDataGame(`nota-certa/${clef}.json`)
  const svgPath = "/nota-certa/" + clef

  return <PlayGameClient data={data} svgPath={svgPath} />
}
