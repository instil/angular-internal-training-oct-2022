
function showMaps() {
  // The generic types are inferred
  const map = new Map([
    ['The Matrix', 1999],
    ['The Matrix Reloaded', 2003],
    ['The Matrix Revolutions', 2003]
  ]);

  console.log('Outputting a map of movies to years');
  for (const [movie, year] of map) {
    console.log(`${movie} (${year})`);
  }

  if (map.has('The Matrix 4')) {
    console.log(map.get('The Matrix 4'));
  }

  map.set('The Matrix 4', 2021);

  const readonlyMap: ReadonlyMap<string, number> = map;
  // readonlyMap.set('The Matrix 4', 2021); // Illegal
}

function showSets() {
  // The generic type is inferred
  const set = new Set([
    2003,
    1999,
  ]);

  console.log('Outputting a set of years');
  for (const year of set) {
    console.log(year);
  }

  if (!set.has(2021)) {
    console.log('Set does not contain 2021');
  }
  set.add(2021);

  const readonlySet: ReadonlySet<number> = set;
  // readonlySet.add(2021); // Illegal
}

export function showDataStructures() {
  showMaps();
  console.log('-----');
  showSets();
}
