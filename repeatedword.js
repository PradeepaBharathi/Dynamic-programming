function repeatedword(seq,word){
    let dp = new Array(seq.length).fill(0)
    let k =0

    for(let i=0;i<seq.length;i++){
        if(seq.slice(i,i+word.length)== word){
            dp[i]=i

            k = Math.max(k,dp[i])
        }
    }
    return k
}
console.log(repeatedword('ababc','ac'))