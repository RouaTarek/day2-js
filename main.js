

 // task1
var num1 = Number(window.prompt('Enter First Number :'));
var num2 = Number(window.prompt('Enter Second Number :'));
var sum = num1 + num2;
var sub = num1 - num2;
var Mult= num1 * num2;
var div=num1/num2;
var mod = num1%num2;

document.getElementById('sum').innerHTML='sum is ' + " " + sum  ;
document.getElementById('sub').innerHTML='sub  is ' + " "  + sub ;
document.getElementById('mult').innerHTML='mult is ' + " "  + Mult ;
document.getElementById('div').innerHTML='div  is ' + " "  + div ;
document.getElementById('mod').innerHTML='mod is ' + " "  + mod ;


// //_________________________________________________________________________________
  // task2
var length = Number(window.prompt('Enter  the length of Rectangle :'));
var width = Number(window.prompt('Enter  the width of Rectangle :'));
var area= length*width;
document.getElementById('area').innerHTML='Area of  Reactangle  is ' + " " + area;


// //_________________________________________________________________________________
  // task3
var radious = Number(window.prompt('Enter  the radious of cirle :'));
var Diameter=radious*2;
var circumference =2*3.14*radious;
var areaC= 3.14*radious*radious ;
document.getElementById('circle').innerHTML='Diameter  is ' + Diameter +' , circumference  is ' + circumference +' , Area  is ' + areaC;