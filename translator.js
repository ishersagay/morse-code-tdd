export const translate = (input) => {
    const morseCode = (letter) => {
        let morseCodeAlphabet = {
            a: "._",
            b: "_...",
            c: "_._.",
            d: "_..",
            e: ".",
            f: ".._.",
            g: "__.",
            h: "....",
            i: "..",
            j: ".___",
            k: "_._",
            l: "._..",
            m: "__",
            n: "_.",
            o: "___",
            p: ".__.",
            q: "__._",
            r: "._.",
            s: "...",
            t: "_",
            u: ".._",
            v: "..._",
            w: ".__",
            x: "_.._",
            y: "_.__",
            z: "__..",
        };
        for (const key in morseCodeAlphabet) {
            if (letter === key) {
                return morseCodeAlphabet[key]
            }
        }
    }

    return morseCode(input)
};

export const stringConvert = (input) => {
    const strToChar = (word) => {
        return word.toLowerCase().replace(/\s+/g,'').split("");
    }
    return strToChar(input)
}

export const arrToMorse = (input) => {

    const stringToMorse = (string) => {
        let temp = stringConvert(string);
        let convert = temp.map(element => translate(element))
        return convert.toString()
    }

    return stringToMorse(input);
}