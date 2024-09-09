//! 1

// const bankAccount = {
//   ownerName: "Amalia Savchenko",
//   accountNumber: "123456789",
//   balance: 300,
//   deposit(amount) {
//     this.balance += amount;
//     alert(
//       `Рахунок поповнено на ${amount} гривень. Поточний баланс: ${this.balance} гривень.`
//     );
//   },
//   withdraw(amount) {
//     if (amount > this.balance) {
//       alert("Недостатньо коштів на рахунку.");
//     } else {
//       this.balance -= amount;
//       alert(
//         `Ви зняли ${amount} гривень. Поточний баланс: ${this.balance} гривень.`
//       );
//     }
//   },
// };

// document.getElementById("depositButton").onclick = () =>
//   bankAccount.deposit(100);
// document.getElementById("withdrawButton").onclick = () =>
//   bankAccount.withdraw(100);

//! 2

// const weather = {

//   humidity: 70,
//   windSpeed: 10,
//   measure() {
//     this.temperature = parseFloat(
//       document.getElementById("measureTheTemperature").value
//     );
//     if (this.temperature >= 0) {
//       alert("температура вижче 0 градусів Цельсія");
//       return true;
//     } else{
//       alert("температура нижче 0 градусів Цельсія");
//       return false;
//     }
//   },
// };

//! 3

// const user = {
//     name: 'Maksim',
//     email: '',
//     password: '',

//     correctPassword() {
//         this.password = document.getElementById("enterPassword").value;
//         if (this.password.length >= 4 && this.password.length <= 16) {
//             return true;
//         } else {
//             alert('Помилка! Пароль повинен бути від 4 до 16 символів');
//             return false;
//         }
//     },

//     correctEmail() {
//         this.email = document.getElementById("enterEmail").value;
//         if (this.email.includes("@")) {
//             return true;
//         } else {
//             alert('Помилка! Пошта повинна містити "@"');
//             return false;
//         }
//     },

//     login() {
//         if (this.correctEmail() && this.correctPassword()) {
//             alert('Успішний вхід!');
//         } else {
//         }
//     }
// }

//! 4

const movie = {
  title: "Spider man",
  director: " Jon Watts ",
  year: 2017,
  rating: 9.0,


  ratingCheck() {
    document.getElementById("movieTitle").innerText = this.title;
    document.getElementById("movieDirector").innerText = this.director;
    document.getElementById("movieYear").innerText = this.year;
    document.getElementById("movieRating").innerText = this.rating;

    if (this.rating > 8) {
      document.getElementById("movieTitle").style.color = "green";
    } else {
        document.getElementById("movieTitle").style.color = "red";
    }
  },
};

movie.ratingCheck();
