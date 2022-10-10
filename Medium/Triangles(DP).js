/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {

   let dp = triangle[triangle.length-1];
  
    for(let i = triangle.length-2 ; i >= 0; i--)
    {
        const row = triangle[i];

        for(let j = 0; j < row.length ; j++)
            {
                    dp[j] = Math.min(dp[j],dp[j+1]) + row[j]
            }
    }
    
    return dp[0]
};

// we are folowing the bottom to top approch to solve this question
