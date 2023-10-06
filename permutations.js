//coding interview question #1

//return all possible permutations of an array 
//what are permutations : a number of ways a set can be arranged 

//Cases to think about ?
//When array is empty 


// const array = [1,2,3] 

//we are turning this set into different arranges 
//example :
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function permutate(arr){
//Base Case: if the array is empty, return an empty array with an empty permutation 
if (arr.length === 0) {
    return [[]];
}
//create a variable to that contains an empty array to store all the permutations 
const permutations = []; 

//Iterate over each element in the array using a for loop 
for (let i = 0; i < arr.length; i++){
    //create a copy of the array without the current element 
    const remaining = arr.slice(0,i).concat(arr.slice(i+1));

    //recursively generate permutations of the remaining elements 
    const subPermutations = permutate(remaining); 

    //Add the current element to the start of each sub-permutation
    for(let j = 0; j <subPermutations.length; j++){
        permutations.push([arr[i], ...subPermutations[j]]);
         }
    }

    return permutations;
}

const array = [1,2,3];
const result = permutate(array); 
console.log(result);