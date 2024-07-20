function frequent(nums,k){
let hash={}
let values=[]
nums.forEach(e => {
    hash[e] ? hash[e]++ :hash[e]=1
});

let freqArr = Object.entries(hash).sort((a,b)=> b[1]-a[1])

for(let i=0;i<k;i++){
    values.push(freqArr[i][0])
}
return values.map(Number);

}
console.log(frequent([1,1,1,2,2,3],2))