function totalCalculation() {

}
document.getElementById('calculate-btn').addEventListener('click', function () {
    // total income
    const incomeTotal = document.getElementById('total-income');
    const incomeAmount = parseInt(incomeTotal.value);
    // console.log(incomeAmount);
    // food cost
    const foodCost = document.getElementById('food-cost');
    const foodCostTotal = parseInt(foodCost.value);
    // rent cost
    const rentCost = document.getElementById('rent-cost');
    const rentCostTotal = parseInt(rentCost.value);
    // clothes cost
    const clothCost = document.getElementById('cloth-cost');
    const clothCostTotal = parseInt(clothCost.value);
    // total cost
    const totalCost = foodCostTotal + rentCostTotal + clothCostTotal;
    // rest balance
    const restBalance = incomeAmount - totalCost;

    console.log(restBalance);


})

