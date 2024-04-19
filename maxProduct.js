function bubbleSort(numbers){
    for(index = 0; index < numbers.length; index++){
        for(index2 = index + 1; index2 < numbers.length; index2++){
            if(numbers[index] > numbers[index2]){
                let descending = numbers[index];
                numbers[index] = numbers[index2];
                numbers[index2] = descending;
            }
        }
    }
    return numbers;
}


function getMaximumProduct(numbers){
    let sortedArray = bubbleSort(numbers);
    let productOfFirstTwo = sortedArray[0] * sortedArray[1];
    let productOfLastTwo = sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2];
    if (productOfFirstTwo > productOfLastTwo) return productOfFirstTwo;
    else return productOfLastTwo;

}
module.exports ={getMaximumProduct};