/**
 * @param {string} s
 * @return {string}
 */

 const checkPalindrom =  (s) => {
    let flag = 0;
        for (let i = 0 ; i < s.length ; i++)
            {   
                if ((s.length-1)-i < i) break;
                
                else if(s[i] !== s[(s.length-1)-i]) flag = 1;
                
            }
        
        if (flag === 0) return true;
        else return false;
    }
    
    var longestPalindrome = function(s) {
        
        let substr = []
        let result,max = 0;
        for (let left = 0; left < s.length ; left++ )
            {
                if ((s.length-1)-left < left) break;
                
                else if(s[left] === s[(s.length-1)-left])
                    {
                        if(checkPalindrom(s.substring(left,(s.length)-left)))
                            {
                                substr.push(s.substring(left,(s.length)-left));
                            }
                    }
            }
       substr.map((val,index)=>{
           if(max<val.length)
               {
                  result = index;
                  max = val.length;
               }
       })
        
        return substr[result];
        
    };