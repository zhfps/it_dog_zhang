const digitCounts = function (k, n) {
    // write your code here

    if(k>n){
        return 0
    }else if(k==n ||n<9){
        return 1
    }else{
        let num = 0
        let K = (k).toString()
        let sum = k
        while(sum<=n){
            let str =(sum).toString()
            let count = (str.split(K)).length -1
            console.log(count)
            num+=count
            sum++
        }
        return num
    }
}
console.log(digitCounts(1,10))
