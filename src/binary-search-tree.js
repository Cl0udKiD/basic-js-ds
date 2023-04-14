const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  root() {
    return this;
  }

  add(value) {
    if (this.root === null) {
      this.root = new BinarySearchTree(value);
    }else{
        if (value < this.value) {
          if (this.left === null) {
            this.left = new BinarySearchTree(value);
          } else {
            this.left.add(value);
          }
        } else {
          if (this.right === null) {
            this.right = new BinarySearchTree(value);
          } else {
            this.right.add(value);
          }
        }
    }
  }

  has(value) {
    if (this.value === value) {
      return true;
    } else if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.has(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.has(value);
      }
    }
  }

  inorderTraversal(callback) {
    if (this.left !== null) {
      this.left.inorderTraversal(callback);
    }
    callback(this.value);
    if (this.right !== null) {
      this.right.inorderTraversal(callback);
    }
  }
  
  find(value) {
    if (this.value === value) {
      return this;
    } else if (value < this.value) {
      if (this.left === null) {
        return null;
      } else {
        return this.left.find(value);
      }
    } else {
      if (this.right === null) {
        return null;
      } else {
        return this.right.find(value);
      }
    }
  }
  
   min() {
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    let currentNode = this;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  
  remove(value) {
    // find the node to remove and its parent
    let currentNode = this;
    let parentNode = null;
    while (currentNode !== null && currentNode.value !== value) {
      parentNode = currentNode;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    if (currentNode === null) {
      return; // the value is not found in the tree
    }

    // case 1: the node has no children
    if (currentNode.left === null && currentNode.right === null) {
      if (currentNode !== this) {
        if (parentNode.left === currentNode) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
      } else {
        this.value = null;
      }
    }

    // case 2: the node has one child
    else if (currentNode.left === null || currentNode.right === null) {
      const childNode = currentNode.left !== null ? currentNode.left : currentNode.right;
      if (currentNode !== this) {
        if (parentNode.left === currentNode) {
          parentNode.left = childNode;
        } else {
          parentNode.right = childNode;
        }
      } else {
        this.value = childNode.value;
        this.left = childNode.left;
        this.right = childNode.right;
      }
    }

    // case 3: the node has two children
    else {
      let replacementNode = currentNode.right;
      let replacementParentNode = currentNode;
      while (replacementNode.left !== null) {
        replacementParentNode = replacementNode;
        replacementNode = replacementNode.left;
      }
      currentNode.value = replacementNode.value;
      if (replacementParentNode.left === replacementNode) {
        replacementParentNode.left = replacementNode.right;
      } else {
        replacementParentNode.right = replacementNode.right;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};
