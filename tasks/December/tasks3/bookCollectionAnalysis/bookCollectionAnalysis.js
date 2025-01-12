// Task 1: Book Collection Analysis
// Story: You work as an archivist in a large library. You’ve received data on various books and
// their authors, but you need to filter and transform it so that other employees can quickly
// understand the collection.

// Input data:
const books = [
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    pages: 423,
    category: "Fantasy",
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    author: "J.R.R. Tolkien",
    pages: 352,
    category: "Fantasy",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    author: "J.R.R. Tolkien",
    pages: 416,
    category: "Fantasy",
  },
  {
    title: "Bleak House",
    author: "Charles Dickens",
    pages: 960,
    category: "Classic",
  },
  {
    title: "The Master and Margarita",
    author: "Mikhail Bulgakov",
    pages: 480,
    category: "Classic",
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    pages: 694,
    category: "Fantasy",
  },
];

// Goals:
// 1. Extract only the books belonging to the "Fantasy" category.
// 2. For each selected book, create an object containing:
// ○ A shortened title (first three words).
// ○ The author's initials.
// 3. Check if every selected fantasy book has more than 300 pages.
// 4. Create a final summary string that lists the shortened titles and authors (with initials)
// separated by commas.
// 5. Return an object that includes:
// ○ A boolean indicating whether all fantasy books have more than 300 pages.
// ○ The array of transformed fantasy books.
// ○ The summary string.

// Example result
// {
// allLong: true,
// transformedBooks: [
// { shortTitle: "The Lord of", initials: "J.R.R.T" },
// { shortTitle: "The Lord of", initials: "J.R.R.T" },
// { shortTitle: "The Lord of", initials: "J.R.R.T" },
// { shortTitle: "A Game of", initials: "G.R.R.M" }
// ],
// summary: "The Lord of (J.R.R.T), The Lord of (J.R.R.T), The Lord of (J.R.R.T), A Game of
// (G.R.R.M)"
// }

export const analyseBookCollection = (booksCollection) => {
  const getFantasyBooks = () => {
    return booksCollection.filter((book) => book.category === "Fantasy");
  };

  const checkIfAllLong = () => {
    const REQUIRED_MIN_BOOK_LENGTH = 300;
    return getFantasyBooks().every(
      (book) => book.pages >= REQUIRED_MIN_BOOK_LENGTH
    );
  };

  const transformBooks = () => {
    const fantasyBooks = getFantasyBooks();

    const transformedBooks = fantasyBooks.map((book) => {
      const getAuthorInitials = () => {
        const initials = book.author
          .split("")
          .filter(
            (char) =>
              char === char.toUpperCase() && char !== " " && char !== "."
          );
        const transformedInitials = initials.map((char, index) => {
          return index !== initials.length - 1 ? char + "." : char;
        });

        return transformedInitials.join("");
      };
      const shortenedTitle = book.title.split(" ").slice(0, 3).join(" ");

      return {
        shortTitle: shortenedTitle,
        initials: getAuthorInitials(),
      };
    });

    return transformedBooks;
  };

  const getSummary = () => {
    const books = transformBooks();

    const summary = books
      .map((book) => `${book.shortTitle} (${book.initials})`)
      .join(", ");

    return summary;
  };

  return {
    allLong: checkIfAllLong(),
    transformedBooks: transformBooks(),
    summary: getSummary(),
  };
};
