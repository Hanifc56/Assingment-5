function totalAmount(foodcost, rentcost, clothcost, totalMoney) {
    if (foodcost < 0 || rentcost < 0 || clothcost < 0) {
        return alert('Enter a positive number');
    }
    else if (foodcost + rentcost + clothcost > totalMoney) {
        return alert('Your expense is too much then you total money');
    }
    else {
        return foodcost + rentcost + clothcost;
    }


};

function restMoney(totalMoney, totalCost) {
    if (totalMoney < 0 || totalCost < 0) {
        return alert('Enter a positive number');
    }
    else {
        return totalMoney - totalCost;
    }

};

function updatePrice(totalCost, restBalance) {
    // const costInput = document.getElementById('total-expence');
    // costInput.innerText = totalAmount(totalCost);
    // const balanceInput = document.getElementById('rest-balance');
    // balanceInput.innerText = restMoney(restBalance);
    const costTotal = document.getElementById('total-expence');
    costTotal.innerText = totalCost;
    const restMoney = document.getElementById('rest-balance');
    restMoney.innerText = restBalance;

};


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
    const totalCost = totalAmount(foodMoney, rentMoney, clothMoney, totalMoney);
    // console.log(totalCost);
    // rest Balance 
    // const restBalance = totalMoney - totalCost;
    const restBalance = restMoney(totalMoney, totalCost);
    // console.log(restBalance);
    // Update price
    updatePrice(totalCost, restBalance);
    // const costTotal = document.getElementById('total-expence');
    // costTotal.innerText = totalCost;
    // const restMoney = document.getElementById('rest-balance');
    // restMoney.innerText = restBalance;



})
function saveingCalculation(balancereamaing, totalsaveing) {
    if (totalsaveing > balancereamaing) {
        return alert('your balance is not sufficiant!')
    }
}
document.getElementById('saveings').addEventListener('click', function () {
    const saveings = document.getElementById('total-saveings');
    const saveingAmount = parseInt(saveings.value);
    // console.log(saveingAmount);
    const getMoney = document.getElementById('total-cost');
    // get balance
    const getBalance = document.getElementById('rest-balance');
    const remaining = getBalance.innerText;
    const balanceRemainig = parseInt(remaining);
    // console.log(balanceRemainig);
    const getTotalMoney = getMoney.value;
    const totalSaveing = getTotalMoney * saveingAmount / 100;
    const totalSaveingAmount = document.getElementById('saveing-amount');
    totalSaveingAmount.innerText = totalSaveing;

    // remaining balance
    const balaceAfterSave = balanceRemainig - totalSaveing;
    const remainingBalance = document.getElementById('remaining-amount');
    remainingBalance.innerText = balaceAfterSave;
    saveingCalculation(balanceRemainig, totalSaveing);

})
