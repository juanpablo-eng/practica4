document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const fm = document.getElementById("fm");
  const na = document.getElementById("na");
  const container = document.getElementById("img-container");

  const body= document.getElementsByTagNameNS(body);
  body [0]

  const frases = [
     "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
"Cree en ti y todo será posible.",
"Nuestra mayor gloria no está en no caer nunca, sino en levantarnos cada vez que caemos.",
"Haz de tu vida un sueño, y de tu sueño una realidad.",
"No cuentes los días, haz que los días cuenten."
  ]

   const autores = [
    "Robert Collier",
    "Elodie Details",
    "Confucio",
    "Confucio",
    "Muhammad Ali"
    
   ]

   fm.textContent= frases[0];
   na.textContent = autores[0];

   btn.addEventListener("click", ()=>{
    var num = Math.floor(match.random ()*5)
    fm.textContent= frases;
   na.textContent = autores;

   })

});
