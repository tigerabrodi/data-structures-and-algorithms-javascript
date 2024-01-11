export class Stack {
  constructor() {
    this.stack = []
  }

  push(item) {
    this.stack.push(item)
  }

  pop() {
    return this.stack.pop()
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }
}
