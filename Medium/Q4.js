/**
 * @param {number[]} height
 * @return {number}
 
 Container With Most Water
 https://leetcode.com/problems/container-with-most-water/
 */
var maxArea = function(height) {
    
    let max = 0;
    let left = 0;
    let right = (height.length)-1;
    
    while(1)
        {
            
            let check  = Math.abs(left-right) * Math.min(height[left],height[right])
            
            if (max<check) max = check;
            
            if(height[left] >= height[right])
                    right--;
            else if(height[left] < height[right])
                    left++;
            
            if (left === right) break;
        }
    
    return max;
    
};

