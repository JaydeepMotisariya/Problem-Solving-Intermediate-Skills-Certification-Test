'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'renameFile' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING newName
 *  2. STRING oldName
 */

function calucatematches(index, matches, newName, oldName) {
        var nextarr = []
        for(var j =0;j < matches.length;j++){
            if(matches[j]["key"] < index && matches[j]["val"] === oldName){
                nextarr.push({
                    key: index,
                    val: oldName + newName
                })
            }
        }
        return nextarr
    }
    
    
function renameFile(newName, oldName) {
    const count = (matched, index) => (match, string) => {
        var oldMatch = matched
        var newMatch = []
        
        if(index === match.length) {
            return matched.length
        }
        for(var i =0;i < string.length;i++){
            if((match[index] === string[i]) && index === 0) {
                newMatch.push({
                    key: i,
                    val: string[i]
                })
            }
            if((match[index] === string[i]) && index > 0) {
                var res = match.slice(0,index)
                newMatch.push(...calucatematches(i, oldMatch, match[index], res)) 
            }
        }
        index = index + 1
        return count(newMatch,index) (match, string)
    }
    var M = 1000000007;
    return ( count([], 0) (newName, oldName) ) % M
    }
    

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const newName = readLine();

    const oldName = readLine();

    const result = renameFile(newName, oldName);

    ws.write(result + '\n');

    ws.end();
}
