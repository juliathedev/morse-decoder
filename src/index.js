const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decodeMorse(expr) {
  const chunks = [];
  for (let i = 0; i < expr.length; i += 10) {
    chunks.push(expr.slice(i, i + 10));
  }

  const decoded = chunks.map((chunk) => {
    if (chunk === '**********') {
      return ' ';
    }
    const trimmedChunk = chunk.replace(/^0+/, '');
    let morseSymbol = '';
    for (let j = 0; j < trimmedChunk.length; j += 2) {
      const bits = trimmedChunk.slice(j, j + 2);
      if (bits === '10') {
        morseSymbol += '.';
      } else if (bits === '11') {
        morseSymbol += '-';
      }
    }
    return MORSE_TABLE[morseSymbol];
  });

  return decoded.join('').replace(/\s+/g, ' ').trim();
}

module.exports = decodeMorse;
