/**
 * @param {character[][]} board
 * @return {boolean}
 */

 var isValidSudoku = function(board) {
    
     
    let rows ={}   
    let cols ={}
    let sector ={}

    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++){
            let val=board[r][c];
            
            if(val==='.')continue
            
            let grid=`${Math.floor(r/3)}${Math.floor(c/3)}`
            
            if(!rows[r])rows[r]=new Set();
            if(!cols[c])cols[c]=new Set();
            if(!sector[grid])sector[grid]=new Set();
            
            if( rows[r].has(val) || cols[c].has(val) || sector[grid].has(val) ) return false
            
            rows[r].add(val)
            cols[c].add(val) 
            sector[grid].add(val) 
            
        }

    }
    return true;
    
};


//failed approch by hash map pass 473/507 cases too close

var isValidSudoku = function(board) {
    
    let row = 0;
    let myMap = new Map();
    let myMapCol = new Map();
    while(row < 9) {
     
        board.map((val2,col)=>{
       
            // row   
            if(board[row][col] !== '.')
            myMap.set(`${board[row][col]}`,board[row][col]); 
            else
            myMap.set(`${row}${col}`,board[row][col]);  
           
            // col
            if(board[col][row] !== '.')
            myMapCol.set(`${board[col][row]}`,board[col][row]); 
            else
            myMapCol.set(`${col}${row}`,board[col][row]); 
            
        })
        
        if(myMap.size !== 9) return false
        if(myMapCol.size !== 9) return false
        
        myMap.clear();
        myMapCol.clear();
        
        row++;
    }
    
    return true;
    
};
