function solution(str) {
    const strArray = str.length % 2 == 0 ? str.split('') : str + "_".split('');
    let res = [];
    for (let i = 0; i <= strArray.length - 1; i = i + 2) {
        res.push(strArray[i] + strArray[i + 1]);
    }
    console.log(res);
    return res;
}