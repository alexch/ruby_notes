$(".slide").bind("showoff:show", function (event) {
  var content = $(event.target);
  var slide = content.parent(".slide");
  var slideHeight = $(slide).innerHeight();
  var contentHeight = $(content).height();
  var tooBig = (contentHeight > slideHeight);
  if (tooBig) {
    
    // shrink text
    var ratio = slideHeight / contentHeight - .15; // extra 15% for luck
    var percent = "" + parseInt(ratio * 100) + "%";
    console.log("Shrinking by " + percent);
    content.css("font-size", percent);
    
    // shrink images
    content.find('img').each(function(i, element) {
      $(element).css('height', parseInt($(element).height() * ratio));
      $(element).css('width', parseInt($(element).width() * ratio));
    });
  }  
    
  // shrink pre (non-wrapping) text
  // (do this after the page has shrunk, in case that fixed it already)
  content.find('pre > code').each(function(i, element) {
    var slideWidth = slide.innerWidth();
    var preWidth = $(element).width();
    if (preWidth > slideWidth) { // todo: deal with margins
      var ratio = slide.innerWidth() / $(element).width() - .15; // extra 15% for luck
      var percent = "" + parseInt(ratio * 100) + "%";
      console.log("Shrinking code by " + percent);
      var code = $(element);
      var pre = code.parent("pre");
      code.css('font-size', percent);
      pre.css('line-height', percent);
    }
  });
});
