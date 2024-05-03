function sum(...nums){
    let result = nums.reduce(function(total,current){
        return total+current;
    })

    return result;
    
};

module.exports = sum;