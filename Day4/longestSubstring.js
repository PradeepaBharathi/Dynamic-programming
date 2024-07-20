function lengthOfLongestSubstring(s) {
    let hashSet = new Set(); 
    let maxLength = 0;
    let start = 0; 

    for (let end = 0; end < s.length; end++) {
        let char = s[end];

        while (hashSet.has(char)) {
            hashSet.delete(s[start]);
            start++;
        }
        hashSet.add(char);

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

