//JavaScript
//963R
//Daniel Gustavo dos Santos Jorge - 2024100383

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findLargestPrimes() {
    let startNum = parseInt(prompt("Digite um número para começar a busca pelos 10 maiores números primos:"));

    if (!isPrime(startNum)) {
        console.log("O número não é primo");
        return;
    }

    let primeCount = 0;
    let primes = [];
    let num = startNum;

    while (primeCount < 10) {
        if (isPrime(num)) {
            primes.push(num);
            primeCount++;
        }
        num++;
    }

    console.log("Os 10 maiores números primos a partir de " + startNum + " são:");
    console.log(primes);
}


findLargestPrimes();
