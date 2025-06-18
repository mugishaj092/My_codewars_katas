function longest(s1, s2) {
    let newString=[...new Set(s1+s2)].sort().join('')
    return newString
    
  }