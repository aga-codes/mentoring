import { analyseSurvery } from "./analyseSurvery";

describe("analyseSurvery", () => {
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
  it("should analyse survery", () => {
    expect(analyseSurvery(results)).toEqual({
      allAnswered: ["Anna", "John"],
      answersSummary: {
        "Favorite color": ["Blue", "Green"],
        "Favorite food": ["Pizza"],
      },
      uniqueQuestions: 2,
    });
  });
});
