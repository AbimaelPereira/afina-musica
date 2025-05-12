import Logo from "@/components/Logo/Logo";
import Link from "next/link";

// metadata
export const metadata = {
  title: "AfinaMusica",
  description: "Afine sua mente com jogos musicais interativos!",
};

export default function Home() {
  return (
    <main className="align-center flex flex-col items-center justify-between">
      <Logo size="md" />
      <p className="text-center text-2xl font-light tracking-wider mt-10">
        Afine sua mente com jogos musicais interativos!
      </p>
      <p className="text-center text-2xl font-light tracking-wider mt-10">
        Selecione um <span className="font-bold">game</span>:
      </p>
      <div className="flex flex-col gap-4 mt-10 mb-5">
        <Link
          href="/games/nota-certa"
          className="bg-primary text-text text-center rounded-lg px-6 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <span className="font-bold me-2">
            Nota Certa:
          </span>
          Desafie sua leitura das notas no pentagrama!
        </Link>
        <Link
          href="/games/tom-mestre"
          className="bg-primary text-text text-center rounded-lg px-6 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
          // esconder
          hidden
        >
          <span className="font-bold me-2">
            Tom Mestre:
          </span>
          bora dominar Armadura de Claves e Tonalidades?
        </Link>
      </div>
    </main>
  );
}
