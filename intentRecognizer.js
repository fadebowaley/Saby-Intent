const natural = require("natural");
const intents = require("./intents.json");
const tokenizer = new natural.WordTokenizer();

class IntentRecognizer {
  constructor() {
    this.intents = intents;
  }

  recognize(text) {
    let bestMatch = { intent: null, score: 0 };
    for (const [intent, phrases] of Object.entries(this.intents)) {
      for (const phrase of phrases) {
        const score = this.calculateSimilarity(text, phrase);
        if (score > bestMatch.score) {
          bestMatch = { intent, score };
        }
      }
    }
    return bestMatch;
  }

  calculateSimilarity(text, phrase) {
    const textTokens = tokenizer.tokenize(text.toLowerCase());
    const phraseTokens = tokenizer.tokenize(phrase.toLowerCase());

    const commonTokens = textTokens.filter((token) =>
      phraseTokens.includes(token)
    );
    return (
      commonTokens.length / Math.max(textTokens.length, phraseTokens.length)
    );
  }
}

// Example usage
const recognizer = new IntentRecognizer();
const inputText = "What is the weather today?";
const recognized = recognizer.recognize(inputText);
console.log(
  `Recognized Intent: ${recognized.intent}, Accuracy: ${recognized.score}`
);



module.exports = { IntentRecognizer };
