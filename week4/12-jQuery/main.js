console.log("Week 4 - Day 3");

console.log("Tuwaiq Academy jQuery JS");

$(document).ready(function () {
  const imgSrc = $("#img_1");
  const link = $("#link_1");

  imgSrc.attr("src", "https://satr.codes/assets/images/logo.svg");
  imgSrc.attr("alt", "satar image");

  link.attr("href", "https://satr.codes/list/courses");
  link.prop("id", "newLink");
  link.text("سطر");
  console.log(link.prop("id"));

  const parg = $("#parg_1");
  const btn_1 = $("#btnColor");
  const btn_2 = $("#btnFontSize");
  const btn_3 = $("#btnFontFamily");

  btn_1.click(function() {
    parg.css('color' , 'blue')
  });
  btn_2.click(function() {
    parg.css('font-size' , '30px')
  });
  btn_3.click(function() {
    parg.css('font-family' , 'Courier')
  });

});
