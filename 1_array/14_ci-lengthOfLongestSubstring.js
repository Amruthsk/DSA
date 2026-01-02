var lengthOfLongestSubstring = function (s) {
    let maxLen =0;
    let left =0;
    let seen = new Map();

    for(let right=0; right < s.length;right++){
        //slide
        let char = s[right];

        //jump of left
        if(seen.has(char) && seen.get(char) >= left){
            left = seen.get(char) + 1;
        }


        seen.set(char, right);
        //slide

        maxLen = Math.max(maxLen, right -left + 1);
    }


    return maxLen;


};