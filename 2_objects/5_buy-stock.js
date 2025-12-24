let currMin = prices[0]; //atleast buy on day 0
let profit = 0;

for (let i = 1; i < prices.length; i++){
    // can i sell
    // you can sell but check is it better than prev profit
    if(prices[i] > currMin){profit = Math.max(profit,prices[i]-currMin)}
    // can i buy
    if(prices[i] < currMin){currMin =  prices[i] }
}

return profit