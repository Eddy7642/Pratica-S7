class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }

  compareAge(anotherUser) {
    if (this.age < anotherUser.age) {
      return `${anotherUser.firstName} è più vecchio di ${this.firstName}.`
    } else if (this.age > anotherUser.age) {
      return `${anotherUser.firstName} è più giovane di ${this.firstName}.`
    } else {
      return `${anotherUser.firstName} è della stessa età di ${this.firstName}.`
    }
  }
}

x = new User('Sfera', 'Ebbasta', 32, 'Cinisello')
y = new User('Vasco', 'Rossi', 65, 'Zocca')
z = new User('Jacopo', 'Lazzarini', 29, 'Milano')
console.log(x.compareAge(y))
console.log(y.compareAge(z))
console.log(z.compareAge(x))
