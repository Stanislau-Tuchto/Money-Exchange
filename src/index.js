module.exports = function makeExchange(currency) {
    let obj={},H,Q,D,N;
    if(currency <= 10000 && currency > 0){
        obj.H = div(currency, 50);
        H = currency%50;
        obj.Q = div(H, 25);
        Q = H%25;
        obj.D = div(Q, 10);
        D = Q%10;
        obj.N = div(D, 5);
        N = D%5;
        obj.P = div(N, 1);
        console.log(currency);
        console.log(obj);
        for(var key in obj) {
            if (obj[key] === 0) {
                delete obj[key];
            }
        }
        console.log(obj);
        return obj;
    }else if(currency <= 0){
        return obj;
    } else
        return {error:"You are rich, my friend! We don't have so much coins for exchange"};
}
function div(val, by){
    return (val - val % by) / by;
}

