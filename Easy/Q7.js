/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let arr = [];
      nums.map((comp,index)=>{
          if(comp !== val)  
                  arr.push(comp)
      })
      
      arr.map((val,i)=>{
          nums[i] = val;
      })
      
      return arr.length
      
  };
