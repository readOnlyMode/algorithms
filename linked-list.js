class DoublyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  add(value, index) {
    const node = createNode(value);

    if (index != null) {
      const searchNode = this.searchByIndex(index);
      if (searchNode === this.head) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      } else if (searchNode === this.tail) {
        this.tail.next = node;
      } else {
        const prev = searchNode.prev;
        searchNode.prev = node;
        prev.next = node;
        node.next = searchNode;
        node.prev = prev;
      }
    } else {
      if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
      }

      this.tail = node;
      if (!this.head) this.head = node;
    }

    this.size++;
  }

  // Удаляет элемент из списка по значению.
  // Удаляет только первый найденный элемент.
  // Если элемент не найден, ничего делать не нужно.
  removeByValue(value) {
    const element = this.searchByValue(value);
    if (element) {
      if (element === this.head) {
        const next = this.head.next;
        next.prev = null;
        this.head = next;
      } else if (element === this.tail) {
        const prev = this.tail.prev;
        prev.next = null;
        this.tail = prev;
      } else {
        const prev = element.prev;
        const next = element.next;

        prev.next = next;
        next.prev = prev;
      }
      this.size--;
    }
  }

  // Удаляет элемент из списка по индексу.
  // Если индекс за пределами — кидает ошибку.
  removeByIndex(index) {
    const element = this.searchByIndex(index);
    if (element) {
      this.removeByValue(element.value);
    }
  }

  // Ищет элемент в списке по индексу.
  // Если индекс за пределами — кидает ошибку.
  searchByIndex(index) {
    if (index > this.size - 1) {
      throw new Error("some text");
    }
    let element = this.head;
    let counter = 0;

    while (counter <= index) {}
  }

  checkIndex(index) {
    if (index > this.size) {
      throw new Error("some text");
    }
    return true;
  }

  // Ищет элемент в списке по значению.
  // Возвращает первый найденный элемент.
  // Опционально можно указать индекс начала поиска.
  // Если индекс за пределами — кидает ошибку.
  // Если элемент не найден, нужно вернуть null.
  searchByValue(value, startIndex = 0) {
    let element = this.searchByIndex(startIndex);
    while (element) {
      if (element.value === value) {
        return element;
      }
      element = element.next;
    }

    return element;
  }
}

function createNode(value) {
  return {
    value,
    next: null,
    prev: null,
  };
}

/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/
const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
// next: {value: 4, next: {…}}
// value: 5
function reverse(head) {
  let element = head;
  let prev = null;
  while (element) {
    const nextElement = element.next;
    element.next = prev;
    prev = element;
    element = nextElement;
  }
  return prev;
}

reverse(list.head);
