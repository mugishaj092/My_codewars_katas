function maskify(cc) {
    let result = ""
    cc.split("").map((item, index) => {
        if (cc.length - 4 > index) result += "#"
        else result += item
    })
    return result
}