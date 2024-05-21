export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    return String.fromCharCode(...new Uint8Array(this.buffer)); // не работает!!!
    // return String.fromCharCode(...new Uint16Array(this.buffer)); // работает!
    // return String.fromCharCode(...new Uint8Array(new Uint16Array(this.buffer))); // работает!
  }
}
