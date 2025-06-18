function calculate(str) {
    let newString=str.split("minus").join("-").split("plus").join("+")
    return eval(newString).toString();
  }