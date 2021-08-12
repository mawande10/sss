function buyMinutes(minutes){
    if (!minutes) {
        return 'Please insert correct amount';
    }

    let price = 1.85;
    
    // if the minutes is a multiple of 11 the price should be 0.95
    if (minutes % 11 ===0) {
        price = 0.95
    } else if (minutes > 50) {
        price = 1.35
    }

    const result = minutes * price;
    return result.toFixed(2);
        

}