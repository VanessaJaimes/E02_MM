document.getElementById("updateProgress").addEventListener("click", function(){
    var progress = Math.floor(Math.random() * 101);
    
    document.getElementById("myProgressBar").style.width = progress + "%";
    
    if (progress < 40) {
      document.getElementById("myProgressBar").className = "progress-bar progress-bar-striped progress-bar-animated bg-danger";
    } else if (progress < 70) {
      document.getElementById("myProgressBar").className = "progress-bar progress-bar-striped progress-bar-animated bg-warning";
    } else {
      document.getElementById("myProgressBar").className = "progress-bar progress-bar-striped progress-bar-animated bg-success";
    }
  });


  document.getElementById("updateProgresss").addEventListener("click", function(){
    var progress = Math.floor(Math.random() * 101);
    
    document.getElementById("myProgressBars").style.width = progress + "%";
    
    if (progress < 40) {
      document.getElementById("myProgressBars").className = "progress-bar progress-bar-striped progress-bar-animated bg-danger";
    } else if (progress < 70) {
      document.getElementById("myProgressBars").className = "progress-bar progress-bar-striped progress-bar-animated bg-warning";
    } else {
      document.getElementById("myProgressBars").className = "progress-bar progress-bar-striped progress-bar-animated bg-success";
    }
  });

  
