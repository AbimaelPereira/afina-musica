// app/play/[clef]/page.tsx
import { redirect } from "next/navigation"
import { readJSON, shuffleArray } from "@lib/jsonHandler"
import PlayGameClient from "./PlayGameClient"

const validClefs = ["treble-clef", "bass-clef", "bass-clef-octave-down"] as const
type Clef = typeof validClefs[number]

interface PageProps {
  params: {
    clef: string
  }
}

async function loadDataGame(fileName: string) {
  const data = await readJSON(fileName)
  return shuffleArray(data)
}

export default async function PlayGame({ params }: PageProps) {
  const { clef } = params

  if (!validClefs.includes(clef as Clef)) {
    redirect('/')
  }

  const data = await loadDataGame(`nota-certa/${clef}.json`)
  const svgPath = "/nota-certa/" + clef

  return <PlayGameClient data={data} svgPath={svgPath} />
}
