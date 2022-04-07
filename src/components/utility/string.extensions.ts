declare global {
  interface String {
    trimWithDots(length: number, appendStr: string): string
  }
}
String.prototype.trimWithDots = function (length, appendStr) {
  return this.length > length
    ? this.substring(0, length) + `${appendStr || '...'}`
    : this
}
export {}
