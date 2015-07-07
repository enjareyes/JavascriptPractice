// Deep Equality

// Write a function that, given two objects, returns whether or not the 
// two are deeply equivalent--meaning the structure of the two objects is 
// the same, and so is the structure of each of their corresponding descendants.


// example input: 
//   var a = { foo: 'bar', biz: 'baz' };
//   var b = { foo: 'bar', biz: 'baz' };


var deepEquals = function(a, b){
  console.log(a) // { foo: 'bar', biz: 'baz' };     //bar    //baz
  console.log(b) // { foo: 'bar', biz: 'baz' };     //bar    //baz
  if(a === b) return true; 
  if(!(a instanceof Object) || !(b instanceof Object)) return false; 

  var aKeys = Object.keys(a),
      bKeys = Object.keys(b);
  console.log('akeys', aKeys) //  ["foo", "biz"]
  console.log('bkeys', bKeys) //  ["foo", "biz"]

  if(aKeys.length !== bKeys.length) return false; 

  for(var i = 0; i < aKeys.length; i++){
    console.log('current aKey',a[aKeys[i]]) //bar   //baz
    console.log('current bKey', b[bKeys[i]]) //bar  //baz
    if(!deepEquals(a[aKeys[i]], b[aKeys[i]])) return false;
  }

  return true;
};

