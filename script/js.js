
window.onload = function(){ 


// Show/Hide buttons

    var testButton = document.getElementById("showHideBtn");
    var labels = document.querySelector('.hideLabels');

    var hideButton = document.getElementById("btnHide");
    var lab = document.querySelector('.hideClass');

    hideButton.addEventListener("click", function(){
      console.log("new Event listener");
      if(lab.style.display === 'none' || lab.style.display === ''){
        lab.style.display = 'inline';
            document.getElementById('txtChange').innerHTML = "show less"; 
            document.getElementById('imgHide').src = "icons/less.png"; 
      }
      else if(lab.style.display === 'inline' || lab.style.display === ''){
        lab.style.display = 'none';
            document.getElementById('txtChange').innerHTML = "show more"; 
            document.getElementById('imgHide').src = "icons/more.png";         
      }
    });


    testButton.addEventListener("click", function(){

         if (labels.style.display === 'none' || labels.style.display === ''){

            labels.style.display = 'inline';
            document.getElementById('showHideBtnTxt').innerHTML = "SHOW LESS"; 
            document.getElementById('showHideBtnImg').src = "icons/less.png"; 
                                        console.log("1st");

         }
     
          else if (labels.style.display === 'inline' || labels.style.display === '' ){
          
            labels.style.display = 'none';
            document.getElementById('showHideBtnTxt').innerHTML = "SHOW MORE";                
            document.getElementById('showHideBtnImg').src = "icons/more.png";   
                                                    console.log("2st");
          
          }

          else{
            console.log("why here");
          }

     });


  }



//jQuery for bootstrap tooltips
$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();   

});
