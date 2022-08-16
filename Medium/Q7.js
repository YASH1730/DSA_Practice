/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target){
  
    let left = 0;
    let right =  nums.length-1 ;
     
    while(left<=right)
        {
            if(nums[left] === target)
                return left;
            else if(nums[right] === target)
                return right;
            
            left++;
            right--;
                
        }
    return -1;
  
}

// Binary Search method number 2 but i fail to impliment it 
var BinarySearch = (nums, target) => {
   let mid = parseInt(nums.length/2);
    
    console.log(mid,' :: ',nums[mid]);
    
    if(nums[mid] === target)
        return mid;
    
    if (mid === 0) return -1;
    
    else if(nums[mid] < target)
       return search(nums.slice(0,mid),target);
    
    else if(nums[mid] > target)
       return search(nums.slice(mid,nums.length),target);
    
   
};

