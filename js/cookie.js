const cookieBox = document.querySelector(".cookie-wrapper"),
  acceptBtn = cookieBox.querySelector(".btn-agree");
let declineBtn = document.querySelector(".btn-decline");
acceptBtn.onclick = () => {
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieBy=R17Kelola; max-age=" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  } else {
    //if cookie not set then alert an error
    alert(
      "Cookie can't be set! Please unblock this site from the cookie setting of your browser."
    );
  }
};

declineBtn.onclick = () => {
  cookieBox.classList.add("hide");
};

let checkCookie = document.cookie.indexOf("CookieBy=R17Kelola"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1
  ? cookieBox.classList.add("hide")
  : cookieBox.classList.remove("hide");
