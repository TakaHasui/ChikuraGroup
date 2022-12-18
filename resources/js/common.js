//ボタン
const topBtn = document.querySelector("#page_top");

//スクロール時のイベントを追加
window.addEventListener("scroll", scroll_event);

function scroll_event() {
  if (window.pageYOffset > 500) {
    topBtn.classList.add("fadeIn");
    topBtn.classList.remove("fadeOut");
  } else if (window.pageYOffset < 500) {
    topBtn.classList.remove("fadeIn");
    topBtn.classList.add("fadeOut");
  }
}
