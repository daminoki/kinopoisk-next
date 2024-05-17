export default function getImg(url: string | undefined | null) {
  return url || '/images/no-image.svg';
}
