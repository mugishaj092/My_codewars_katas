function findOutlier(integers) {
    const firstThree = integers.slice(0, 3);
    const isEvenMajority = firstThree.filter(n => n % 2 === 0).length > 1;
    return integers.find(n => isEvenMajority ? n % 2 !== 0 : n % 2 === 0);
  }