window.addEventListener('load', init, false);

var canvas, stage, exportRoot, startsound,correctsound, wrongsound, clicksound, dropsound;
var numofanswer = 5;
var counter = 0;
var groupArray = [0, 0, 0, 0];
var placeIdArray = [0, 1, 2, 3];
var itemsnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]


function init() {
    
    canvas = document.getElementById("canvas");
	exportRoot = new lib.KSA_TVTC_PH011_M001_L002_P016_Temp000();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener("tick", stage);
    
    
    createjs.Touch.enable(stage);
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);

    setTimeout(function(){
    document.getElementById("submit").style.display="block";
    },2000)
 

    
    //set the sounds functions

    startsound = document.getElementById("start");
    
    startsound.addEventListener('pause', function() {
        startsound.currentTime = 0;
    }, false);
   
correctsound = document.getElementById("correct");

    correctsound.addEventListener('pause', function () {
        correctsound.currentTime = 0;
    }, false);

    wrongsound = document.getElementById("wrong");

    wrongsound.addEventListener('pause', function () {
        wrongsound.currentTime = 0;
    }, false);

    clicksound = document.getElementById("click");

    clicksound.addEventListener('pause', function () {
        clicksound.currentTime = 0;
    }, false);
    
    dropsound = document.getElementById("drop");

    dropsound.addEventListener('pause', function () {
        dropsound.currentTime = 0;
    }, false);
    startsound.play();
    // set the stage and hide non needed elements
  
    exportRoot["place"].amIChecked = false;
    exportRoot["ans"].alpha = 0;



    // drag and drop events for 30 item 

    for (var i = 1; i <= numofanswer; i++) {

        // set the drag event and give id to all items
        exportRoot["s" + i].onPress = moveFn;
        exportRoot["s" + i].num = i;
        exportRoot["s" + i].iAmIn = false;

        // preserving the original position of the items
        exportRoot["s" + i].PosX = exportRoot["s" + i].x;
        exportRoot["s" + i].PosY = exportRoot["s" + i].y;

    
    }
            exportRoot["head"].onPress = moveFnR;
            exportRoot["head"].PosX = exportRoot["head"].x;
            exportRoot["head"].PosY = exportRoot["head"].y;

            exportRoot["submit"].onClick = clickFn;

    // setting the drop events  function moveFn
    function moveFn(e) {
                //drop events
        e.target.disX = stage.mouseX - e.target.x;
        e.target.disY = stage.mouseY - e.target.y;
        
        e.onMouseMove = function(e1) {
            e1.target.x = e1.stageX - e1.target.disX;
            e1.target.y = e1.stageY - e1.target.disY;
        };


        e.onMouseUp = function(e2) {
         
if ((Math.abs(e2.target.x - exportRoot["place"].x) < 50 && Math.abs(e2.target.y - exportRoot["place"].y) < 150 && exportRoot["place"].amIChecked == false) || (Math.abs(e2.target.x - exportRoot["place"].x) < 50 && Math.abs(e2.target.y - exportRoot["place"].y) < 150 && e2.target.iAmIn == true)  ){
                    document.getElementById("submit").value="";

                    exportRoot["ans"].alpha = 0;
                    exportRoot["place"].amIChecked = true;
                    e2.target.iAmIn = true;

                    dropsound.play();

}
            
            else{
                pauseAll()
                wrongsound.play();
                            exportRoot["ans"].alpha = 0;

                    e2.target.iAmIn = false;
                    counter=0;
                    for(var i=1;i<=numofanswer;i++){
                    if(exportRoot["s"+i].iAmIn==true){
                    counter++;
                    }
                    }
                if(counter==0){
                exportRoot["place"].amIChecked = false;
                }
                    

                createjs.Tween.get(e2.target, {
                        override: true
                    }).to({
                        x: e2.target.PosX,
                        y: e2.target.PosY
                    }, 800, createjs.Ease.easeOut);
            
            }



        }


    }
    
    




