function calculateTripBudget() {
    let totalBudget = prompt ("Jumla ya Bajeti ya Safari (KES)?");
    let numberOfStudents = prompt("Idadi ya Wanafunzi?");
    let busHire = 5000;
    let lunchPerStudent = 250;
    let activityFeePerStudent = 150;
    let costPerStudent = lunchPerStudent + activityFeePerStudent;
    let totalStudentCost = costPerStudent * numberOfStudents;
    let totalTripCost = busHire + totalStudentCost;
    let remainingBudget = totalBudget - totalTripCost;
    console.log("School Trip Budget Summary:");
    console.log("Total Budget: KES", totalBudget);
    console.log("Number of Students:", numberOfStudents);
    console.log("===");
    console.log("Bus Hire Cost: KES", busHire);
    console.log("Cost per Student (Lunch + Activity): KES", costPerStudent);
    console.log("Total Student Costs: KES", totalStudentCost);
    console.log("===");
    console.log("Total Trip Cost: KES", totalTripCost);
    console.log("Remaining Budget: KES", remainingBudget);
    console.log("Safari Njema!");
}