// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
// 
const inventory = [];
const product1 = {
    name: "Smartphone",
    model: "iphone15",
    cost: 95000,
    quantity: 5
};
const product2 = {
    name: "Laptop",
    model: "HpProBook",
    cost: 75000,
    quantity: 10
};
const product3 = {
    name: "Tablet",
    model: "ipad",
    cost: 85000,
    quantity: 6
};
inventory.unshift(product1, product2, product3);
console.log(inventory);
console.log("product 3:.quantity", product3.quantity);
const product4 = {
    name: "Camera",
    model: "GoPro8",
    cost: 70000,
    quantity: 10
};
inventory.push(product4);
console.log(inventory);
console.log("product4:.model", product4.model);
export {};
