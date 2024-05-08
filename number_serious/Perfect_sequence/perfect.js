






// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    // Check for divisibility by all numbers from 2 to sqrt(num)
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
  
    return true;
  }
  
  // Function to find prime numbers up to a given limit
  function findPrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  // Example usage
  console.log("Prime numbers up to 50:", findPrimes(50));
  