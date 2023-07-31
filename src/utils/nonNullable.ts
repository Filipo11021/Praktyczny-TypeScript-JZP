export function IsNonNullable<Value>(value: Value): value is NonNullable<Value> {
  return value !== undefined && value !== null
}
