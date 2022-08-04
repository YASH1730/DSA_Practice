
 var removeDuplicates = function(nums) {
    let temp = nums[0];
   let final = []
    let count = 0;
       nums.map((val,index)=>{
            if (val === temp && index != 0)
                {
                // nothing to do 
                }
               else {
                final.push(val)
                temp = val
                count+=1;   
               }
            
     })  
       for(var i = 0;i<=count-1; i++)
           nums[i] = final[i];
       
       
       console.log(nums)
       return count;
   };