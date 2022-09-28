document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  var holder2 = document.getElementById("led2")
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        holder2.style.backgroundImage = "url('R3wnAHR.png')";
        // do this

      } else {
        holder2.style.backgroundImage = "url('image1.jpg')";
        // do that
      }
    });
  });