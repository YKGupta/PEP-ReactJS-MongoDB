class Account
{
    constructor(name, pin)
    {
        this.name = name;
        this.pin = pin;
        this.balance = 0;
        this.display();
    }

    deposit(amt)
    {
        this.balance += amt;
        this.display();
    }

    withdraw(amt, pin)
    {
        if(this.pin !== pin)
            return this.invalid("Invalid credentials");
        if(this.balance < amt)
            return this.invalid("Insufficient Balance");
        this.balance -= amt;
        this.display();
    }

    display()
    {
        console.log(`Welcome ${this.name}!\nYour account balance = ₹${this.balance}`);
    }

    invalid(msg)
    {
        console.error(`Error: ${msg}`);
    }
}

const obj1 = new Account("Yash Kumar Gupta", 1234);
obj1.deposit(1024);
obj1.withdraw(2000, 1234);
obj1.withdraw(200, 123);
obj1.withdraw(200, 1234);