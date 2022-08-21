/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let frequency = {}
    let half = parseInt(arr.length/2);
    let removeUntil = 0,result = 0;
    
    // taking out the occurence of all the elements
    arr.map((val,index)=>{
        if(!frequency[val]) frequency[val] = 1;
        else frequency[val] += 1;
    })
    
    // fetching the calues
     frequency = Object.values(frequency);
        
     // sort value in descending orden 
     frequency.sort((a,b) => b-a);
    
    // finally remove the element and count the var
    while(removeUntil < half) {
        removeUntil += frequency[result];
        result++;
    }
    
        
    return result;
};
