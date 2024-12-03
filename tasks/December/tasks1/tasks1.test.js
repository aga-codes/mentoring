import {
	findMax,
	getDiscount,
	isAdult,
	isInRange,
	gradeToLetter,
	dayType,
	sumNumbers,
	productOfOdds,
	calculateBMI,
	average,
	randomInteger,
	formatPrice,
	getInitials,
	replaceVowels,
	splitWords,
	formatName,
	isValidEmail,
	trimSpaces,
	itemsPurchased,
} from "./tasks";

describe("tasks", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const mockedRandomInt = jest.fn(() => 6);
	jest.mock("./tasks", () => ({
		randomInteger: mockedRandomInt,
	}));

	describe("isAdult", () => {
		it.each`
			age    | expected
			${18}  | ${true}
			${122} | ${true}
			${12}  | ${false}
			${7}   | ${false}
		`("should return $expected for $age", ({age, expected}) => {
			expect(isAdult(age)).toBe(expected);
		});
	});

	describe("findMax", () => {
		it("should find the biggest number", () => {
			expect(findMax(2, 22, 7)).toEqual(22);
			expect(findMax(0, 2, 1)).toEqual(2);
			expect(findMax(222, 22, 7)).toEqual(222);
		});
	});

	describe("isInRange", () => {
		it("checks if number is within range", () => {
			expect(isInRange(2, 7, 30)).toBe(false);
			expect(isInRange(2, 1, 30)).toBe(true);
		});
	});

	describe("getDiscount", () => {
		it.each`
			user         | discount
			${"student"} | ${20}
			${"random"}  | ${5}
			${"senior"}  | ${15}
			${"regular"} | ${5}
		`("returns $discount for provided $user group", ({user, discount}) => {
			expect(getDiscount(user)).toEqual(discount);
		});
	});

	describe("gradeToLetter", () => {
		it.each`
			score | grade
			${90} | ${"A"}
			${85} | ${"B"}
			${99} | ${"A"}
			${17} | ${"F"}
			${63} | ${"D"}
			${72} | ${"C"}
		`("returns grade for the provided student's score", ({score, grade}) => {
			expect(gradeToLetter(score)).toEqual(grade);
		});
	});
	describe("dayType", () => {
		it.each`
			input         | type
			${"Sunday"}   | ${"weekend"}
			${"Saturday"} | ${"weekend"}
			${"Monday"}   | ${"weekday"}
		`("returns type of the day based on the provider day of the week", ({input, type}) => {
			expect(dayType(input)).toEqual(type);
		});

		describe("sumNumbers", () => {
			it("returns a sum of numbers from 1 to input", () => {
				expect(sumNumbers(7)).toBe(28);
			});
		});

		describe("productOfOdds", () => {
			it("returns a product of odds from 1 to input", () => {
				expect(productOfOdds(21)).toBe(13749310575);
			});
		});

		describe("calculateBMI", () => {
			it("calculates BMI", () => {
				expect(calculateBMI(55, 1.65)).toBe("Your BMI is 20.2 - you are in healthy category.");
				expect(calculateBMI(155, 1.65)).toBe("Your BMI is 56.9 - you are in obese category.");
				expect(calculateBMI(55, 1.85)).toBe("Your BMI is 16.1 - you are in underweight category.");
			});
		});

		describe("average", () => {
			it("returns the average number", () => {
				expect(average([2, 7, 2, 2, 5, 2])).toBe(3.3333333333333335);
				expect(average([2, 2, 2, 2])).toBe(2);
			});
		});

		describe("randomInteger", () => {
			//to check the mock
			xit("returns the random number", () => {
				const result = randomInteger(2, 7);
				expect(mockedRandomInt()).toHaveBeenCalled();
				expect(result).toBe(6);
			});
		});

		describe("formatPrice", () => {
			it("rounds the price", () => {
				expect(formatPrice(1.005)).toEqual(1.01);
				expect(formatPrice(23.286)).toEqual(23.29);
			});
		});

		describe("getInitials", () => {
			it("gets initials", () => {
				expect(getInitials("John Smith")).toBe("JS");
				expect(getInitials("Mia Black")).toBe("MB");
			});

			describe("replaceVowels", () => {
				it("replaces vowels from the input with the provided char", () => {
					expect(replaceVowels("aga", "*")).toBe("*g*");
					expect(replaceVowels("nice", "$")).toBe("n$c$");
				});
			});

			describe("splitWords", () => {
				it("splits words", () => {
					expect(splitWords("Some Random")).toEqual(["Some", "Random"]);
					expect(splitWords("Hello World")).toEqual(["Hello", "World"]);
				});
			});

			describe("formatName", () => {
				it("formats name", () => {
					expect(formatName("john Smith")).toEqual("John Smith");
					expect(formatName("john smith")).toEqual("John Smith");
				});
			});

			describe("isValidEmail", () => {
				it("checks if the provided email is valid", () => {
					expect(isValidEmail("joh@Smith")).toBe(true);
					expect(isValidEmail("johnsmith.test")).toBe(false);
				});
			});

			describe("trimSpaces", () => {
				it("trims spaces within the input", () => {
					expect(trimSpaces("    a   b c     ")).toBe("abc");
					expect(trimSpaces("a   b c")).toBe("abc");
				});
			});

			describe("itemsPurchased", () => {
				it("returns a list of items user can afford based on the amount in the wallet", () => {
					const items = {Water: "$1", Bread: "$3", TV: "$1,000", Fertilizer: "$20"};
					expect(itemsPurchased(items, "$300")).toEqual(["Bread", "Fertilizer", "Water"]);
					expect(itemsPurchased(items, "$1,0000")).toEqual(["Bread", "Fertilizer", "TV", "Water"]);
				});
			});
		});
	});
});
