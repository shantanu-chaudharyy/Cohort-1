function vote(age){

    if(age<18) {
        console.log("you are not eligible");
    }else{
        console.log("you can vote");
    }
}

let age1=11;
let age2=89;
vote(age1);
vote(age2);