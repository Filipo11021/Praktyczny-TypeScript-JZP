export function isKeyOfObject<Obj extends object>(
  key: PropertyKey,
  obj: Obj
): key is keyof Obj {
  return key in obj;
}
