let input = [2, 6, 8]
let factors = []
for(index = 0; index < input.length; index++){
    for(count = 1; count < input[index].length; count++){
        if(input[index] / count == 0 )
        factors.push(count) ;
        
    }
}
console.log(factors)