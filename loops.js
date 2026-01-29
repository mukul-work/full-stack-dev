for(let i = 0; i < 4; i++){
    console.log("for loop");
}

let j = 0;
while(j < 4){
    console.log("while loop");
    j++;
}

let k = 0;
do{
    console.log("do-while loop");
    k++;
}while(k<4);

let arr = [1,2,3,4]
for(let x in arr){
    console.log(arr[x]);
}

arr.forEach(function(num){
    console.log(num);
})

//ODD Loops --> no prior knowledge about the number of iterations