        let student = {
            Name: "Ram",
            course: "MCA",

            show: function () {
                return (`${this.Name} , ${this.course}`)
            },
            marks: {
                maths: 90, english: 70, hindi: 80, computer: 95, science: 80
            }

        }
        console.log(student.show());
        console.log(student.marks.maths);
        console.log(student.marks.english);
        console.log(student.marks.hindi);
        console.log(student.marks.computer);