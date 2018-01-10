function formatCount(count, withAbbr = false, decimals = 2, withNum = true) {
    const COUNT_ABBRS = 
    ["",
    "K",
    "Million",
    "Billion",
    "Trillion",
    "Quadrillion",
    "Quintillion",
    "Sextillion",
    "Septillion",
    "Octillion",
    "Nonillion",
    "Decillion",
    "Undecillion",
    "Duodecillion",
    "Tredecillion",
    "Quattuordecillion",
    "Quindecillion",
    "Sexdecillion",
    "Septdecillion",
    "Octdecillion",
    "Novemdecillion",
    "Vigintillion",
    "Unvigintillion",
    "Duovigintillion",
    "Trevigintillion",
    "Quattuovigintillion",
    "Quinvigintillion",
    "Sesvigintillion",
    "Septemvigintillion",
    "Octovigintillion",
    "Novemvigintillion",
    "Trigintillion",
    "Untrigintillion",
    "Duotrigintillion",
    "Trestrigintillion",
    "Quattuortrigintillion",
    "Quintrigintillion",
    "Sestrigintillion",
    "Septentrigintillion",
    "Octotrigintillion",
    "Noventrigintillion",
    "Quadragintillion",
    "Unquadragintillion",
    "Duoquadragintillion",
    "Tresquadragintillion",
    "Quattuorquadragintillion",
    "Quinquadragontillion",
    "Sesquadragontillion",
    "Septenquadragintilion",
    "Octoquadragintillion",
    "Novenquadragintillion"];
    const i     = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
    let result  = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
    if(withAbbr) {
        if(COUNT_ABBRS[i] === undefined){
            result = "infinity";
        }else{
            if(count == Math.pow(10,100)){
            result = " " + "Googol";
            withNum = false;
            }
            if (withNum) {
            result += " " + `${COUNT_ABBRS[i]}`; 
            }else{
                result = `${COUNT_ABBRS[i]}`;
            }
        }
    }
    return result;
}
function summation(start, end, step, func) {
    var sum = 0, i;
    for (i = start; i < end; i += step) {
        sum += func(i);
    }
    return sum;
}