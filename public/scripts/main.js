var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

var i = 1;

window.setInterval(function () {
  document.body.style.backgroundColor = colors[i];
  i++;
  if (i === colors.length) {
    i = 0;
  }
}, 1000);
