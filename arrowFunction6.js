var conta = 1;

const fatorial = () => {
    for (i = 10; i > 1; i--){
        conta *= i;
    }
    console.log(conta);
}   

fatorial();