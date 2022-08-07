/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  
    let pivot = strs[0].split('');
     
         let result = ''
     for(let j = 0; j < pivot.length; j++){
         let i = 0;
         let flag = 0;
         
         while(i<strs.length)
             {
                 if(pivot[j] !== strs[i][j])
                     {
                         flag = 1;
                         break;
                     }
                 i++;
             }
         if (flag === 0)  result += pivot[j]; 
         else  break;
     }
     
     return result;
   
 };