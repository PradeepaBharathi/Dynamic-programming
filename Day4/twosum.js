function twoSum(arr,target){
let hash={}
    for(let i=0;i<arr.length;i++){
       let value = target - arr[i]

       if(hash[value] !== undefined){
        return [hash[value],i]
       }
       hash[arr[i]] = i
    }
    return []
}

console.log(twoSum([3,2,3],6))