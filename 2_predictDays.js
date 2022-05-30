function predictDays(day,k) {
    //Write your code here
    let goodDays = []
    for (let i = 0; i < day.length; i++) {
        if(i - k >= 0) {
            if(day.length - k - i > 0){
                if(day[i] - day[i + 1] <= 0){
                    goodDays.push(i + 1)
                }
            }
        }
    }
    return goodDays
}

console.log(predictDays([3,2,2,2,3,4], 2));
// predictDays([1,0,1,0,1], 1)   