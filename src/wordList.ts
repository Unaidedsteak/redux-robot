import * as fs from 'fs'

const wordListPath: string = require('word-list');
const wordArray: Array<String> = fs.readFileSync(wordListPath, 'utf8').split('\n')

interface WordsSorted {
    [key: string]: Array<String>
}

const wordSorted: WordsSorted = {}

export function GenerateWords() {
    return wordArray.map((word) => {
        if (wordSorted[`${word.charAt(0).toUpperCase()}`]) {
            const key = wordSorted[`${word.charAt(0).toUpperCase()}`]
            key.push(word)
        } else {
            wordSorted[`${word.charAt(0).toUpperCase()}`] = []
        }
    })
}

export function ChooseRandom(currentLetter: string): string {
    const wordsBeginingWithCurLetter: Array<String> = wordSorted[currentLetter]
    return wordsBeginingWithCurLetter[Math.floor(Math.random() * wordsBeginingWithCurLetter.length)].toString()
}

GenerateWords() // Geneate the words at runtime, probably totally reliable
