// function expression --> doesn't allow hoisting

const factorial = function(n)
{
    if(n==1 || n==0){
        return 1;
    }
    else
    {
        return n * factorial(n-1);
    }
}

console.log(factorial);
console.log(factorial(3));

// normal functions --> allows hoisting

function add(a, b){
    return a + b;
}


// practice

const addition = function(n)
{
    if(n==10)
    {
        return 10;
    }
    else
    {
        return n + addition(n+1);
    }
}

console.log(addition(8));
