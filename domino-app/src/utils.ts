export type Domino = [number, number]

export const flipDomino = (num: Domino[]): Domino[] => {
    return num.map(([a, b]) => [b, a])
}

export const showDoubleNum = (num: Domino[]) => {
    const res = num.filter(([a, b]) => a === b)

    return res.length
}

export const removeWithTotalNum = (num: Domino[], sum: number) => {
    return [...num].filter(([a, b]) => a + b !== sum)
}

export const sortingDomino = (num: Domino[], order: "asc" | "dsc"): Domino[] => {
    return [...num].sort((a, b) => {
        const sumA = a[0] + a[1]
        const sumB = b[0] + b[1]
        if (order === "asc") {
            return sumA - sumB
        } else {
            return sumB - sumA
        }
    })
};

export const removeDuplicates = (dominoData: Domino[]): Domino[] => {
    const uniqueDominoes = new Set<string>();

    return dominoData.filter(([a, b]) => {
        // Buat string yang unik untuk setiap pasangan domino
        const key = a < b ? `${a},${b}` : `${b},${a}`;

        // Cek apakah pasangan domino sudah ada di Set
        if (uniqueDominoes.has(key)) {
            return false;
        }

        // Jika belum ada, tambahkan ke Set dan pertahankan domino di array
        uniqueDominoes.add(key);
        return true;
    });
};