///////////////////////////////////////////////////////////////////////////////////

function moveFnR(e) {
        //console.log("here")
        exportRoot["round"].play();

        //drop events
        e.target.disX = stage.mouseX - e.target.x;
        e.target.disY = stage.mouseY - e.target.y;
        
        e.onMouseMove = function(e1) {
            
                        e1.target.x = e1.stageX - e1.target.disX;
            if(e1.target.x>546.8){
            e1.target.x=546.8
            }
            else if(e1.target.x<502.8){
            e1.target.x=502.8
            }
            //console.log(e1.stageX);
            //console.log(e1.target.x);
//925.6   391.6
            
            //max 903.6  min 391.6
            //e1.target.y = e1.stageY - e1.target.disY;
        };


        e.onMouseUp = function(e2) {
            
               exportRoot["round"].stop();

            }




        }


    }
    
    
    
    
    
        
    
////////////////////////////////////////////////////////////////////////////////////
    // setting the clickFn 

    function clickFn() {
        pauseAll();
        clicksound.play();
        var value=document.getElementById("submit").value;
        if(exportRoot["s1"].iAmIn==true){
            exportRoot["ans"].alpha = 1;
            if(value>=17.0 && value <=17.45){
                pauseAll();
                correctsound.play();
               exportRoot["ans"].gotoAndStop(0);

               }
            else{
                pauseAll();
                wrongsound.play();
            exportRoot["ans"].gotoAndStop(1);
            }
        }
        
        else if(exportRoot["s2"].iAmIn==true){
                exportRoot["ans"].alpha = 1;
            if(value>=16.0 && value <=16.45){
            pauseAll();
                correctsound.play();
                exportRoot["ans"].gotoAndStop(0);

               }
            else{
                pauseAll();
                wrongsound.play();
            exportRoot["ans"].gotoAndStop(1);
            }
        }
        else if(exportRoot["s3"].iAmIn==true){
                exportRoot["ans"].alpha = 1;
            if(value>=15.0 && value <=15.45){
            pauseAll();
                correctsound.play();
                exportRoot["ans"].gotoAndStop(0);

               }
            else{
                pauseAll();
                wrongsound.play();
            exportRoot["ans"].gotoAndStop(1);
            }
        }
        else if(exportRoot["s4"].iAmIn==true){
                exportRoot["ans"].alpha = 1;
            if(value>=14.0 && value <=14.45){
            pauseAll();
                correctsound.play();
                exportRoot["ans"].gotoAndStop(0);

               }
            else{
                pauseAll();
                wrongsound.play();
            exportRoot["ans"].gotoAndStop(1);
            }
        }
        else if(exportRoot["s5"].iAmIn==true){
                exportRoot["ans"].alpha = 1;
            if(value>=13.0 && value <=13.45){
            pauseAll();
                correctsound.play();
             exportRoot["ans"].gotoAndStop(0);

               }
            else{
                pauseAll();
                wrongsound.play();
            exportRoot["ans"].gotoAndStop(1);
            }
        }
        else if(exportRoot["s6"].iAmIn==true){
                exportRoot["ans"].alpha = 1;
            if(value>=1 && value <=1.2){
            pauseAll();
                correctsound.play();
                exportRoot["ans"].gotoAndStop(0);

               }
            else{
                pauseAll();
                wrongsound.play();
            exportRoot["ans"].gotoAndStop(1);
            }
        }
        else if(exportRoot["s7"].iAmIn==true){
                exportRoot["ans"].alpha = 1;
            if(value>=1.5 && value <=1.7){
            pauseAll();
                correctsound.play();
             exportRoot["ans"].gotoAndStop(0);

               }
            else{
                pauseAll();
                wrongsound.play();
            exportRoot["ans"].gotoAndStop(1);
            }
        }
 
    }


function pauseAll(){
    
    startsound.pause();correctsound.pause(); wrongsound.pause(); clicksound.pause();dropsound.pause();
}
