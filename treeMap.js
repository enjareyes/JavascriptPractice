// Tree Mapping
// Implement a map method on this Tree class.
// Map accepts a mapping function as its only argument. 
// It traverses the tree, passing each node’s value into the mapping 
// function, and generates a new tree containing the results.
// So map should return a tree with the same structure, and 
// different values, but it should NOT modify the tree that was passed in.

var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
  var x = callback(this.value)
  var newTree = new Tree(x)

  newTree.children = this.children.map(function(childNode){
    return childNode.map(callback);
  });

  return newTree
};


Tree.prototype.addChild = function (child) {
  if (! child || !(child instanceof Tree)) child = new Tree(child);

  if (!this.isDescendant(child)) this.children.push(child);
  else throw new Error("That child is already a child of this tree");

  return child;
};

Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) return true;
  else {
    for (var i = 0; i < this.children.length; i++) {
      if(this.children[i].isDescendant(child)) return true;
    }
    return false;
  }
};

Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) this.children.splice(index,1);
  else throw new Error("That node is not an immediate child of this tree");
};

