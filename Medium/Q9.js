/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let result = [];

    result.push(nums.indexOf(target));
    
    let j = nums.length;
    
    while(j >= 0)
        {
            if(target === nums[j]) 
                {
                    result.push(j);
                    return result
                }
            j--;
        }
    result = [-1,-1];
    return result;
};
