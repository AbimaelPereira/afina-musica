export function formatarTempo(segundos: number): string {
    const minutos = Math.floor(segundos / 60)
    const restoSegundos = segundos % 60

    const minutosFormatados = String(minutos).padStart(2, '0')
    const segundosFormatados = String(restoSegundos).padStart(2, '0')

    return `${minutosFormatados}:${segundosFormatados}`
}

// utils/playSound.js
export function playSound(soundPath: string) {
    if (typeof window === 'undefined') {
        console.error('playSound function can only be called in the browser environment');
        return;
    }

    // Verifica se o caminho do som é válido
    if (!soundPath || typeof soundPath !== 'string') {
        console.error('Invalid sound path:', soundPath);
        return;
    }
    // Verifica se o Audio é suportado
    if (typeof Audio === 'undefined') {
        console.error('Audio is not supported in this environment');
        return;
    }
    // Verifica se o arquivo de som existe
    if (!soundPath.endsWith('.mp3') && !soundPath.endsWith('.wav')) {
        console.error('Invalid sound file format. Only .mp3 and .wav are supported:', soundPath);
        return;
    }
    // Cria um novo objeto Audio e toca o som
    const audio = new Audio(soundPath);
    audio.play().catch((err) => {
        console.error('Erro ao tocar o som:', err);
    });
}