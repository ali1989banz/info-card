var facebook = document.querySelector("#facebook");
var instagram = document.querySelector("#instagram");
var snapchat = document.querySelector("#snapchat");
var twitter = document.querySelector("#twitter");

facebook.addEventListener("click", () => {
  window.location.href = "https://www.facebook.com";
});
instagram.addEventListener("click", () => {
  window.location.href = "https://www.instagram.com";
});
twitter.addEventListener("click", () => {
  window.location.href = "https://www.twitter.com";
});
snapchat.addEventListener("click", () => {
  window.location.href = "https://www.snapchat.com";
});
