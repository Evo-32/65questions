let display=()=>{
    for(i = 0; i < 5; i++){
        let out = "";
        for(j = 0; j < 5; j++){
            if((i == 0 || i == 4) || (j == 0 || j == 4)){
                out += "1"
            }else{
                out += "0"
            }
        }
        console.log(out);
        out = "";
    }};
    display();