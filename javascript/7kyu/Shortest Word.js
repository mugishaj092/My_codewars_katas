function findShort(s) {
    let result = s.split(" ").reduce((acc, curr) => {
        if (acc.length > curr.length) {
            acc = curr
        }
        return acc
    })
    return result.length
  }