function average(arr){
    let sum = arr.reduce((sum,num) =>sum+num ,0);
    let average =sum/arr.length;
    return average;
}
 let arr = [8,49,43,51,36];
 console.log(avarage(arr));