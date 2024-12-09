// 6. Analiza danych o sprzedaży
// Opis:
// Stwórz funkcję analyzeSalesData(salesData, metric), która analizuje dane
// sprzedażowe i zwraca wynik w zależności od wybranego metryki
// ("totalRevenue", "bestSeller", "lowStock", "categorySummary").
// ● salesData – tablica obiektów z polami:
// ○ productName,
// ○ category,
// ○ price,
// ○ unitsSold,
// ○ stock.

// Funkcjonalności:
// 1. "totalRevenue" – Oblicza całkowity przychód (cena × liczba sprzedanych
// jednostek).
// 2. "bestSeller" – Zwraca nazwę produktu z najwyższą liczbą sprzedanych
// jednostek.
// 3. "lowStock" – Zwraca produkty, których stock jest mniejszy niż 10.
// 4. "categorySummary" – Zwraca obiekt z podsumowaniem sprzedaży według
// kategorii.
// Przykład danych wejściowych:
const salesData = [
  {
    productName: "Laptop",
    category: "Electronics",
    price: 3000,
    unitsSold: 20,
    stock: 5,
  },
  {
    productName: "Headphones",
    category: "Electronics",
    price: 150,
    unitsSold: 50,
    stock: 30,
  },
  {
    productName: "Book",
    category: "Books",
    price: 50,
    unitsSold: 100,
    stock: 200,
  },
];

// Oczekiwany wynik dla "totalRevenue":
// 45000

export const analyseSalesData = (salesData, metric) => {
  /*
totalRevenue -> price x units sold
bestSeller -> productName with the biggest number of units sold
lowStock -> items where stock is lower than 10
categorySummary -> 
    */

  const getTotalRevenue = (sales) => {
    let salesRevenue = 0;
    sales.forEach((sale) => {
      salesRevenue += sale.unitsSold * sale.price;
    });

    return salesRevenue;
  };

  const getBestSeller = (sales) => {
    const bestSeller = sales.reduce((bestSellingItem, currentItem) => {
      return currentItem.unitsSold > bestSellingItem.unitsSold
        ? currentItem
        : bestSellingItem;
    }, salesData[0]);

    return bestSeller.productName;
  };

  const getLowStockItem = (sales) => {
    const LOW_STOCK_THRESHOLD = 10;
    return sales.filter((item) => item.stock < LOW_STOCK_THRESHOLD);
  };

  const getCategorySummary = (sales) => {
    const allCategories = sales.reduce((acc, currentItem) => {
      if (!acc[currentItem.category]) {
        acc[currentItem.category] = [];
      }
      acc[currentItem.category].push(currentItem);
      return acc;
    }, {});

    const categorySummary = Object.keys(allCategories).map((category) => {
      const products = allCategories[category];

      const totalSales = products.reduce((sum, item) => {
        return sum + item.price * item.unitsSold;
      }, 0);

      const totalUnitsSold = products.reduce((sum, item) => {
        return sum + item.unitsSold;
      }, 0);

      const productNamesInThisCategory = products.map(
        (product) => product.productName
      );

      return {
        category,
        productNamesInThisCategory,
        totalSales,
        totalUnitsSold,
      };
    });

    return categorySummary;
  };

  if (metric === "totalRevenue") {
    return getTotalRevenue(salesData);
  }

  if (metric === "bestSeller") {
    return getBestSeller(salesData);
  }

  if (metric === "lowStock") {
    return getLowStockItem(salesData);
  }

  if (metric === "categorySummary") {
    return getCategorySummary(salesData);
  }
};
