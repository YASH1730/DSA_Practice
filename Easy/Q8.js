/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
  
    let map1 = {}
    let map2 = {}
    
    let charecters = 'abcdefghijklmnopqrstuvwxyz';
    
    // for mapping all the char at 0 frequency
    for (let char of charecters) {
        map1[char] = 0;
        map2[char] = 0;
    }
    
    for (let char of word1) {
        map1[char]++
    }
    
    for (let char of word2) {
        map2[char]++;
    }
    
    // comparing the map freq
    for (let char in map1) {
        if (Math.abs(map1[char] - map2[char]) > 3) return false; 
    }
    
    return true
  
};
