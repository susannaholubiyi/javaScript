const studentScores =[95, 78, 85, 60, 45, 92]
function convertToGradesFrom(studentScore){
  
        return studentScore.map((num) => {
            if (num >= 90 )return "A";
            else if (num >= 80) return "B";
            else if (num >= 70) return "C";
            else if (num >= 60) return "D";
            else return "F";
        } )  
        
    }
      

console.log(convertToGradesFrom(studentScores));