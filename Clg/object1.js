// const student={
//     sname:"Ram",sroll:10
// }
// console.log(student.sname,student.sroll);

let student = {
    Name: "Ram",
    course: "MCA",
    marks: {
        maths: 90,
        english: 70,
        hindi: 80,
        computer: 95,
        science: 80
    },
    show: function() {
        return (`${this.Name}, ${this.course}`);
    },
    calculateAverage: function() {
        let total = 0;
        let subjects = Object.keys(this.marks);
        for (let subject of subjects) {
            total += this.marks[subject];
        }
        return total / subjects.length;
    },
    displayMarks: function() {
        return Object.entries(this.marks).map(([subject, mark]) => `${subject}: ${mark}`).join(', ');
    }
};

console.log(student.show());
console.log(student.marks.maths);
console.log("Average Marks:", student.calculateAverage());
console.log("All Marks:", student.displayMarks());
