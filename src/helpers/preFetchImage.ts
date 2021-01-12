import { isString } from '@/helpers/typeChecker'

export default function (imgPath: string, defaultPath: string = '') {
  if (isString(imgPath)) {
    const HTMLElementImg: HTMLImageElement = new Image()
    HTMLElementImg.src = imgPath
    HTMLElementImg.style.display = 'none'
    document.body.appendChild(HTMLElementImg)

    return new Promise<string>((resolve) => {
      HTMLElementImg.onload = function () {
        resolve(imgPath)
        document.body.removeChild(HTMLElementImg)
      }
      HTMLElementImg.onerror = function () {
        resolve(defaultPath)
        document.body.removeChild(HTMLElementImg)
      }
    })
  }

  return Promise.resolve(defaultPath)
}
