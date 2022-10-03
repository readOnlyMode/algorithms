class Stack {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Кладёт элемент на стек.
  // Возвращает новый размер стека.
  push(value) {
    const node = { value, next: null, prev: null };

    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    if (!this.head) {
      this.head = node;
    }
    this.size++;
  }

  // Убирает элемент со стека.
  // Если стек пустой, кидает ошибку.
  // Возвращает удалённый элемент.
  pop() {
    if (this.isEmpty()) {
      throw new Error("some text");
    }

    if (this.tail === this.head) {
      this.head = this.head.prev;
    }
    this.tail = this.tail.prev;
    this.size--;
  }

  // Возвращает верхний элемент стека без его удаления.
  peek() {
    return this.tail;
  }

  // Если стек пуст, возвращает true. В противном случае –– false.
  isEmpty() {
    return this.size <= 0;
  }
}
const a = new Stack();
a.push(1);
a.push(2);
console.log(a);
