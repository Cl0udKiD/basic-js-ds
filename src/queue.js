const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
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
