
  function panScrollLeft(){   
    var demoDiv = document.getElementById("bodyid");
      var demoCalc = window.getComputedStyle(demoDiv).getPropertyValue("background-position");
      var pixelsX = (parseFloat(demoCalc));    
      var newPos = pixelsX - 30;
      if(newPos < 0){
        newPos = 0;
      }               
    
    document.getElementById("bodyid").setAttribute("style", "background-position: "+newPos+"% 20px;");
    }
  

    function panScrollRight(){         
      
      var demoDiv = document.getElementById("bodyid");
      var demoCalc = window.getComputedStyle(demoDiv).getPropertyValue("background-position");
      var pixelsX = (parseFloat(demoCalc));    
      var newPos = pixelsX + 30;
      if(newPos > 100){
        newPos = 100;
      }         
      
      document.getElementById("bodyid").setAttribute("style", "background-position: "+newPos+"% 20px;"); 
    }  