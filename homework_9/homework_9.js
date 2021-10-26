class Student {
    constructor(university,course,fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5,4,4,5];
        this.exclude == false;
    }

    getInfo(){
        if(this.exclude == false){
            return(`Студент ${this.course} курсу ${this.university} ${this.fullName}`)
        }
    }

    get theMarks(){
        if(this.exclude == false){
            return this.marks
        }
    }

    set theMarks(num){
        if(this.exclude == false){
            return this.marks.push(num)
        }
    }

    getAverageMark(){
        if(this.exclude == false){
        return this.marks.reduce((sum,mark) => sum + mark)/this.marks.length;
        }
    }
    dismiss(){
        this.exclude == true;
        return "отчислить студента"
    }
    recover(){
        this.exclude;
        return "возобновить обучение"
    }
};

class BudgetStudent extends Student {
    constructor(university,course,fullName){
        super (university,course,fullName);
        setInterval(() => this.getScholarShip(),30000);
    }
    
    getScholarShip(){
        if(this.exclude == false && this.getAverageMark() >= 4){
            console.log("Вы получили 1500 грн стипендии")
        }else{
            console.log("Подтяните средний бал")
        }
    }
};

let Vladimir = new Student("НТУ ХПИ", 4, "Шпитальный Владимир");
console.log(Vladimir.getInfo());
console.log(Vladimir.theMarks);
Vladimir.theMarks = 5;
console.log(Vladimir.theMarks);
console.log(Vladimir.getAverageMark());
Vladimir.dismiss();
let Vlad = new BudgetStudent("ХНУРЕ", 4, "Потапенко Владислав")

