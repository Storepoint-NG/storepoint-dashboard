export function getLink(image) {
  const CDNURL =
    "https://qgzeodsxjjpqfbghflzn.supabase.co/storage/v1/object/public/";
  let url_link = CDNURL + image.fullPath;
  return url_link;
}

export function addComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}