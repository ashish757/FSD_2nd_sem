let data = {
      name: "Ashish",
      age: 20,
      isStudent: true,
      hobbies: ["coding", "gaming", "traveling"],
      printInfo: function() {
            console.log(`Name: ${this.name}, Age: ${this.age}, Is Student: ${this.isStudent}`);
      }
}

data.printInfo();

console.log(data.name);




let marks = [85, 90, 78, 92, 88];
let totalMarks = marks.reduce((total, mark) => total + mark, 0);
function incTenPercent(marks) {
      return marks.map(mark => mark * 1.1);
}

let increasedMarks = incTenPercent(marks);

console.log("Total Marks:", totalMarks);
console.log("Increased Marks:", increasedMarks);     