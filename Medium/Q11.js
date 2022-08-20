
var singleNumber = function(nums) {
   
    let obj = {}
    let ans = 1;
    
    nums.map((val,index)=>{
        if(!obj[val]) obj[val] = 1;
        else obj[val] = obj[val] + 1;
    })
    
    Object.keys(obj).forEach(function(key) {
      if (obj[key] == 1)  return ans = key; });
       
        return ans;
};
