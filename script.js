// Read More functionality for testimonials
function toggleReadMore(element) {
  var dots = element.previousElementSibling.previousElementSibling;
  var moreText = element.previousElementSibling;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    element.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    element.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}