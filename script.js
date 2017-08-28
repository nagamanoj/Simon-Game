$(document).ready(function(){
    var soundArray = [$("#errorsound")[0], $("#greensound")[0], $("#redsound")[0], $("#yellowsound")[0], $("#bluesound")[0]];
     $("#reset").hide();
     var sequence = [];
     var testSequence = [];
     var complexity = 1;
     var count ; 
    $("#count").val("--");
     var strictMode = false;
    
   $("#1").hover(function(){
        $(this).addClass("active");
        }, function(){
        $(this).removeClass("active");
    });
    $("#2").hover(function(){
        $(this).addClass("active");
        }, function(){
        $(this).removeClass("active");
    });
    $("#3").hover(function(){
        $(this).addClass("active");
        }, function(){
        $(this).removeClass("active");
    });
    $("#4").hover(function(){
        $(this).addClass("active");
        }, function(){
        $(this).removeClass("active");
    });
    
    
    $("#1").click(function(){
        var id = this.id;
        testSequence.push(id);
        check();
    
    });
    
    $("#2").click(function(){
         var id = this.id;
         testSequence.push(id);
         check();
    });
    
    $("#3").click(function(){
        var id = this.id;
        testSequence.push(id);
        check();
    });
    
    $("#4").click(function(){
         var id = this.id;
         testSequence.push(id);
        check();
    });
    
    $("#start").click(function(){
        $("#start").hide();
        $("#reset").show();
        generateSequence();
        performDemo();
        
    });
    
    $("#strict").click(function(){
        strictMode = !strictMode;
        console.log(strictMode);
        if(strictMode == true){
            $("#strict").addClass('btn-danger');
        }else if(strictMode == false){
            $("#strict").removeClass('btn-danger');
        }
    });
    
    $("#reset").click(function(){
         $("#start").hide();
        
        reset();
    });
    
    
    function generateSequence(){
       var num = Math.floor(Math.random() * 4) +1;
        sequence.push(num);
        count = sequence.length;
        $("#count").val(count);
    }  
        
        
    function performDemo(){
        var i = 0;
          var interval = setInterval(function(){
            var n = sequence[i];
              if(n !== undefined){
                soundArray[n].play();
                $("#"+sequence[i]).addClass("active");
                setTimeout(function(){
                    $("#"+ n).removeClass("active");

                }, 800);
              }
            i++;
            if(i > sequence.length){
                clearInterval(interval);
            }
              
          }, 1000);  
               
    }
             
    
    function check(){
        var x = testSequence.length - 1;
        if(testSequence[x] == sequence[x]){
            soundArray[sequence[x]].play();
            if(testSequence.length == sequence.length){
                
                testSequence = [];
                generateSequence();
                performDemo();
                $("#count").val(count);
            }
        }else if(testSequence[x] !== sequence[x]){
            
            
            alert("Nope! try again after me.");
            performDemo();
            testSequence = [];
            if(strictMode == true){
                reset();
            }
            
        }
        if(count > 20){
            alert("You won the game");
            reset();
        }
    }
    
    function reset(){
        sequence = [];
        testSequence=[];
       
        $("#count").val(count);
        generateSequence();
    }
 
});