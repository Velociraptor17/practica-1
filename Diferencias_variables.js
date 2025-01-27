// var , let y const
// ambito/contexto - scope

//Var
function ejemploVar() {
   // debugger;
    if(true) {
    //debugger;
        Var numero=10;
        //debugger;
    }
    //debugger;
    console.log(numero);
}

function ejemplolet() {
   // debugger;
    if(true) {
       // debugger;
        let numero = 10;
        //debugger;
    }
    //debugger;
    console.log(numero);
}

function ejemploconst() {
//debugger;
if(true) {
  //  debugger;
    const z = 30;
    z = 15;
    //debugger;
}
//debugger;
console.log(z)

const array = (1,2,3);
//debugger;
array.push(4);
console.log(array);
//debugger;
array();
}

ejemploVar();
ejemplolet();
ejemploconst();
