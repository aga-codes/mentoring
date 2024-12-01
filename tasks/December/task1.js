// Napisz funkcję isAdult(age), która przyjmuje wiek jako argument i zwraca true,
// jeśli użytkownik ma 18 lat lub więcej, a false w przeciwnym razie.

const isAdult = (age) => {
	return age >= 18 ? true : false;
};

// 2. Stwórz funkcję findMax(a, b, c), która zwraca największą liczbę spośród trzech
// podanych.

const findMax = (a, b, c) => {
	return Math.max(a, b, c);
};

// 3. Napisz funkcję isInRange(x, min, max), która sprawdza, czy liczba x mieści się
// w przedziale [min, max].

const isInRange = (x, min, max) => {
	return x >= min && x <= max ? true : false;
};
// 4. Stwórz funkcję getDiscount(index), która na podstawie kategorii
// użytkownika (student, senior, regular) zwróci odpowiedni procent zniżki:
// ● student – 20%
// ● senior – 15%
// ● regular – 5%

const getDiscount = (index) => {
	let discount = "";
	switch (index) {
		case "student":
			discount = 20;
			break;
		case "senior":
			discount = 15;
			break;
		case "regular":
			discount = 5;
			break;
		default:
			discount = 5;
			break;
	}
	return discount;
};

// 5. Napisz funkcję gradeToLetter(score), która zwraca ocenę literową na
// podstawie wyniku:
// ● 90–100: "A"
// ● 80–89: "B"
// ● 70–79: "C"
// ● 60–69: "D"
// ● 0–59: "F"

const gradeToLetter = (score) => {
	if (score >= 90) {
		return "A";
	} else if (score >= 80 && score <= 89) {
		return "B";
	} else if (score >= 70 && score <= 79) {
		return "C";
	} else if (score >= 60 && score <= 69) {
		return "D";
	} else {
		return "F";
	}
};

// 6. Stwórz funkcję dayType(day), która zwraca "weekend", jeśli dzień to sobota lub
// niedziela, a "weekday" w innych przypadkach. Wykorzystaj switch.

const dayType = (day) => {
	let typeOfDay = "";
	switch (day) {
		case "Saturday":
			typeOfDay = "weekend";
			break;
		case "Sunday":
			typeOfDay = "weekend";
			break;
		default:
			typeOfDay = "weekday";
			break;
	}

	return typeOfDay;
};

// 7. Napisz funkcję sumNumbers(n), która zwraca sumę wszystkich liczb od 1 do n.
// (uzyj pętli FOR)

const sumNumbers = (n) => {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
};

// 8. Napisz funkcję productOfOdds(n), która oblicza iloczyn wszystkich liczb
// nieparzystych od 1 do n. (uzyj pętli FOR)

const productOfOdds = (n) => {
	let product = 1;

	for (let i = 1; i <= n; i++) {
		if (i % 2 !== 0) {
			console.log("number is odd: ", i);
			product *= i;
		}
	}
	return product;
};

// 9. Napisz funkcję calculateBMI(weight, height), która zwraca indeks masy
// ciała BMI.

const calculateBMI = (weight, height) => {
	if (weight <= 0 || height <= 0) {
		return "Weight and height must be greater than zero.";
	}

	if (height > 2.5) {
		return "Height must be provided in meters";
	}

	const BMI = weight / (height * height);
	let index;

	if (BMI < 18.5) {
		index = "underweight";
	} else if (BMI >= 18.5 && BMI < 24.9) {
		index = "healthy";
	} else if (BMI >= 25 && BMI < 29.9) {
		index = "overweight";
	} else {
		index = "obese";
	}

	return `Your BMI is ${BMI.toFixed(1)} - you are in (${index}) category.`;
};

// 10. Napisz funkcję average(numbers), która zwraca średnią arytmetyczną z podanej
// tablicy liczb.

const average = (numbers) => {
	let total = 0;
	const sum = numbers.map((num) => (total += num));
	return total / numbers.length;
};

// 11. Stwórz funkcję randomInteger(min, max), która zwraca losową liczbę całkowitą
// z przedziału [min, max]

const randomInteger = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 12. Napisz funkcję formatPrice(price), która przyjmuje liczbę i zaokrągla ją do
// dwóch miejsc po przecinku

const formatPrice = (price) => {
	return Math.round((price + Number.EPSILON) * 100) / 100;
};

// 13. Napisz funkcję getInitials(name), która zwraca inicjały osoby podanej w
// formacie "Imię Nazwisko"

const getInitials = (name) => {
	const initials = name.split(" ");

	return `${String(initials[0]).charAt(0)}${String(initials[1]).charAt(0)}`;
};

// 14. Stwórz funkcję replaceVowels(str, char), która zamienia wszystkie
// samogłoski w podanym ciągu na podany znak char

const replaceVowels = (str, char) => {
  return str.replace(/[aeiouAEIOU]/g, char);
}

// 15. Napisz funkcję splitWords(str), która dzieli zdanie na tablicę słów (np. "Hello world"
// → ["Hello", "world"])

const splitWords = (str) => {
	return str.split(" ");
};
// 16. Napisz funkcję formatName(fullName), która formatuje podane imię i nazwisko
// do postaci "Imię Nazwisko" (pierwsza litera duża, reszta mała).

const formatName = (fullName) => {
	return fullName
		.trim()
		.split(" ")
		.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
		.join(" ");
};

// 17. Stwórz funkcję isValidEmail(email), która sprawdza, czy podany tekst jest
// poprawnym adresem e-mail.

const isValidEmail = (email) => {
	return email.includes("@") ? true : false;
};

// 18. Napisz funkcję trimSpaces(str), która usuwa nadmiarowe spacje na początku,
// końcu i między słowami w podanym ciągu.

const trimSpaces = (str) => {
	return str.split(" ").join("");
};

// 19. Utwórz funkcję, która zwraca dowolne przedmioty, na które Cię stać w sklepie, mając
// określoną kwotę w portfelu. Posortuj listę w porządku alfabetycznym
// itemsPurchased({ Water: "$1", Bread: "$3", TV: "$1,000",
// Fertilizer: "$20" }, "$300") ➞ ["Bread", "Fertilizer", "Water"]

const itemsPurchased = (items, amount) => {
	const list = [];

	for (const [item, price] of Object.entries(items)) {
    const formattedPrice = parseFloat(price.replace(/[$,]/g, ""));

		if (formattedPrice <= amount) {
			list.push(item);
		}
	}

	return list.sort();
};
