"use client";

import Logo from "@/components/Logo/Logo";
import PlayGame from "@/components/PlayGame/PlayGame";
import SelectClef from "@/components/SelectClef/SelectClef";
import { useState } from "react";

export default function TomMestre() {
    const [selectedClaf, setSelectedClaf] = useState<"treble-clef" | "bass-clef" | "bass-clef-octave-down" | null>(null);

    return (
        <main className="align-center flex flex-col items-center">
            <Logo size="sm" />
            <p className="text-center text-2xl font-bold mt-10">
                Tom Mestre
            </p>
            {selectedClaf ? (
                <PlayGame clef={selectedClaf} gameRoute="tom-mestre" />
            ) : (
                <SelectClef onClickClef={setSelectedClaf} />
            )}
        </main>
    );
}