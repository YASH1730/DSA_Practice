/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
   
    let obj = {}
    let ans = [];
    
    nums.map((val,index)=>{
        if(!obj[val]) obj[val] = 1;
        else obj[val] = obj[val] + 1;
    })
    
    Object.keys(obj).forEach(function(key) {
      if (obj[key] == 1) ans.push(key) 
    });
       
        return ans;
};

//XOR Approch

let singleNumber =  (nums)=>{
let result = 0;
nums.map((val,index)=>{
   result ^= val;
})

return result;
}
