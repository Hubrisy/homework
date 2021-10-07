const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = function(students){
    const girls = [];
    const boys = [];
    const pairs = [];
    for(let i = 0; i < students.length; i++){
       if(students[i].endsWith('а')){
            girls.push(students[i]);
       }else{
            boys.push(students[i]);
       }
    };
    for(let i = 0; i < boys.length;i++){
        pairs.push([boys[i],girls[i]]);
    }
    return pairs;
};
console.log(getPairs(students));

const studentPairs = getPairs(students);

const projectThemes = function(studentPairs,themes){
   const pairsThemes = [];
   for(let i = 0; i < studentPairs.length;i++){
       pairsThemes.push([studentPairs[i][0],studentPairs[i][1]].concat([themes[i]]))
   } return pairsThemes;
}
console.log(projectThemes(studentPairs,themes));
const themesOfPairs = projectThemes(studentPairs,themes);

const personalMarks = function(){
    const firstMark = [students[0],marks[0]];
    const secondMark = [students[1],marks[1]];
    const thirdMark = [students[2],marks[2]];
    const fourthMark = [students[3],marks[3]];
    const fivethMark = [students[4],marks[4]];
    const sixthMark = [students[5],marks[5]];

    const studentsMarks = [firstMark,secondMark,thirdMark,fourthMark,fivethMark,sixthMark];
    return studentsMarks;
}
console.log(personalMarks());

const getRandomNum = function(x = 5){
    return Math.ceil(Math.random() * x);
};

const marksForPairs = function(themesOfPairs){
    const marksForThemes = [];
    for(let i = 0;i < themesOfPairs.length; i++){
        marksForThemes.push(themesOfPairs[i].concat(getRandomNum(x=5)));
    }
    return marksForThemes;
}
console.log(marksForPairs(themesOfPairs));
