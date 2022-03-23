   function askName() {
       var name = prompt("What is your name??")
       return name 
}


   function askTemp() {
   var temp = prompt("What is the tempature?")
   return temp
}

   function convertftoc(cels) {
      var convertftoc = ((cels - 32)*5)/9
      return convertftoc
}
   function convertctof(fah) {
         var convertctof = ((fah * 9)/5)+32
         return convertctof

   }
function type(temp) {
   var type = prompt("Would convert C to F or F to C?  type F to convert C or C to convert to F") 
   if (type == "F") {
      alert(`${temp} fahrenheit is ${convertftoc(temp)} celcius `)
   
      
   }else {
      alert(`${temp} celsius is ${convertctof(temp)} fahrenheit`)
   }
}   

alert(`Hello ${askName()}!`) 
var temprature = askTemp()
type(temprature)



     