type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node: Node<T> = { value: item };
    this.length++;
    if (!this.tail || !this.head) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined;
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;
    return head.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
