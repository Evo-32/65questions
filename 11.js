function one(row,col){
    for(let i=0;i<4;i++){
        let order = ''
        for(let j=4;j>i;j--){
            order += "1" ;
        }
        console.log(order);
    }
}
    
one();