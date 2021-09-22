export const debounce = function (fn, delay) {
  let timer = null;
  return function () {
    let context = this;   
    let args = arguments;
    clearTimeout(timer);  //清除定时器
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}
