//Objects
let car: { brand: string; model: string; year: number } = {
  brand: "Ford",
  model: "Mustang",
  year: 1964,
  //   color: "blue",
};

car.brand = "toyata";
// car.color = "red";

let car1: { brand: string; model: string; year: number } = {
  brand: "ferari",
  model: "ferrari",
  year: 1962,
};

let book = { title: "book", cost: 10 };
let pen = { title: "pen", cost: 20 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = "new book";

//challenge
let bike = {
  brand: "Honda",
  year: 2010,
};

let laptop = {
  brand: "Dell",
  year: 2020,
};

let products: { brand: string; year: number }[] = [bike, laptop];
