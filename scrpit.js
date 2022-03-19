//معلومه ليك علشان متنسهاش السمي كولم

//   #men-bar  عندك فيه HTML

let menu = document.querySelector("#men-bar");
let navbar = document.querySelector(".navbar");
// لازم المنيو الاول
menu.onclick = () => {
  // ف الكود ده روحت جيبت العلامه الغلط اللي هيا كلوز
  menu.classList.toggle("icon-close");
  // الناف بار لازم اعمل اكتف في css
  // اهم حاجه متعملش نقطه ف اكتف علشان بقالي نص ساعه بشوف اي الغلط ههههههه
  navbar.classList.toggle("active");
};

// هنا علشان بعمل رموف علشان لما اكبر الشاشه تعمل حذف

window.onscroll = () => {
  navbar.classList.remove("active");
  menu.classList.remove("icon-close");
};


