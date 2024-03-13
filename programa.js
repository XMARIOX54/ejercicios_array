console.log('ae hola')

const a = [3,2,1];

console.log(' a antes', a)

const ordendado = a.sort();

console.log(' a despues', a);
console.log('ordenado', ordendado)


console.log(
    a.push(1)
)
console.log(a.join(' y sigue '))

function calcuradora(num1 , num2 , call){
    call(num1, num2); 
}

calcuradora(1,
    2,
    function(){
    console.log('hola soy hijo de callback')
});
    //0 1 2 3 4 5 6 7 8 9
const nums = [1,7,4,6,5,9,8,3,2,0];

//forEach 

nums.forEach((value, index, array) =>{
    console.log('tu valor', value, 'index de valor', index, 'el array che', array);
});


const strings = ['holas', 'wenas'];

strings.forEach((value) => {
    console.log(value);
    }  
);

//sort callback

nums.sort((a,b) => {
    // x < 0 < x
    /**
     * a antes que b regresar < 0
     * b antes que a regresar > 0
     * a y b son iguales regresar 0 
     */
    if(a > b){
        return -1;
    } else if (b < a){
        return 1;
    }else{
        return 0;
    }
    

});

console.log(nums);
