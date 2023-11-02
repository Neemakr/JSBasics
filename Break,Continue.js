//Break:
for(let i=0; i<10;i++){
    if(i === 5)
        break;
    console.log(i);
}

//Break with Nested loop
for(let x = 1; x <= 10; x++){
    for(let y = 1; y <= 2; y++){
        if(x == 3)
        break;
        console.log("X=", x, "Y=",y);
    }
}

//Continue:
for(let j=0;j<10;j++){
    if(j === 5)
        continue;
    console.log(j);
}

//Continue with continue
for(let a = 1; a <= 5; a++){
    for(let b = 1; b <= 5; b++){
        if(a == 3)
        continue;
        console.log("A=", a, "B=", b);
    }
}