const FIZZ = "Fizz";
const BUZZ = "Buzz";
const SPACE = " ";
const MAX_NUM = 100;

for (var i = 1; i < MAX_NUM; i++) {
  var text = "";
  if(i%3 === 0){
    text = text + FIZZ;
  }
  if(i%5 === 0){
    text = text + BUZZ;
  }
  if(text !== ""){
    console.log(text + SPACE + i);
  }
}