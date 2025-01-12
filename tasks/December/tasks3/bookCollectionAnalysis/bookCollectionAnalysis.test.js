import { analyseBookCollection } from "./bookCollectionAnalysis";
describe("bookCollectionAnalysis", () => {
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
  it("should analyse book collection", () => {
    expect(analyseBookCollection(books)).toEqual({
      allLong: true,
      transformedBooks: [
        { shortTitle: "The Lord of", initials: "J.R.R.T" },
        { shortTitle: "The Lord of", initials: "J.R.R.T" },
        { shortTitle: "The Lord of", initials: "J.R.R.T" },
        { shortTitle: "A Game of", initials: "G.R.R.M" },
      ],
      summary:
        "The Lord of (J.R.R.T), The Lord of (J.R.R.T), The Lord of (J.R.R.T), A Game of (G.R.R.M)",
    });
  });
});
