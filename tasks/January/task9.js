// Task 9

// You have an array representing items in a shopping cart. Each item has:
// ● name (string)
// ● price (number)
// ● quantity (number)
// ● tags (array of strings)
// ● Optional discountCode (string) with known codes: "SAVE10" (10% off),
// "HALFOFF" (50% off).
// Unknown or no code = no discount.
// You need to:
// ● Merge duplicates of the same product, summing quantities. If multiple discount codes
// apply, choose the one with the largest discount.
// ● Apply discounts to get the effective price.
// ● Calculate the total cart cost.
// ● Group items by their main tag (the first tag in the tags array).
// ● For each tag group, find the most expensive item (by effectivePrice *
// quantity).
// ● Return the grouped items with a summary of the most expensive item per tag, along
// with the total cost of the cart.
// Example Input:

// const cart = [
// { name: "Wireless Mouse", price: 50, quantity: 2, tags:
// ["electronics", "resultessories"], discountCode: "SAVE10" },
// { name: "Wireless Mouse", price: 50, quantity: 1, tags:
// ["electronics", "resultessories"] },
// { name: "USB Cable", price: 10, quantity: 5, tags:
// ["electronics"], discountCode: "HALFOFF" },
// { name: "T-Shirt", price: 20, quantity: 3, tags: ["clothing"] },
// { name: "Jacket", price: 100, quantity: 1, tags: ["clothing",
// "outerwear"], discountCode: "UNKNOWN" }
// ];

// Example Final Result (format):
// {
// totalCost: 317,
// groups: {
// electronics: {
// items: [
// { name: "Wireless Mouse", price: 50, quantity: 3,

// discountCode: "SAVE10", effectivePrice: 45 },

// { name: "USB Cable", price: 10, quantity: 5, discountCode:

// "HALFOFF", effectivePrice: 5 }
// ],
// mostExpensiveItem: { name: "Wireless Mouse", totalCost: 135 }
// },
// clothing: {
// items: [
// { name: "T-Shirt", price: 20, quantity: 3, effectivePrice:

// 20 },

// { name: "Jacket", price: 100, quantity: 1, discountCode:

// "UNKNOWN", effectivePrice: 100 }
// ],
// mostExpensiveItem: { name: "Jacket", totalCost: 100 }
// }
// }
// }

const cart = [
  {
    name: "Wireless Mouse",
    price: 50,
    quantity: 2,
    tags: ["electronics", "resultessories"],
    discountCode: "SAVE10",
  },
  {
    name: "Wireless Mouse",
    price: 50,
    quantity: 1,
    tags: ["electronics", "resultessories"],
  },
  {
    name: "USB Cable",
    price: 10,
    quantity: 5,
    tags: ["electronics"],
    discountCode: "HALFOFF",
  },
  { name: "T-Shirt", price: 20, quantity: 3, tags: ["clothing"] },
  {
    name: "Jacket",
    price: 100,
    quantity: 1,
    tags: ["clothing", "outerwear"],
    discountCode: "UNKNOWN",
  },
];

const getCartSummary = (cart) => {
  const SAVE_10_DISCOUNT_CODE = "SAVE10";
  const HALF_OFF_DISCOUNT_CODE = "HALFOFF";

  const calculateDiscountedPrice = (price, discountCode) => {
    switch (discountCode) {
      case SAVE_10_DISCOUNT_CODE:
        return price * 0.9;
      case HALF_OFF_DISCOUNT_CODE:
        return price * 0.5;
      default:
        return price;
    }
  };

  const mergeDuplicateItems = (cart) => {
    return cart.reduce((result, item) => {
      const duplicateItem = result.find((x) => x.name === item.name);

      if (duplicateItem) {
        duplicateItem.quantity += item.quantity;

        const noDiscountCodeSet =
          item.discountCode && !duplicateItem.discountCode;
        const discountCodeAlreadySet =
          item.discountCode && duplicateItem.discountCode;

        const findCorrectDiscount = () => {
          const duplicateDiscountPrice = calculateDiscountedPrice(
            duplicateItem.price,
            duplicateItem.discountCode
          );
          const itemDiscountPrice = calculateDiscountedPrice(
            duplicateItem.price,
            item.discountCode
          );

          return itemDiscountPrice < duplicateDiscountPrice
            ? (duplicateItem.discountCode = item.discountCode)
            : duplicateItem.discountCode;
        };

        switch (true) {
          case noDiscountCodeSet:
            duplicateItem.discountCode = item.discountCode;
            break;

          case discountCodeAlreadySet:
            findCorrectDiscount();
            break;
        }
      } else {
        //no duplicate item
        result.push({ ...item, discountCode: item.discountCode });
      }

      return result;
    }, []);
  };

  const mergedItems = mergeDuplicateItems(cart);

  const calculateTotalCostAndGroupItems = (mergedItems) => {
    let totalCost = 0;
    const groups = mergedItems.reduce((result, item) => {
      const effectivePrice = calculateDiscountedPrice(
        item.price,
        item.discountCode
      );
      const itemTotalCost = effectivePrice * item.quantity;
      totalCost += itemTotalCost;

      const itemMainTag = item.tags[0];

      if (!result[itemMainTag]) {
        result[itemMainTag] = { items: [], mostExpensiveItem: null };
      }

      result[itemMainTag].items.push({
        ...item,
        effectivePrice: effectivePrice,
      });

      if (
        !result[itemMainTag].mostExpensiveItem ||
        itemTotalCost > result[itemMainTag].mostExpensiveItem.totalCost
      ) {
        result[itemMainTag].mostExpensiveItem = {
          name: item.name,
          totalCost: itemTotalCost,
        };
      }

      return result;
    }, {});

    return { totalCost, groups };
  };

  const { totalCost, groups } = calculateTotalCostAndGroupItems(mergedItems);

  const result = {
    totalCost: totalCost.toFixed(2),
    groups,
  };
  
  return result;
};

getCartSummary(cart);
console.log(getCartSummary(cart));
