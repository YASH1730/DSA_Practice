/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let temp = x;
    let compare = 0 ;
    while(temp > 0)
        {
            compare = (compare + parseInt(temp%10)) * 10 ;
            temp = parseInt(temp/10)
        }
    
    if(compare/10 === x) return true;
    else return false;
    
};