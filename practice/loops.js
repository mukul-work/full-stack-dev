// for loop
for(let i = 0; i < 4; i++){
    console.log("for loop");
}

// while loop
let j = 0;
while(j < 4){
    console.log("while loop");
    j++;
}

// do-while
let k = 0;
do{
    console.log("do-while loop");
    k++;
}while(k<4);

// for..in
let arr = [1,2,3,4]
for(let x in arr){
    console.log(x, arr[x]);
}
for(let x in arr){
    console.log(arr[x]);
}

// for..each
arr.forEach(function(num){
    console.log(num);
})

// for..of
let count = 0;
for(const char of "Mukul"){
    if("aeiouAEIOU".includes(char)){
        count++;
    }
    console.log(char);
}
console.log(`Number of vowels: ${count}`);

// practice
const colors = ["Red", "Yellow", "Blue"];
for(const[index, color] of colors.entries()){
    console.log(index,color);
}
//ODD Loops --> no prior knowledge about the number of iterations