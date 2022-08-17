/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // gas[i]+gas[i+1]-cost[i]
    
    for(let i = 0; i < gas.length ; i++)
        {
            
            // console.log("for index : ",i)
            let starting = i;
            let j = gas[i+1] !== undefined ? i+1 : 0 ;
            let k = i;
            let tank = gas[i];
            if(gas[i] >= cost[i])
                {
                       while(1)
                {
                    
                    
                    // console.log(tank,cost[k],gas[j])
                    tank = tank-cost[k]+gas[j];
                    // console.log(tank)
                    
                    // managment part;
                    
                        if(j < gas.length-1)
                                    j++;
                        else j = 0;
                   
                         if(k < gas.length-1)
                                    k++;
                        else k = 0;
                   
                    if(tank < cost[k]) break;
                    
                    if(j === starting) return j;
                    
                    
                }
                }

         

        }
    return -1;
};
