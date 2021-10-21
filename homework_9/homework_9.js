class Student {
    constructor(university,course,fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5,4,4,5];
        this.exclude = false;
    }

    getInfo(){
        return(`Студент ${this.course} курсу ${this.university} ${this.fullName}`)
    }

    get getMarks(){
        return this.marks;
    }

    set setMarks(num){
        return this.marks.push(num);
    }

    getAverageMark(){
        return this.marks.reduce((sum,mark) => sum + mark)/this.marks.length;
    }

    dismiss(){
        if(this.exclude == true){
            return "Исключить студента"
        }
    };
    
   recover(){
        if(this.exclude == false){
            return "Возобновить обучение"
        }
    }
};

class BudgetStudent extends Student {
    constructor(university,course,fullName){
        super (university,course,fullName);
        setInterval(() => this.getScholarShip(),30000);
    }
    
    getScholarShip(){
        if(this.exclude == false && this.getAverageMark() > 4){
            console.log("Вы получили 1500 грн стипендии")
        }else{
            console.log("Подтяните средний бал")
        }
    }
};

let Vladimir = new Student("НТУ ХПИ", 4, "Шпитальный Владимир");
console.log(Vladimir.getInfo());
console.log(Vladimir.getMarks);
Vladimir.setMarks = 5;
console.log(Vladimir.getMarks);
console.log(Vladimir.getAverageMark());
Vladimir.dismiss();
let Vlad = new BudgetStudent("ХНУРЕ", 4, "Потапенко Владислав")

