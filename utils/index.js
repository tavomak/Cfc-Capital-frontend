import { validate, clean } from 'rut.js';

export const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f2f8fa" offset="20%" />
      <stop stop-color="#eaeffa" offset="50%" />
      <stop stop-color="#f2f8fa" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f2f8fa" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str) => (typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str));

export const validateRut = (value) => {
  const cleanRut = clean(value);
  const isRutValid = validate(cleanRut);

  if (!isRutValid) {
    return false;
  }

  return cleanRut;
};

export function formatPhoneNumberString(value) {
  const trimmedValue = value.trim().replace(/\s/g, '');
  const valueToReturn = `${trimmedValue.slice(0, 1)} ${trimmedValue.slice(1, 5)} ${trimmedValue.slice(5)}`;

  return valueToReturn;
}
