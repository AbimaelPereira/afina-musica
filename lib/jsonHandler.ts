import fs from 'fs/promises';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data'); // Diretório onde os arquivos JSON estão armazenados

// Lê o conteúdo de um arquivo JSON
export async function readJSON(fileName: string) {
    const caminho = path.join(dataDir, fileName);
    const conteudo = await fs.readFile(caminho, 'utf-8');
    return JSON.parse(conteudo);
}

// função para reordenar um array de objetos aleatoriamente
export function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Grava conteúdo em um arquivo JSON
export async function writeJSON(fileName: string, dados: any) {
    const caminho = path.join(dataDir, fileName);
    const conteudo = JSON.stringify(dados, null, 2); // Formata o JSON com 2 espaços de indentação
    await fs.writeFile(caminho, conteudo, 'utf-8');
}