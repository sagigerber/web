class Student {
  constructor(name, dept, course) {
    this.name = name;
    this.department  = dept;
    this.course = course ? course : "web";
  }

  set department(dept) {
    switch(dept) {
      case "is":
        this.dept = "information systems";
        break;
      default:
        this.dept = dept;
        break;
    }
  }

  get department() {
    return `${this.name}'s department is: ${this.dept}`;
  }

}

let amit = new Student("amit", "is", "web");

let barak = new Student("barak", "information systems");

console.error(amit.department);