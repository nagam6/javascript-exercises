class BankAccount {
  #balance;

  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName;

    if (initialBalance < 0) {
      this.#balance = 0;
    } else {
      this.#balance = initialBalance;
    }
  }
    // Part 2
  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid deposit amount");
      return;
    }

    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Invalid withdrawal amount");
      return;
    }

    if (amount > this.#balance) {
      console.log("Not enough balance");
      return;
    }

    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

// Part 3 
const account = new BankAccount("Ali", 100);

account.withdraw(150); // Not enough balance
console.log(account.getBalance()); // 100

// Test
account.withdraw(100);
console.log(account.getBalance()); // 0

account.deposit(-20); //Invalid deposit amount
console.log(account.getBalance()); // 0

// Part 5
account.balance = -1000;
console.log(account.getBalance()); // 0