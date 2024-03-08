export function getLink(image) {
  const CDNURL =
    "https://qgzeodsxjjpqfbghflzn.supabase.co/storage/v1/object/public/";
  let url_link = CDNURL + image.fullPath;
  return url_link;
}

export function addComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getTotal(values) {
  let total = 0;
  values.forEach((value) => {
    total += value.amount;
  });
  return total;
}

export function getDelivered(orders, status) {
  let items = orders.filter((order) => order.delivered === status);
  return items;
}

export function generateRandomString(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
