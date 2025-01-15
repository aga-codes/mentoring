// Task 8
// You have an array of student objects. Each student has:
// ● id (number)
// ● name (string)
// ● scores (object with keys math, english, history, science and numeric values)
// Any missing subject in scores should be treated as 0. You need to:
// ● Ensure all students have all four subjects.
// ● Calculate their average score.
// ● Find the top 3 students by average score.
// ● Assign each student a letter grade based on their average (A, B, C, D, F).
// ● Return a normalized list of students with averages, the top 3 students, and a
// distribution of students by grade category.
// Example Input:
// const students = [
// { id: 1, name: "Alice", scores: { math: 85, english: 92, history:
// 76 } },
// { id: 2, name: "Bob", scores: { math: 65, science: 70 } },
// { id: 3, name: "Charlie", scores: { english: 100, history: 90,
// science: 95 } }
// ];
// Example Final Result (format):
// {
// normalizedStudents: [
// { id: 1, name: "Alice", scores: { math: 85, english: 92, history: 76,
// science: 0 }, average: 63.25, grade: "D" },
// { id: 2, name: "Bob", scores: { math: 65, english: 0, history: 0,
// science: 70 }, average: 33.75, grade: "F" },
// { id: 3, name: "Charlie", scores: { math: 0, english: 100, history: 90,
// science: 95 }, average: 71.25, grade: "C" }
// ],
// getTop3Students: ["Charlie", "Alice", "Bob"],
// getGradeDistribution: {
// A: [],
// B: [],
// C: ["Charlie"],
// D: ["Alice"],
// F: ["Bob"]
// }

const students = [
  { id: 1, name: "Alice", scores: { math: 85, english: 92, history: 76 } },
  { id: 2, name: "Bob", scores: { math: 65, science: 70 } },
  {
    id: 3,
    name: "Charlie",
    scores: { english: 100, history: 90, science: 95 },
  },
];

const getStudentSummary = (students) => {
  const normalizedStudents = students.map((student) => {
    const scores = {
      math: student.scores.math || 0,
      english: student.scores.english || 0,
      history: student.scores.history || 0,
      science: student.scores.science || 0,
    };

    const totalScore = Object.values(scores).reduce(
      (total, score) => total + score,
      0
    );
    const average = totalScore / 4;

    let grade;
    if (average >= 90) grade = "A";
    else if (average >= 80) grade = "B";
    else if (average >= 70) grade = "C";
    else if (average >= 60) grade = "D";
    else grade = "F";

    return {
      ...student,
      scores,
      average: parseFloat(average.toFixed(2)),
      grade,
    };
  });

  const getTop3Students = [...normalizedStudents]
    .sort((a, b) => b.average - a.average)
    .slice(0, 3)
    .map((student) => student.name);

  const getGradeDistribution = normalizedStudents.reduce(
    (acc, student) => {
      if (!acc[student.grade]) {
        acc[student.grade] = [];
      }
      acc[student.grade].push(student.name);
      return acc;
    },
    { A: [], B: [], C: [], D: [], F: [] }
  );

  return {
    normalizedStudents,
    getTop3Students,
    getGradeDistribution,
  };
};

getStudentSummary(students);
console.log(getStudentSummary(students));
