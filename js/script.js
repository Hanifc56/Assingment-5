function totalAmount(foodcost, rentcost, clothcost) {
    if (foodcost || rentcost || clothcost < 0) {
        return alert('Enter a positive number');
    }
    return foodcost + rentcost + clothcost;


}

function restMoney(totalMoney, totalCost) {
    if (totalMoney < 0) {
        return alert('Enter a positive number');
    }
    return totalMoney - totalCost;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    // total income
    const totalIncome = document.getElementById('total-cost');
    const totalMoney = parseInt(totalIncome.value);
    // total food
    const totalFood = document.getElementById('food-cost');
    const foodMoney = parseInt(totalFood.value);
    // total rent
    const totalRent = document.getElementById('rent-cost');
    const rentMoney = parseInt(totalRent.value);
    // total cloth
    const totalCloth = document.getElementById('cloth-cost');
    const clothMoney = parseInt(totalCloth.value);
    // total Cost
    // const totalCost = foodMoney + rentMoney + clothMoney;
    const totalCost = totalAmount(foodMoney, rentMoney, clothMoney);
    console.log(totalCost);
    // rest Balance 
    // const restBalance = totalMoney - totalCost;
    const restBalance = restMoney(totalMoney, totalCost);
    console.log(restBalance);
    // Update price
    const updatePrice = document.getElementById('total-expence');
    const expance = updatePrice.innerText;
    console.log(expance);


})
