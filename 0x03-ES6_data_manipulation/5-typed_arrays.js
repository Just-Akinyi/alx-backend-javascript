export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }
  
    const arrayBuffer = new ArrayBuffer(length);
    const view = new Int8Array(arrayBuffer);
    view[position] = value;
    return arrayBuffer;
  }
  