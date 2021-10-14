const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

//task1 #1

function getSubject(student){
  let studentSubjects = [];
  for(let subjects in student.subjects){
    let subject = subjects[0].toUpperCase() + subjects.slice(1);
    subject = subject.split('_').join(' ');
    studentSubjects.push(subject);
  }return studentSubjects;
}
console.log(getSubject(students[0]));

//task #2

function getAverage(student){
  let averageMarks = [];
  let values;

  for(let marks in student.subjects){
    averageMarks.push(...student.subjects[marks]);
    values = averageMarks.reduce((sum,mark) => sum + mark)/averageMarks.length;
  }return values.toFixed(2);
}
  console.log(getAverage(students[0]));

//task #3

function getStudentInfo(student){
  return (("Name: " + student.name + ",") + ("Course: "+ student.course + ",")+ ("Average Mark: " + getAverage(student)));
}
  
console.log(getStudentInfo(students[2]));

//task #4

function getStudentNames(student){
  return student.map((student) =>{
    return student.name;
  }).sort();
}
console.log(getStudentNames(students));

//task #5

function getBestStudent(students){
  return students.reduce((x, y) =>
      getAverage(x) > getAverage(y) ? x : y
    ).name;
  }
  console.log(getBestStudent(students));

//task #6

function calculateWords(word){
  let value = {};
  let lowerCase = word.toLowerCase().split('');

  lowerCase.map(item => (!value[item] ? value[item] = 1 : value[item]++));
  return value;
}
console.log(calculateWords("word"));

