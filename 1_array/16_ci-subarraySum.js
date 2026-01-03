var subarraySum = function(nums, k) {

    let map = new Map;
    map.set(0,1);

    let sum =0;
    let count = 0;

    for(let num of nums){
        sum += num;

        let delta = sum -k;
        if(map.has(delta)){
            count += map.get(delta);
        }

        map.set(sum,(map.get(sum)|| 0) + 1 );

    }



    return count;
    
};