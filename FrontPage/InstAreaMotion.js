var header = document.getElementById("InstNavAreaId");

function ScrollFlugelhorn() {
    
    document.getElementById("Flugelhorn").scrollIntoView();
    document.getElementById("InstNavAreaUlId").scrollTo(0,0);
    window.scrollBy(0, -180);
    header.classList.remove("sticky");            
     
  };

  function ScrollHorn() {

    document.getElementById("Horn").scrollIntoView();
    document.getElementById("InstNavAreaUlId").scrollTo(0,0);
    window.scrollBy(0, -180);
    header.classList.remove("sticky"); 
      
   
  }; 

  function ScrollKlarinette() {

    document.getElementById("Klarinette").scrollIntoView();
    document.getElementById("inlineBlockLi1").scrollIntoView(getElementById("InstNavAreaUlId"));
    window.scrollBy(0, -180);
    header.classList.remove("sticky");
    
  }; 

  function ScrollOboe() {

    document.getElementById("Oboe").scrollIntoView();
    document.getElementById("InstNavAreaUlId").scrollTo(330,0);
    window.scrollBy(0, -180);
    header.classList.remove("sticky");
    
  }; 

  function ScrollPosaune() {

    document.getElementById("Posaune").scrollIntoView();
    document.getElementById("inlineBlockLi1").scrollIntoView(getElementById("InstNavAreaUlId"));
    window.scrollBy(0, -180);
    header.classList.remove("sticky");
    
  }; 

  function ScrollQuerfloete() {

    document.getElementById("Querfloete").scrollIntoView();
    document.getElementById("InstNavAreaUlId").scrollTo(750,0);
    window.scrollBy(0, -180);
    header.classList.remove("sticky");
    
  }; 

  function ScrollSaxophon() {

    document.getElementById("Saxophon").scrollIntoView();
    document.getElementById("InstNavAreaUlId").scrollTo(800,0);
    window.scrollBy(0, -180);
    header.classList.remove("sticky");
    
  }; 

  function ScrollSchlagzeug() {

    document.getElementById("Schlagzeug").scrollIntoView();
    document.getElementById("InstNavAreaUlId").scrollTo(950,0);
    window.scrollBy(0, -180);
    header.classList.remove("sticky");
    
  }; 

  function ScrollTenorhorn() {

    document.getElementById("Tenorhorn").scrollIntoView();
    document.getElementById("InstNavAreaUlId").scrollTo(1100,0);
    window.scrollBy(0, -180);
    header.classList.remove("sticky");
    
  }; 

  function ScrollTrompete() {

    document.getElementById("Trompete").scrollIntoView();
    document.getElementById("InstNavAreaUlId").scrollTo(1250,0);
    window.scrollBy(0, -180);
    header.classList.remove("sticky");
    
  }; 

  function ScrollTuba() {

    document.getElementById("Tuba").scrollIntoView();
    document.getElementById("InstNavAreaUlId").scrollTo(1400,0);
    window.scrollBy(0, -180);
    header.classList.remove("sticky");
    
  }; 



window.onscroll = function()
  {myFunction()};


var stickyIn = header.offsetTop;
var stickyOut = header.offsetTop - 100; 

function myFunction() {

      if (window.pageYOffset >= stickyIn)
    {  
      header.classList.add("sticky");
      
      navBockWidthFunction();  
    }
      if (window.pageYOffset < stickyOut)
    {
      header.classList.remove("sticky");
      
      navBockWidthFunction();
    }

};

const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('InstNavAreaUlId').scrollLeft += 400;
    };
    buttonLeft.onclick = function () {
      document.getElementById('InstNavAreaUlId').scrollLeft -= 400;
    };


    function navBockWidthFunction(){

      var navHeightDoc = $(document.getElementById('InstNavAreaId')).height();
      
      var  instNavLiElement= $(document.getElementById('inlineBlockLi1'));
      $(instNavLiElement).width(navHeightDoc * 1.2 ).css;

      var  instNavLiElement= $(document.getElementById('inlineBlockLi2'));
      $(instNavLiElement).width(navHeightDoc * 1.2 ).css;

      var  instNavLiElement= $(document.getElementById('inlineBlockLi3'));
      $(instNavLiElement).width(navHeightDoc * 1.2 ).css;

      var  instNavLiElement= $(document.getElementById('inlineBlockLi4'));
      $(instNavLiElement).width(navHeightDoc * 1.2 ).css;

      var  instNavLiElement= $(document.getElementById('inlineBlockLi5'));
      $(instNavLiElement).width(navHeightDoc * 1.2 ).css;

      var  instNavLiElement= $(document.getElementById('inlineBlockLi6'));
      $(instNavLiElement).width(navHeightDoc * 1.2 ).css;

      var  instNavLiElement= $(document.getElementById('inlineBlockLi7'));
      $(instNavLiElement).width(navHeightDoc * 1.2 ).css;

      var  instNavLiElement= $(document.getElementById('inlineBlockLi8'));
      $(instNavLiElement).width(navHeightDoc * 1.2 ).css;

      var  instNavLiElement= $(document.getElementById('inlineBlockLi9'));
      $(instNavLiElement).width(navHeightDoc * 1.2 ).css;

      var  instNavLiElement= $(document.getElementById('inlineBlockLi10'));
      $(instNavLiElement).width(navHeightDoc * 1.2 ).css;

      var  instNavLiElement= $(document.getElementById('inlineBlockLi11'));
      $(instNavLiElement).width(navHeightDoc * 1.2 ).css;

    }

    
    