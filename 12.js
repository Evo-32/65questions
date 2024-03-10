function combine(){
    for(let i=0;i<4;i++){
        for(let j=4;j>i;j--){
          Process.stdout.write('1');
        }
            for(let k=1; k<=i; k++){
                Process.stdout.write('0');
        }
        console.log();
    }
}

combine();