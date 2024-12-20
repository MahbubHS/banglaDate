var তারিখ = new bdDateConverter().convert(`j-m-Y`);
document.querySelector("title").textContent = `আজ : ${তারিখ} বঙ্গাব্দ`;

var date = new bdDateConverter().convert(`j ই F, Y বঙ্গাব্দ`);
var day = new bdDateConverter().convert(`আজ: l`);
var timeNowBd = setInterval(() => {
  var time = new bdDateConverter().convert("A g টা i মিনিট S");
  document.getElementById(
    "timeNowBd"
  ).innerHTML = `<div>${day} </div><div>${time}</div>`;
  document.getElementById("dateNowBd").textContent = date;
}, 100);
