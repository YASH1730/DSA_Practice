// Q1. Implement the binary search using class and recursion in JS?

class binary
{
    constructor(){
        console.log("Let's do some searching....");
    }

    binary(arr = [],mid,search){

        // if mid position element is equal to the search 
        if(arr[mid] === search) return this.result = true;
        // if array length exceeded
        if(mid === arr.length || mid === 0) return this.result = false;
        // go for the right side
        if(arr[mid] < search ){
            let rightSide = arr.slice(mid,arr.length);
            return this.binary(rightSide,Math.floor(rightSide.length/2),search);
        }
        // go for the left side
        else{
            let leftSide = arr.slice(0,mid);
            return this.binary(leftSide,Math.floor(leftSide.length/2),search);
        }
    }

    printResult() {
        console.log(this.result)
    }

}

const obj = new binary();
obj.binary([1,35,39,40,70,100],2,100);
obj.printResult();