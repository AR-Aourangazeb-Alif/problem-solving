function reverseString(str){
    let reversedStr = ``;
    for(const i of str.split(``)){
        reversedStr = i+reversedStr;
    }
    console.log(reversedStr);
}

reverseString(`Alif`)