const { NotImplementedError, ListNode } = require('../extensions/index.js');

function removeKFromList(l,k) {
  var current = l
  var arr = []
  var arr_fin = []
  while (current!=null){
      arr.push(current.value)
      current = current.next
  }
  for (let i in arr){
     if (arr[i]!=k) arr_fin.push(arr[i])
  }
  function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
  
      return new ListNode(cur);
    }, null);
  }
  return convertArrayToList(arr_fin)
}

module.exports = {
  removeKFromList
};
