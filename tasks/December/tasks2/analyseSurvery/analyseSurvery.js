// 4. Analiza wyników ankiety
// Zadanie:
// Napisz funkcję analyzeSurvey(results), która przyjmuje tablicę wyników
// ankiety. Każdy wynik to obiekt z:
// ● name (osoba),
// ● answers (tablica odpowiedzi, gdzie każda odpowiedź ma question i
// answer).
// Funkcja powinna zwrócić:
// 1. Liczbę unikalnych pytań.
// 2. Tablicę osób, które odpowiedziały na wszystkie pytania.
// 3. Obiekt z pytaniami jako kluczami i tablicą unikalnych odpowiedzi dla każdego
// pytania.
// Przykład danych wejściowych:
const results = [
  {
    name: "Anna",
    answers: [
      { question: "Favorite color", answer: "Blue" },
      { question: "Favorite food", answer: "Pizza" },
    ],
  },
  {
    name: "John",
    answers: [
      { question: "Favorite color", answer: "Green" },
      { question: "Favorite food", answer: "Pizza" },
    ],
  },

  {
    name: "Kate",
    answers: [{ question: "Favorite color", answer: "Blue" }],
  },
];

// Oczekiwany wynik:
// {
// uniqueQuestions: 2,
// allAnswered: ["Anna", "John"],
// answersSummary: {
// "Favorite color": ["Blue", "Green"],
// "Favorite food": ["Pizza"]
// }
// }


//FIX

// export const analyseSurvery = (results) => {
//   const getAllUniqueQuestions = () => {
//     const allQuestions = results.flatMap((singleResult) => {
//       return singleResult.answers.map((answer) => answer.question);
//     });

//     return Array.from(new Set(allQuestions));
//   };
//   const getNumberOfUniqueQuestions = () => {
//     return getAllUniqueQuestions().length;
//   };

//   const getUsernamesForAllQuestionsAnswered = () => {
//     const questions = getAllUniqueQuestions();

//     const usernames = results.filter((user) => {
//       const answeredQuestion = user.answers.map((answer) => answer.question);
//       return questions.every((question) => answeredQuestion.includes(question));
//     });

//     return usernames.map((person) => person.name);
//   };

//   const getAnswersSummary = () => {
//     const uniqueQuestions = getAllUniqueQuestions();

//     console.log("unique questions", uniqueQuestions);

//     const questionsSummary = uniqueQuestions.reduce(
//       (summary, currentQuestion) => {
//         const allAnswers = results.flatMap((result) => {
//           return result.answers.filter(
//             (answer) => answer.question === currentQuestion
//           );
//         });

//         summary[currentQuestion] = [...new Set(allAnswers)];

//         return summary;
//       },
//       {}
//     );
//     return questionsSummary;
//   };

//   const answersSummary = allQuestions.reduce((summary, question) => {
//     // Step 2.1: Collect all answers for the current question
//     const answersForQuestion = surveyResults
//       .flatMap((person) =>
//         person.answers.filter((answer) => answer.question === question)
//       )
//       .map((answer) => answer.answer);

//     // Step 2.2: Store only unique answers for this question
//     summary[question] = [...new Set(answersForQuestion)];

//     return summary;
//   }, {});

//   return {
//     uniqueQuestions: getNumberOfUniqueQuestions(),
//     allAnswered: getUsernamesForAllQuestionsAnswered(),
//     answersSummary: getAnswersSummary(),
//   };
// };
