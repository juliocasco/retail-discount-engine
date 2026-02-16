// Step 2 - Array 5 products//
let products = [
    { name: "Rays Jersey ", category: "Baseball", price: 100, Inventory: 50 },
    { name: "Bucs Cap ", category: "Football", price: 50, Inventory: 100 },
    { name: "Yankees Jersey ", category: "Baseball", price: 150, Inventory: 30 },
    { name: "Argentina Hoodie ", category: "Soccer", price: 80, Inventory: 20 },
    { name: "Callaway HeadCover ", category: "Golf", price: 120, Inventory: 40 }
];

// Step 3 - Apply category discounts//
console.log("Discounts Items");
for (let product of products) {
    let discount = 0;

    switch (product.category) {
        case "Baseball":
            discount = 0.20; // 20% discount
            break;
        case "Football":
            discount = 0.15; // 15% discount
            break;
        case "Soccer":
            discount = 0.10; // 10% discount
            break;
        case "Golf":
            discount = 0.25; // 25% discount
            break;
            default:
                discount = 0; // No Discount
    }
    product.discountedPrice = product.price * (1 - discount);

    // Step 4 - Additional customer Type //