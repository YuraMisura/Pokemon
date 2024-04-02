export function getRandomIndexes(arrayLength: number, numItems: number) {
  const indexes = new Array<number>();

  while (indexes.length < numItems) {
    const randomIndex = Math.floor(Math.random() * arrayLength);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}