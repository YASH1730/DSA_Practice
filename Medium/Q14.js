/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    nums.sort((a,b)=> {return a-b} );
    
    let closest = Infinity;
    
     for(let i = 0; i < nums.length ; i++)
        {
            let left = i+1;
            let right = nums.length-1; 
            
            while(left<right)
                {
                    const sum = nums[left]+nums[right]+ nums[i];
                    
                    if (sum === target) return sum;
                    
                    if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
                    
                    else if(sum < target) left++;
                    else if(sum > target) right--;
                    
                }
        }
    return closest
};
