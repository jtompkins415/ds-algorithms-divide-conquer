function sortedFrequency(arr, num) {
    let sortedArr = arr.sort()
    let numFreqArr = []
    
    for(let i = 0; i < sortedArr.length; i++){
        if(sortedArr[i] === num){
            numFreqArr.push(sortedArr[i])
        } else if (!sortedArr.includes(num)){
            return -1
        }
    }

    return numFreqArr.length
}

module.exports = sortedFrequency