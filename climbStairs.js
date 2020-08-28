/*
Problem Statement :

There's a staircase with N steps, and you can climb 1 or 2 steps at a time. Given N,
write a function that returns the number of unique ways you can climb the staircase.
The order of the steps matters.
For example, if N is 4, then there are 5 unique ways:
1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any
number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb
1, 3, or 5 steps at a time. Generalize your function to take in X.
*/


function main(totalSteps, array) {
    array = array ? array : [1, 2];
    // If there is no second arguement to the main function then it will be considered as the person can climb 1,2 steps.

    function numberOfWays(totalSteps) {
        if (totalSteps <= 0)
            return 0;
        else {
            let result = 0;
            array.forEach(eachStep => {
                if (eachStep !== totalSteps && eachStep < totalSteps)
                    result += numberOfWays(totalSteps - eachStep)
            })
            if (array.includes(totalSteps)) {
                return result += 1;
            }
            return result;
        }
    }

    let answer = numberOfWays(totalSteps)
    console.log(answer)
}

main(totalSteps, array)

/*
totalSteps -> Number of steps 
array -> Array of steps

Time Complexity: O(X^n)
    Here 'X' is the array of steps that can a man climb  and 'n' the total number of steps.
Space Complexity: O(1)
*/