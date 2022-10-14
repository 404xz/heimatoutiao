//获取本地存储的token
export function getlocal(key) {
  let data = localStorage.getItem(key);

  try {
    data = JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
  return data;
}
// 把token存储到本地
export function setlocal(key, data) {
  localStorage.setItem(
    key,
    typeof data === "object" ? JSON.stringify(data) : data
  );
}
