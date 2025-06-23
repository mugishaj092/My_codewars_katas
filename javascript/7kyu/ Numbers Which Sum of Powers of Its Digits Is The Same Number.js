function eqSumPowdig(hMax, exp) {
    let result = []

    for (let i = 2; i <= hMax; i++) {
        let sum = 0
        let number = String(i).split("").map((item) => {
            return Math.pow(Number(item), exp)
        });
        number.map((item) => {
            sum += item;
        })
        if (sum === i) {
            result.push(i)
        }
    }
    return result;
}