"use client";

// typescript to gameName
type gameNameProps = {
    onClickClef: (clef: "treble-clef" | "bass-clef" | "bass-clef-octave-down" | null) => void;
};

export default function SelectClef({ onClickClef }: gameNameProps) {
    return (
        <main className="align-center flex flex-col items-center">
            <p>
                Selecione uma clave:
            </p>
            <div className="flex flex-col items-center mt-4">
                <button className="bg-primary text-white w-56 text-center rounded-full px-4 py-2 m-2 hover:bg-primary-dark transition duration-300" onClick={() => onClickClef("treble-clef")}>
                    Clave de Sol
                </button>
                <button className="bg-primary text-white w-56 text-center rounded-full px-4 py-2 m-2 hover:bg-primary-dark transition duration-300" onClick={() => onClickClef("bass-clef")}>
                    Clave de Fá
                </button>
                <button className="bg-primary text-white w-56 text-center flex items-center justify-center rounded-full px-4 py-2 m-2 hover:bg-primary-dark transition duration-300" onClick={() => onClickClef("bass-clef-octave-down")}>
                    Clave de Fá
                    <span className="text-xs ms-1">
                        (8º Abaixo)
                    </span>
                </button>
            </div>
        </main>
    );
}