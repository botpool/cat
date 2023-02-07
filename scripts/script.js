document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("button");
  const cat = document.getElementById("cat");
  const meow = document.getElementById("meow");

  button.addEventListener("click", function() {
    cat.style.display = "block";
    let left = 0;
    const id = setInterval(function() {
      cat.style.left = left + "px";
      left += 5;
      if (left === screen.width) {
        clearInterval(id);
        cat.style.display = "none";
      }
    }, 50);
    meow.play();
  });
});