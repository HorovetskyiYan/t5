function cloneObj(obj) {
  const clnObj ={}

  for(let key of Object.keys(obj)) {
    if(typeof obj[key] === 'object') {
      clnObj[key] = cloneObj(obj[key])
    } else {
        clnObj[key] = obj[key]
      }
  }

  return clnObj
