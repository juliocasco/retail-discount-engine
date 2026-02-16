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

    let customerType = "Student"; 

    function getcustomerDiscount(customerType) {
        if (customerType === "Student") {
            return 0.05; // Additional 5% discount for students
        } else if (customerType === "Senior") {
            return 0.10; // Additional 10% discount for seniors
        } else {
            return 0; // No additional discount for regular customers
        }   
    }

    let certainCustomerDiscount = getcustomerDiscount(customerType);

    //Step 5 // 

    let customers = [
        { id: 1, type: "Student", cart: ["Rays Jersey ", "Bucs Cap "] },
        { id: 2, type: "Senior", cart: ["Yankees Jersey ", "Argentina Hoodie "] },
        { id: 3, type: "Regular", cart: ["Callaway HeadCover "] }
    ];

    for (let customer of customers) {
        console.log(`Customer ID: ${customer.id}, Type: ${customer.type}`);

        let Subtotal = 0;
        for (let itemName of customer.cart) {
           if (product = products.find(p => p.name === itemName)) {
            if (prduct && product.Inventory > 0) {
                Subtotal += product.discountedPrice;
                product.Inventory -= 1; // Reduce inventory by 1 for each purchased item
            } else {
                console.log(`Sorry, ${itemName} is out of stock.`);
            }
           }
        }

        let additionalDiscount = getcustomerDiscount(customer.type);
        let extraamount = Subtotal * additionalDiscount;
        let finalTotal = Subtotal - extraamount;

        console.log(`Subtotal: $${Subtotal.toFixed(2)}`);
        console.log(`Additional Discount: $${extraamount.toFixed(2)}`);
        console.log(`Final Total: $${finalTotal.toFixed(2)}`);
        console.log("-");
    }
}

// Step 6 I used For to log eacg key//

let exampleProduct = products[0];
for let key in exampleProduct) {
    console.log(`${key}: ${exampleProduct[key]}`);
}   

//Step 7 Used object entries//

for (let product of products) {
    console.log(`Product: ${product.name}, Inventory: ${product.Inventory}`);
    for (let key in product) {
        console.log(`  ${key}: ${product[key]}`);
    }       
}