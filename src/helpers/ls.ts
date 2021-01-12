export default {
  get (key: string): any {
    return JSON.parse(localStorage.getItem(key) || 'false')
  },
  set (key: string, val: unknown): void {
    localStorage.setItem(key, JSON.stringify(val))
  },
  remove (key: string): void {
    localStorage.removeItem(key)
  },
  clear (): void {
    localStorage.clear()
  }
}
