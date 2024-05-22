function orderSandwich(...items: string[]) {
    console.log("You have ordered a sandwich with:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
}

orderSandwich("Turkey");
orderSandwich("Ham", "Cheese");
orderSandwich("Roast Beef", "Lettuce", "Tomato", "Mayonnaise");
