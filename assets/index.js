function show(){
  var shoeSize= document.getElementById('shoeSize').value;
  var yearOfBirth= document.getElementById('yearOfBirth').value;
a = shoeSize;
b = yearOfBirth;
c = 2;
d = 5;
e = 50;
f = b;
g = 1766;
var result= a * c + d * e - b + g;
  if(isNaN(result)==true){
    alert('Erreur, ceci n\'est pas un nombre');
  } else {
    alert(' Voici votre résultat '+ result);
  }
}

fonction result(){
  var shoeSize= document.getElementById('shoeSize').value;
  var yearOfBirth= document.getElementById('yearOfBirth').value;
  var result= shoeSize*2;
result+=5;
result*=50;
result-=yearOfBirth;
result+=1766;
alert(' Voici votre résultat '+ result);
}
