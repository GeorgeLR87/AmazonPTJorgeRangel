function getServedBuildings(buildingCount, routerLocation, routerRange) {

    let range = []
    let cleanrange = []    
    let count = {}
    let integer = 0

    for (let i = 0; i < routerLocation.length; i++){
        for (let j = 0; j < routerRange.length; j++) {
            if (i === j ) {
                range.push(routerLocation[j] - routerRange[j], routerLocation[j], routerLocation[j] + routerRange[j])
            }
        }
    }   
    
    for (let i = 0; i < range.length; i++) {
        if(range[i] > 0) {
            cleanrange.push(range[i])
        }
    }    
    
    cleanrange.forEach(function(num){
        count[num - 1] = (count[num -1] || 0) + 1
    })

    for (let i = 0; i < buildingCount.length; i++) {
        for (const j in count) {
            if( j == i && buildingCount[i] - count[i]  >= 0 ) {
            integer = integer + 1
            }
        }
    }  
    return integer       
}

console.log(getServedBuildings([1,2,1,2,2], [3,1], [1,2]));