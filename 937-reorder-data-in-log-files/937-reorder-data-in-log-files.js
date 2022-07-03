/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    //declare empty letter array
    //declare empty digit array 
    //for each entry in logs 
        // if last character in the entry is NOT a number, 
            //push the whole entry to letters array
        // otherwise it's a letter and we should...
            //push the whole entry to the digits array
    //EXIT LOOP
    //sort letter array in alphabetical order using sort and localeCompare 
    //return array concatenated together with sorted letter array and digits array
    
    let letter = [];
    let digit = [];
    for (let log of logs) {
        if (isNaN(log[log.length - 1])){
            letter.push(log)
        }
        else digit.push(log)
    }
    
    letter.sort(function (a, b) {
        // const one = a.split(" ")[1]; //['let1', 'art', 'can'] => ['art']
        // const two = b.split(" ")[1]; //['let3', 'art', 'zero'] => ['art']
        // const three = a.split(" ")[2]; //['let1', 'art', 'can'] => ['can']
        // const four = b.split(" ")[2]; //['let3', 'art', 'zero'] => ['zero']
        // // return one.localeCompare(two) || three.localeCompare(four); // ["let1 art can","let3 art zero","let2 own kit dig"]
        // if (one.localeCompare(two === 0 && three.localeCompare(four)) === 0) {
        //    return a.split(" ")[0].localeCompare(b.split(" ")[0])
        // } else {
        //     return one.localeCompare(two) || three.localeCompare(four)
        // }    
            stra = a.substr(a.indexOf(' ') + 1);
            strb = b.substr(b.indexOf(" ") + 1);
            
            if (stra == strb) {
                return a.localeCompare(b) 
            }
            return stra.localeCompare(strb)
    })
    return letter.concat(digit); //["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
};