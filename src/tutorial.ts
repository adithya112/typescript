let awesome: string = "shakeAndbake";
awesome = "something";
awesome = awesome.toUpperCase();
console.log(awesome);

// awesome = 20;

let amount: number = 10;
// amount = "pants";

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = "shakeAndBake";

//challenges
let str: string = "adithya";
str = str.toUpperCase();
console.log(str);

let num: number = 29;
num = num + 10;
console.log(num);

let bool = true; //type inference
console.log(bool === true);

//union type
let strOrNum: string | number = "adithya";
strOrNum = 29;
console.log(strOrNum);

let requestStatus: "pending" | "success" | "failed" = "pending";
requestStatus = "success";
// requestStatus = "hello";

let notSure: any = "not sure";
notSure = 4;

//usage of type annotations
const books = ["1984", "Animal Farm", "The Old Man and the Sea"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    break;
  }
}

console.log(foundBook?.length);

//challenge
let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
// orderStatus = "cancelled";

let discount: number | string = 20;
discount = "20%";
// discount = true;

//arrays
let prices: number[] = [10, 20, 30];
prices.push(40);
// prices.push("hello");

let fruit: string[] = ["apple", "banana", "orange"];
// fruit.push(10);

//To create empty array
let emptyValues: number[] = [];

let array: (string | boolean)[] = ["hello", true];

//challenge
let tempratures: number[] = [10, 20, 30];
// tempratures.push("20");

let colors: string[] = ["red", "green", "blue"];
// colors.push(true);

let mixedArr: (number | string)[] = [1, "two", 3];
// mixedArr.push(false);
