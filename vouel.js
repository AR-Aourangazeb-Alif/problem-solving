// count the vouels in a string

function countVouels(str){
    const vouels = [`a`,`e`,`i`,`o`,`u`];
    let countVouels = 0;

    if(typeof str === `string`){
        for(const i of str.toLowerCase().trim().split(``)){
            if(vouels.includes(i)){
                countVouels++;
            }
        }

        if(countVouels === 0){
            console.log(`There is no vouels in this string`);
        }else{
            console.log(`There are ${countVouels} vouels in this string`);
        }
        
    }else{
        console.log(`PLEASE GIVE A VALID STRING`);
    }
}

countVouels("54654");
countVouels(`ABCDEVJ`)