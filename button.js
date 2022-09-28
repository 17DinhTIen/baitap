
function changeColor(e) {
  let holder1= document.getElementById("led1")
    if (e.target.value === "On") {
      if (confirm("Bạn có muốn tắt đèn không?") == true) {
        e.target.style.background = "red"
        e.target.value= "Off"
        holder1.style.backgroundImage =  "url('image3.jpg')";
      }
       else {
        e.target.style.background = "blue"
          e.target.value = "On"
          holder1.style.backgroundImage =  "url('image2.jpg')";
      }

    }
    else {
        if (confirm("Bạn có muốn bật đèn không?") == true) {
          e.target.style.background = "blue"
          e.target.value = "On"
          holder1.style.backgroundImage = "url('image2.jpg')";
        }
         else {
          e.target.style.background = "red"
          e.target.value= "Off"
          holder1.style.backgroundImage =  "url('image3.jpg')";
        }
      }
}
    