// Task 2
// Description: Write a function that takes a string representing text (e.g., a paragraph). The
// function should:
// 1. Split the text into words (assume words are separated by spaces and punctuation
// marks).
// 2. Count the occurrences of each word, regardless of case (convert all to lowercase).
// 3. Return an object where the keys are the words and the values are the number of
// their occurrences.
// 4. Exclude empty strings that might appear after splitting.
// Input data (example):
// const text = "JavaScript to język, który pozwala tworzyć interaktywne strony. JavaScript jest popularny.";

// Expected result (example):
// {
// javascript: 2,
// to: 1,
// język: 1,
// który: 1,
// pozwala: 1,
// tworzyć: 1,
// interaktywne: 1,
// strony: 1,
// jest: 1,
// popularny: 1
// }

const getParagraphInfo = (text) => {
  const splittedText = text
    .toLowerCase()
    .split(/[!?.,:;(){}[\]'"“”\s]/)
    .filter(Boolean);

  const getParagraphSummary = splittedText.reduce((result, word) => {
    if (!result[word]) {
      result[word] = 0;
    }

    result[word] += 1;

    return result;
  }, {});

  return getParagraphSummary;
};
