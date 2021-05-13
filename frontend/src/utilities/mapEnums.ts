export default function mapEnums (enumerable: any, fn: Function): any[] {
  const enumMembers: any[] = Object.keys(enumerable).map(key => enumerable[key]);
  return enumMembers.map(m => fn(m));
}