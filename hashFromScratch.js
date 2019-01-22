'use strict';
class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }
  static _hashString(string) {
    // 'David'
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i); //  Take the hash, left shift by 5, making it much larger, then  add 'D' ascii equivalent. Repeat for each character in input string
      //   console.log('hash LOG', hash);
      hash = hash & hash; // constrains the total hash size to 32 bits
      //   console.log('hash LOG 2', hash);
    }
    return hash >>> 0; // forces a signed bit onto the start of the binary representation to indicate non negative. hash needs to be > 0, right shift to force left most bit to be 0 'non-negative' . Negative num in binary indicated by lead 1. The 'signed bit' the 9th character indicates sign.
  }
  get(key) {
    const index = this._findSlot(key);
    if (this._slots[index] === undefined) {
      throw new Error('Key error');
    }
    return this._slots[index].value;
  }
  set(key, value) {
    const loadRatio = (this.length + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    const index = this._findSlot(key);
    this._slots[index] = {
      key,
      value
    };
    this.length++;
  }
  remove(key) {
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }
    slot.deleted = true;
    this.length--;
    this._deleted++;
  }
  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;
    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._slots[index];
      if (slot === undefined || slot.key == key) {
        return index;
      }
    }
  }
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

function main() {
  let newHash = new HashMap();
  newHash.set('Red', '2');
  newHash.set('White', '2');
  newHash.set('Blue', '2');
  newHash.set('Green', '2');
  //   console.log(newHash.get('White'));
  console.log(newHash.remove('Blue'));
  //   console.log(newHash);
  //   console.log(newHash.get('Red'));
}
// console.log(main());
main();
// 10100000
