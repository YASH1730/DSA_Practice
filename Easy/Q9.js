/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let left = 0;
    
    while(1)
        {
           if(haystack.substr(left,needle.length) === needle)
               {
                   return left;
               }
            left++;
            
            if (left>haystack.length) break;
        }
    return -1;
    
};
