import { manageLibrary } from "./manageLibrary";

describe("manageLibrary", () => {
  const books = [
    { title: "1984", author: "George Orwell", isAvailable: true },
    { title: "Brave New World", author: "Aldous Huxley", isAvailable: true },
  ];

  it("should add book to the library", () => {
    const newTitle = {
      title: "Harry Potter",
      author: "JK Rowling",
      isAvailable: true,
    };

    expect(manageLibrary(books, 'add', newTitle)).toEqual([
      { title: "1984", author: "George Orwell", isAvailable: true },
      { title: "Brave New World", author: "Aldous Huxley", isAvailable: true },
      {
        title: "Harry Potter",
        author: "JK Rowling",
        isAvailable: true,
      },
    ]);
  });
});
