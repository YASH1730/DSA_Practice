/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
    let g = 0,c = 0;
    for(let i = 0; i<gas.length;i++ )
        {
            g+=gas[i];
            c+=cost[i];
        }
    
    if(g < c) return -1;
    
    let begin = 0,tank = 0;
    
    for(let i = 0; i < gas.length; i++)
        {
            tank += gas[i]-cost[i];
            if(tank < 0)
                {
                    begin = i+1;
                    tank = 0;
                }
        
        }
  return begin; 

};

// this problem is easy 
