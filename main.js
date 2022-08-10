/*ունեք 2 զանգված, առաջին զանգվածը իր մեջ պետք է պահի անուններ, 2րդ զանգվածը պետք է պահի ազգանուններ, 
ու էնպես պետք ա անեք,որ ռանդոմ անուն ազգանուններ գեներացվեն HTMLի վրա, գեներացվելուց հետո պետք ա լոգիկա մշակեք 
որը անունով կհասկանա էդ մարդը կին ա թե տղամարդ, ու կանանց առանձնացնում եք մեկ այլ բլոկի (div) տղերքին մեկ այլ */


const result = document.querySelector("#result");
const run = document.querySelector("#btn1");
const womanDiv = document.querySelector("#woman");
const manDiv = document.querySelector("#man");
const arrNames = ["Anna", "Narek", "Ani", "Karen", "Hasmik", "Aren", "Sayat", "Anahit", "Heghine", "Artur", "Tatev"];
const arrSurnames = ["Baghdasaryan", "Gevorgyan", "Haghverdyan", "Tovmasyan", "Vardanyan"];


run.addEventListener("click", e =>{
    const arrWoman = ["Anna", "Ani", "Hasmik", "Anahit", "Heghine", "Tatev"];
    let name = arrNames[parseInt(Math.random() * arrNames.length)];
    let surname = arrSurnames[parseInt(Math.random() * arrSurnames.length)]
        arrWoman.includes(name)?
            womanDiv.textContent = `${name} ${surname}`:
            manDiv.textContent = `${name} ${surname}`;
});