class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Ставит элемент в очередь.
  // Возвращает новый размер очереди.
  enqueue(value) {
    const node = { value, next: null, prev: null };
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;

    if (!this.head) {
      this.head = node;
    }
    return ++this.size;
  }

  // Убирает элемент из очереди.
  // Если очередь пустая, кидает ошибку.
  // Возвращает удалённый элемент.
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("some text");
    }
    const element = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;

      this.head.prev = null;
    }

    this.size--;
    return element;
  }

  // Возвращает элемент в начале очереди.
  peek() {
    return this.head;
  }

  // Если очередь пустая, возвращает true. В противном случае –– false.
  isEmpty() {
    return this.size <= 0;
  }
}
const a = new Queue();
a.enqueue(1);
a.enqueue(2);
a.enqueue(3);
a.dequeue();
console.log(a);
