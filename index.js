var tab1 ={ A: 12 , B: 23 , C: 10 } 
var tab2 ={ A: 3 , B: 5 , C: 2 } 

function produitScalaire(tab1, tab2) {
    return tab1.A * tab2.A + tab1.B * tab2.B + tab1.C  * tab2.C;
  } 
  const resultat = produitScalaire(tab1, tab2);
  console.log(resultat);
 
 
 


  function dotProduct(vector1, vector2) {
    if (vector1.length !== vector2.length) {
      throw "Les vecteurs doivent avoir la même dimension";
    }
    return vector1.reduce((sum, value, index) => sum + value * vector2[index], 0);
  }
  

  function areOrthogonal(vector1, vector2) {
    const product = dotProduct(vector1, vector2);
    return product === 0;
  }
  

  const vectors = [
    [[10, 23], [12, 10]], 
    [[3, 5], [5, 3]],
   
  ];
  
  
  for (let i = 0; i < vectors.length; i++) {
    const tab1 = vectors[i][0];
    const tab2 = vectors[i][1];
    console.log(`Les vecteurs ${tab1} et ${tab2} sont ${areOrthogonal(tab1, tab2) ? "orthogonaux" : "non-orthogonaux"}.`);
  }
  
