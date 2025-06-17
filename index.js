function calculateFruitCost (){
    let numberOfFruits = prompt("Hi unataka matunda ngapi")
    let baseCost = numberOfFruits * 20 
    console.log ("Malipo yako kwa sasa ni " + baseCost)
    let discountRate = 0.10; 
    if (numberOfFruits > 5) {
        let discountAmount = baseCost * 0.10
    console.log ("discountrate " + discountAmount)
    console.log ("So now you will pay " , baseCost - discountAmount)
    }
}