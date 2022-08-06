/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let srtlen = [];
    let substr = '' ;
    s = s.split('');
   
   if (s.length === 0) return 0;
   if (s.length === 1) return 1;
   
   
   s.map((char,index)=>{
           substr = char;
           for(let i = index+1; i < s.length ;i++)
           {
              
       if (substr.includes(s[i])!== true && i === s.length-1)
            {
               console.log("in ",s[i])
                      substr += s[i];
                      srtlen.push(substr.length);
            }   
                
               
          else if(substr.includes(s[i]) !== true)
                      substr += s[i];
               else{
                      srtlen.push(substr.length);
                      break;
               }
           }
   })
   
   return Math.max(...srtlen);
};