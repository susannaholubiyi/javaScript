function getModeFrom(input){
    let highestOccurence = 0;
    let output = []
    let mode = input[0]
    for(index = 0; index< input.length; index++){
        let occurence = 0;
        for(count = 0; count< input.length; count++){
            if(input[index] == input[count]){
                occurence ++               
            }
            
        }
        if(occurence > highestOccurence){
            highestOccurence = occurence
            mode = input[index]
        }
        
    }
    output.push (mode)
    return output

}
module.exports = {getModeFrom}