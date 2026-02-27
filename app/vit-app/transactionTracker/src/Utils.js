export function sum(transaction){
    return transaction.reduce((obj, current) => {
        if(current.type === "income"){
            obj.income += current.amount;
        }
        else{
            obj.expense += current.amount;
        }
        return obj;
    }, {income: 0, expense: 0});
}