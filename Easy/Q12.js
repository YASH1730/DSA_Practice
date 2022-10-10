/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rowCollector = [];
    let i = 0;
    
    if (numRows===0) return rowCollector;
    
    while(1)
        {
    let row = [];
            
            // this loop is for row construction 
            for(let j = 0; j <= i; j++ )
                {
                    if(j === 0 || j === i) row.push(1);
                   
                    else{
                        
                        let testRow = rowCollector[i-1];
                        
                        for(let k = 0; k < testRow.length ; k++)
                            {
                                if(row.length < i)
                                    {
                                   if(testRow[k+1] !== undefined)
                                    row.push(testRow[k]+testRow[k+1]);         
                                    }
                                                               
                            }
                        
                    }
                    
                }
            
            rowCollector.push(row);
            i++;
            if (i > numRows-1) break;
            
        }
    
    return rowCollector
};
