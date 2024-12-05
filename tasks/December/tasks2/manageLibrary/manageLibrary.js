// 3. Zarządzanie biblioteką książek
// Zadanie:
// Napisz funkcję manageLibrary(books, action, payload), która zarządza
// biblioteką. Funkcja przyjmuje:
// 1. books – tablicę obiektów, gdzie każdy obiekt zawiera:
// ○ title (tytuł książki),
// ○ author (autor),
// ○ isAvailable (czy książka jest dostępna).
// 2. action – typ operacji do wykonania:
// ○ "add" – dodaje nową książkę (dane w payload).
// ○ "remove" – usuwa książkę na podstawie tytułu (payload zawiera
// title).
// ○ "borrow" – ustawia isAvailable na false dla podanej książki
// (payload zawiera title).
// ○ "return" – ustawia isAvailable na true dla podanej książki
// (payload zawiera title).

// Funkcja powinna zwracać zaktualizowaną tablicę książek.
// Przykład danych wejściowych:
const books = [
  { title: "1984", author: "George Orwell", isAvailable: true },
  { title: "Brave New World", author: "Aldous Huxley", isAvailable: true },
];
// // Dodawanie książki

// manageLibrary(books, "add", { title: "Dune", author: "Frank
// Herbert", isAvailable: true });
// // Wypożyczanie książki
// manageLibrary(books, "borrow", { title: "1984" });
// // Zwracanie książki
// manageLibrary(books, "return", { title: "1984" });

// Oczekiwane wyniki:
// 1. Po dodaniu:
// [
// { title: "1984", author: "George Orwell", isAvailable: true
// },
// { title: "Brave New World", author: "Aldous Huxley",
// isAvailable: true },
// { title: "Dune", author: "Frank Herbert", isAvailable: true
// }
// ]

// 2. Po wypożyczeniu:
// [
// { title: "1984", author: "George Orwell", isAvailable: false
// },
// { title: "Brave New World", author: "Aldous Huxley",
// isAvailable: true },
// { title: "Dune", author: "Frank Herbert", isAvailable: true
// }
// ]

// 3. Po zwróceniu:
// [
// { title: "1984", author: "George Orwell", isAvailable: true
// },

// { title: "Brave New World", author: "Aldous Huxley",
// isAvailable: true },
// { title: "Dune", author: "Frank Herbert", isAvailable: true
// }
// ]

export const manageLibrary = (books, action, payload) => {
  /*
add => push into books array
remove => find index of the object and remove from the array
borrow => change isAvailable to false
return => change isAvailable to true
*/

  let library = [...books];

  const addBook = (newBook) => {
    library.push(newBook);
    return library;
  };

  const removeBook = (payload) => {
    let bookToRemove;
    const { title } = payload;
    library.map((singlePosition) => {
      if (singlePosition.title === title) {
        console.log("TITLE HAS BEEN FOUND");
        bookToRemove = library.findIndex((book) => book.title === title);
      }
      library.splice(bookToRemove, 1);
      console.log("LIBRARY HAS BEEN UPDATED", library);
      return library;
    });
  };

  const borrowOrReturnBook = (action, payload) => {
    library.map((book) => {
      if (book.title === payload.title) {
        console.log("TITLE HAS BEEN FOUND");
        if (action === "borrow") {
          book.isAvailable = false;
        } else if (action === "return") {
          book.isAvailable = true;
        }
      } else {
        return "This book is not in the library";
      }
    });

    console.log("LIBRARY HAS BEEN UPDATED", library);
    return library;
  };

  if (action === "add") addBook(payload);
  if (action === "remove") removeBook(payload);
  if (action === "borrow" || action === "return")
    borrowOrReturnBook(action, payload);

  return library;
};