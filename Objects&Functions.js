const obj = {name : "Dennis"};
console.log(obj.name);

obj.name = "ritchie";
console.log(obj.name);

const sales = "Toyota";
function Types(name){
    return (name === "Honda")? name : "Sorry";
}

const car = {myCar : "Saturn", getCar : Types("Maruti"), special : sales};
console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);