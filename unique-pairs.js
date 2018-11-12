//input is an array of integers and a sum that the pairs must add up to
//out is an integer, then number of unique pairs that add the given sum

const uniquePairs = (arr, k) => {
    sumPairs = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === k && i !== j) {
                let pair = [ arr[i], arr[j] ];
                sumPairs.push(pair);
            }
        }
    }
    let sortedPairs = sumPairs.map(pair => pair.sort((a, b) => a - b));
    let answerArr = []; 
    for(let l = 0; l < sortedPairs.length; l++) {
        let dupCount = 0;
        for(let k = 1; k < answerArr.length; k++){
            if(sortedPairs[l][0] === answerArr[k][0] && sortedPairs[l][1] === answerArr[k][1]) {
                dupCount++;
            }
        }
        if(dupCount === 0){
            answerArr.push(sortedPairs[l])
        }
    }
    return answerArr;
}

const testArray = [ 1, 0, 9, 4, 6, 5, 7 ];

console.log(uniquePairs(testArray, 10));