export const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
  <filter id="blurry">
    <feGaussianBlur stdDeviation="5" in="SourceGraphic"></feGaussianBlur>
  </filter>

  <clipPath id="polyclip">
      <polygon points="50,200, 300,50, 400,300" />
  </clipPath>
</defs>
</svg>`

export const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)