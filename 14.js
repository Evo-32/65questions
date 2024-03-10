function displayone(){
    for(let i=0;i<4;i++){
        let out="";
        for(let j=0;j<4;j++){
            if(j+i===3){
                out+="1";
            }
            else{
                out=" ";
            }
        }
    }
}
    displayone();