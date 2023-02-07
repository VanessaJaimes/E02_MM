document.getElementById("updateProgress").addEventListener("click", function(){
    var progress = Math.floor(Math.random() * 101);
    
    document.getElementById("myProgressBar").style.width = progress + "%";
    
    if (progress < 40) {
      document.getElementById("myProgressBar").className = "progress-bar progress-bar-danger";
    } else if (progress < 70) {
      document.getElementById("myProgressBar").className = "progress-bar progress-bar-warning";
    } else {
      document.getElementById("myProgressBar").className = "progress-bar progress-bar-success";
    }
  });
