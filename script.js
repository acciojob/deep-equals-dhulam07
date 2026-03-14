function deepEquals(a, b) {

	// code here
	// NaN === NaN is false, but NaN equals NaN per spec
  if (Number.isNaN(a) && Number.isNaN(b)) return true;
  
  // Same reference or primitive equality
  if (a === b) return true;
  
  // Different types or one/both non-objects
  if (typeof a !== typeof b || typeof a !== 'object' || a === null || b === null) {
    return false;
  }
  
  // One array, one not
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  
  // Arrays: check length and each element recursively
  if (Array.isArray(a)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) return false;
    }
    return true;
  }
  
  // Objects: check keys length and each key-value recursively (order irrelevant)
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEquals(a[key], b[key])) {
      return false;
    }
  }
  return true;
 
}

module.exports=deepEquals;
