import Link from "next/link";

type LogoProps = {
    size?: "sm" | "md" | "lg" | "xl"; // size é opcional
};

export default function Logo({ size = "md" }: LogoProps) {
    let fontSizePrimary;
    let fontSizeSecondary;
    let borderRadius;
    let paddingX;
    let paddingY;

    switch (size) {
        case 'sm':
            fontSizePrimary = "text-2xl"; // Reduzi para text-2xl
            fontSizeSecondary = "text-3xl"; // Reduzi para text-3xl
            borderRadius = "rounded-[0.75rem]"; // Menor borda
            paddingX = "px-4"; // Menos espaçamento horizontal
            paddingY = "py-2"; // Menos espaçamento vertical
            break;
        case 'md':
            fontSizePrimary = "text-3xl"; // Reduzi para text-3xl
            fontSizeSecondary = "text-4xl"; // Reduzi para text-4xl
            borderRadius = "rounded-[1rem]"; // Menor borda
            paddingX = "px-6"; // Menos espaçamento horizontal
            paddingY = "py-4"; // Menos espaçamento vertical
            break;
        case 'lg':
            fontSizePrimary = "text-4xl"; // Reduzi para text-4xl
            fontSizeSecondary = "text-5xl"; // Reduzi para text-5xl
            borderRadius = "rounded-[1.5rem]"; // Menor borda
            paddingX = "px-8"; // Menos espaçamento horizontal
            paddingY = "py-6"; // Menos espaçamento vertical
            break;
    }

    return (
        <Link href="/" className="">
            <div className={`${paddingX} ${paddingY} ${borderRadius} shadow-xl flex flex-col items-center gap-2 hover:shadow-2xl transition-shadow duration-300`}>
                <p className={`font-light tracking-wider ${fontSizePrimary}`}>Afina</p>
                <p className={`font-extrabold tracking-tight text-primary ${fontSizeSecondary}`}>MÚSICA</p>
            </div>
        </Link>
    );
}
