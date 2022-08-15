
var nextPermutation = function(nums) {
  
  let left = nums.length - 2;
  let right = nums.length - 1;
  
  while (left >= 0 && nums[left] >= nums[left + 1]) left--;
  
  if (left >= 0) {
    while (right > left && nums[right] <= nums[left]) right--;
    swap(nums, left, right);
    reverse(nums, left + 1, nums.length-1);
  } else {
    reverse(nums, 0, nums.length-1);
  }
};

var swap = function (arr, from, to) {
  arr[from] += arr[to] ;
  arr[to] = arr[from] - arr[to];
  arr[from] = arr[from] - arr[to];
};

var reverse = function (arr, start, end) {
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
};

//my approch

// var nextPermutation = function(nums) {
  
//     let left = 1 ;
//     let right = nums.length -1;
//     let flag = 1;
//     while(1)
//         {
//                 if(nums[left] < nums[left+1])
//                     {
//                         if (nums[right] > nums[left])
//                             {
//                                 swap(nums,left,right)
//                                 reverse(nums,left+1,nums.length -1)
//                                 break;
//                             }
//                         else{
//                             right--;
//                         }
                        
//                     }
//             else 
//                 left++;
            
            
//             if (left>right) left = 0;
            
            
            
//         }
// };
