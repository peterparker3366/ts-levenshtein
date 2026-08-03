export function levenshtein(left: string, right: string): number {
  let prev = Array.from({ length: right.length + 1 }, (_, i) => i);
  for (let i = 1; i <= left.length; i++) {
    const next = [i];
    for (let j = 1; j <= right.length; j++) next[j] = Math.min(next[j - 1] + 1, prev[j] + 1, prev[j - 1] + (left[i - 1] === right[j - 1] ? 0 : 1));
    prev = next;
  }
  return prev[right.length];
}
