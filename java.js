const monnaie = document.getElementById('money1');
const monnaie2 = document.getElementById('money2');
const button = document.getElementById('button')
const result = document.querySelectorAll('result');


const tauxDeChange = {
    euro: 0.8,
    dollard: 1,
    dollardCanadien: 1.15,
    livreSterling: 1.1,
    francSuisse: 1.5
}

button.addEventListener('click',() => calculerlemontant()) 

const calculerlemontant  = () => {
    const selectmonnaie = tauxDeChange[money1.value];
    const selectmonnaie1 = tauxDeChange [money2.value];
    const montant = document.getElementById('montant').value;


const resultat =  montant * tauxDeChange[money1.value] * tauxDeChange[money2.value]
document.getElementById("result").value = resultat ;



console.log(resultat);
console.log(selectmonnaie , selectmonnaie1) ;

}