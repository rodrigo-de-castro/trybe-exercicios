const acordando = () => "Acordando!!";
const cafe = () => "Bora tomar café!!";
const dormir = () => "Partiu dormir!!";

const doingThings = (wakeUp) => {
    const result = wakeUp();
    console.log (result)
}

doingThings (acordando);
doingThings (cafe);
doingThings (dormir);