const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');


class Queue {
  head = null
  getUnderlyingList() {
      return this.head
  }
  
  enqueue(el) {
      if (this.head == null){
          this.head = new ListNode(el)
      }else{
          var current = this.head
          while(current.next!=null){
              current = current.next
          }
          let newNode = new ListNode(el)
          current.next = newNode
      }
  }
  
  dequeue() {
      var result = this.head
      this.head = this.head.next
      return result.value
  }
}

module.exports = {
  Queue
};
