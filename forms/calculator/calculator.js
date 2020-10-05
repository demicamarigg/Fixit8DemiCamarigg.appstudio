btnAdd.onclick=function(){
  sum = parseInt(inptNumber1.value) + parseInt(inptNumber2.value)
  lblAnswer.value = `The sum of the two inputs is  ${sum}` 
}

//button to multiply 
btnMultiply.onclick=function(){
product = parseInt(inptNumber1.value) * parseInt(inptNumber2.value)
  lblAnswer.value =  `The product of the two inputs is ${product}`
}
