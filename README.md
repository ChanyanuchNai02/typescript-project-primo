# 🔗 merge-sort-project

โปรเจกต์ TypeScript สำหรับ Pre-Interview Q1 24

## 📌 โจทย์

For implementing function with this interface
merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []
That returns sorted array by ascending.

given
     collection_1, collection_3 already sorted from min(0) to max
     collection_2 already sorted from max to min(0)

- **ห้ามใช้** `Array.prototype.sort()`

## 🚀 วิธีติดตั้งและรันโปรเจกต์

```bash
# 1. ติดตั้ง dependencies
npm install

# 2. คอมไพล์ TypeScript
npm run build

# 3. รัน unit tests
npm test
```

## 🧪 ตัวอย่างผลลัพธ์การทดสอบ

```ts
merge([1, 3, 5], [8, 6, 4], [2, 7, 9]);
// ผลลัพธ์: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```


