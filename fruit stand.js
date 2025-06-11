function calculateFruitCost(numberOfFruits) {
    let pricePerFruit = 20;
    let discountRate = 0.10;

    const baseCost = numberOfFruits * pricePerFruit;

    let discountAmount = 0;
    let finalCost = baseCost;

    if (numberOfFruits >= 5) {
        discountAmount = baseCost * discountRate;
        finalCost = baseCost - discountAmount;
    }

    // Print results
    console.log("Matunda Yako:");
    console.log("Number of Fruits:", numberOfFruits);
    console.log("Base Cost: KES", baseCost);

    if (discountAmount > 0) {
        console.log("Discount Applied (10%): KES", discountAmount);
    }

    console.log("Total Price: KES", finalCost);
      let userInput = prompt("Matunda ngapi unataka kununua?:");
      
if (!isNaN(number) && number > 0) {
    calculateFruitCost(number);
} else {
    console.log("Tafadhali ingiza nambari sahihi ya matunda.");
}
}