var keys = document.querySelectorAll('div.button');
var output = document.getElementById("display");
var hasOpp = false;
var btnVal1 = 0;
var btnVal2 = 0;
var clearPress=false;
var lastPressed="shrekt";
var dOrR="R"
var angle;
console.log(keys);


for(var i = 0; i < keys.length; i++){
	keys[i].addEventListener("click", mathify, false);
};
function clear(){
    output.innerHTML=""
}
function mathify(){
    var equation=output.innerHTML;
    if(clearPress&& !this.classList.contains("opp")){
        clear()
    }
    if(equation.length<600){
	    if(this.classList.contains("opp") && !isNaN(lastPressed)){
		    var btnVal = output.innerHTML;
		    output.insertAdjacentHTML('beforeend', this.innerHTML);
		    hasOpp = true;
		    clearPress=false;
		    lastPressed=this.innerHTML;
	    }
	    else if(this.innerHTML === "Solve"){
            //needsSomeSortOfCatch
            var answer=eval(equation);
            output.innerHTML=answer;
            clearPress=true;
           equation=""
           lastPressed=this.innerHTML
	    }
	    else if(this.innerHTML === "Clear"){
            clear()
            clearPress=false;
            lastPressed=this.innerHTML
	    }
	    else if(this.innerHTML === "sqrt"){
            output.innerHTML=Math.sqrt(output.innerHTML)
            clearPress=true;
	    }
	     else if(this.innerHTML === "sin"){
                output.innerHTML=Math.sin(output.innerHTML*Math.PI/180);
                clearPress=true;
	    }
	    else if(this.innerHTML === "cos"){
                 output.innerHTML=Math.cos(output.innerHTML*Math.PI/180);
	    }
	    else if(this.innerHTML === "tan"){
                 output.innerHTML=Math.tan(output.innerHTML*Math.PI/180);
                clearPress=true;
	    }
	    
	    else if(this.innerHTML === "pi"&&isNaN(lastPressed)){
          output.insertAdjacentHTML('beforeend', Math.PI);
          clearPress=false;
          lastPressed="3.14";
	    }
	    else if(!isNaN(this.innerHTML)&&lastPressed!="pi"||this.innerHTML=="."&!isNaN(lastPressed)){
	        output.insertAdjacentHTML('beforeend', this.innerHTML);
	        var btnVal = output.innerHTML;
	        clearPress=false;
	        lastPressed=this.innerHTML
        }
    }

   if(output.innerHTML.length>14){
        var fontSize=400/output.innerHTML.length
        var fontSizeToPass=fontSize.toString()+"px"
        output.style.fontSize=fontSizeToPass;
    }
    
    else{
        output.style.fontSize="30"
    }

};