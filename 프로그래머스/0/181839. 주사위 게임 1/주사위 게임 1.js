function solution(a, b) {
    var answer = 0;
    let pow = a*a;
    let pow2 = b*b
    if (a%2==1 && b%2==1){
        return (pow+pow2);
    }else if (a%2==1 && b%2!=1){
        return 2*(a+b);
    }else if (a%2!=1 && b%2==1){
        return 2*(a+b);
    }else{
        return Math.abs(a-b);
    }
}

// if문으로 ab의 조건식