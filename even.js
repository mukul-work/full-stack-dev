// script to print even elements of an array

let arr = [1,2,3,123,413,13123124,41,3,45,6,2,4,234,4234,5,6];

for(let ele in arr){
    if(arr[ele]%2 === 0){
        console.log(arr[ele]);
    }
}