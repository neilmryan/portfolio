//alert("js is working!");
$(".visit_me").hover(
  function() {
    var site_name = this.text;
    //console.log(site_name);
    this.innerText = "Visit my " + site_name + " page!";
    //$(this).css("text-shadow", "2px 2px 8px #ce28d1");
    //console.log(site_name);
}, function() {
    var site_name = this.text;
    site_name = site_name.split(" ");
    site_name = site_name.slice(2);
    site_name.pop();
    site_name = site_name.join(" ");
    this.innerText = "" + site_name + "";
    //$(this).css("text-shadow", "2px 2px 8px #006666");
    //console.log(site_name);
});
