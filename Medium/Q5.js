// https://leetcode.com/problems/3sum
// 1SUM problem

var threeSum = function(nums = [-1,0,1,2,-1,-4]) {
    let finalArr = [];
    nums = nums.sort(function(a, b){return a - b});
    
    for(let i = 0; i < nums.length-2 ; i++)
        {
            let j = i+1;
            let k = nums.length-1;
            
            while(j<k)
                {
                    if((nums[j]+nums[k]) > -(nums[i]))
                        k--;
                    else if ((nums[j]+nums[k]) < -(nums[i]))
                        j++
                    else
                        {
                            finalArr.push([nums[i],nums[j],nums[k]])
                            // skipping the extra itration
                             while (nums[i] === nums[i + 1]) i++;
                             while (nums[j] === nums[j + 1]) j++;
                             while (nums[k] === nums[k - 1]) k--;
                            j++; k--;
                        }
                }
        }
    return finalArr
    
};
