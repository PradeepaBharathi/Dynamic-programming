function groupAnagram(str){
let hash ={}

str.forEach(str => {
    let sort = str.split("").sort().join("")

    if(!hash[sort]){
        hash[sort] = []
    }
    hash[sort].push(str)
    
});
return Object.values(hash)
}
console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))