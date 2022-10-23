
type Tuple<T, Count extends number, Current extends [...T[]] = []> =
  Current["length"] extends Count
    ? Current
    : Tuple<T, Count, [T, ...Current]>

// Generates: [string, string, string, string, string]
type StringQuintuple = Tuple<string, 5>
