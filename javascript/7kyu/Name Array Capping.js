function capMe(names) {
    let capNames=names.map((item)=>{
      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    })
    return capNames
  }