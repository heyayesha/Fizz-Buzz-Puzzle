// function for the puzzle

function FizzBuzz(n){
    for (let i = 0; i<= n; i++ ){
        if (i % 3 == 0 && i % 5 == 0 && i != 0){
            console.log('Fizz Buzz'); // it will buzz if the condition works
        }
        else if (i % 5 == 0 && i != 0){
            console.log('Buzz');
        }
        else if (i % 3 == 0 && i != 0){
            console.log('Fizz');
        }
        else {
            console.log(i); // otherwise return to the main
        }
    }
    
}

var n = 10 // suppose the we have 10 

FizzBuzz(n);
