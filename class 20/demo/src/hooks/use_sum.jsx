
export default function useSum(...num){

    let sum = num.reduce(function(total,current){
        return total+current
    })

    return sum;


}