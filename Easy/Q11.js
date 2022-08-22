var merge = function(nums1, m, nums2, n) {
   nums1.length = m
   nums1.push(...nums2)
   nums1.sort((a,b)=> {return a-b})
};
