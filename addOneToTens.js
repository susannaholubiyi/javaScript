function addOneTo(arr){
    if (arr[arr.length - 1] < 9) {arr[arr.length - 1] = arr[arr.length - 1]+ 1;}
    
   
        for(index = arr.length - 1; index >= 0; index--){
            if(arr[index]== 9)  {
                arr[index] = 0;
                arr[index --] = arr[index --]+ 1;
             }
        }
        
    
    return arr;

}
module.exports = {addOneTo}