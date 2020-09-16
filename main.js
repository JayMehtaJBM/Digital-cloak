function cloak() {

  var hours = $("#hour");
  var minutes = $("#minutes");
  var seconds = $("#seconds");

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  hours.text(h);
  seconds.text(s);
  minutes.text(m);

}

var setInterval = setInterval(cloak , 1000);


function toggleClass() {
  const body = $('body');
  body.toggleClass('light');
}
