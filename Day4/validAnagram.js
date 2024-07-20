function validanagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let hash1={}
    let hash2={}
    
    let str1 = s.split("")
    str1.forEach(e => {
        hash1[e] ? hash1[e]++ :hash1[e] =1
    });

    let str2 = t.split("")
    str2.forEach(e => {
        hash2[e] ? hash2[e]++ :hash2[e] =1
    });
 for(let key in hash1){
    if(hash1[key] !== hash2[key]){
        return false
    }

 }
 return true
};
console.log(validanagram("rat","car"))
