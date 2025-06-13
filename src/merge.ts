export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  let i = 0; // index for collection_1 (asc)
  let j = collection_2.length - 1; // reverse index for collection_2 (desc)
  let k = 0; // index for collection_3 (asc)

  while (i < collection_1.length || j >= 0 || k < collection_3.length) {
    const candidates: number[] = [];

    if (i < collection_1.length) candidates.push(collection_1[i]);
    if (j >= 0) candidates.push(collection_2[j]);
    if (k < collection_3.length) candidates.push(collection_3[k]);

    let min = Math.min(...candidates);

    if (i < collection_1.length && collection_1[i] === min) {
      result.push(collection_1[i]);
      i++;
    } else if (j >= 0 && collection_2[j] === min) {
      result.push(collection_2[j]);
      j--;
    } else if (k < collection_3.length && collection_3[k] === min) {
      result.push(collection_3[k]);
      k++;
    }
  }

  return result;
}
