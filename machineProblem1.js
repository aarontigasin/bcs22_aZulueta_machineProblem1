// ITCS227 Source Code Template for 2T AY 2022-2023
/*
      Program:      Computation fo Grades using Function
      Programmer:   Aaron B. Zulueta
      Section:      BCS22
      Start Date:   April 17, 2023
      End Date:     April 20, 2023
*/
let studentData = [];

for (let i = 0; i < 5; i++) {
  let enablingAssessment = [];
  let summativeAssessment = [];
  let studentName = prompt("Enter the name of the student: ");

  // check if student name has only letters and not numbers
  while (/\d/.test(studentName)) {
    studentName = prompt("Please input the name in the right format. Enter the name of the student: ");
  }

  for (let j = 0; j < 5; j++) {
    let input = parseInt(prompt(`Enter enabling assessment ${j + 1}:` ));
    
    // check if enabling assessment input is between 0 and 100
    while (isNaN(input) || input < 0 || input > 100) {
      input = parseInt(prompt("Please input a correct format. Enter enabling assessment: "));
    }

    enablingAssessment.push(input);
  }

  for (let j = 0; j < 3; j++) {
    let input = parseInt(prompt(`Enter summative assessment ${j + 1}:` ));

    // check if summative assessment input is between 0 and 100
    while (isNaN(input) || input < 0 || input > 100) {
      input = parseInt(prompt("Please input a correct format. Enter summative assessment: "));
    }

    summativeAssessment.push(input);
  }

  let finalExamination = parseInt(prompt("Enter final examination grade: "));

  // check if final exam input is between 0 and 100
  while (isNaN(finalExamination) || finalExamination < 0 || finalExamination > 100) {
    finalExamination = parseInt(prompt("Please input a correct format. Enter major exam grade: "));
  }

  let classParticipation = enablingAssessment.reduce((a, b) => a + b) / enablingAssessment.length;
  let summativeGrade = summativeAssessment.reduce((a, b) => a + b) / summativeAssessment.length;
  let gradeScore = (classParticipation * 0.3) + (summativeGrade * 0.3) + (finalExamination * 0.4);

  studentData.push({ 
    "Name of Student": studentName,
    "Class Participation": classParticipation.toFixed(2), 
    "Summative Assessment": summativeGrade.toFixed(2), 
    "Exam Grade": finalExamination.toFixed(2), 
    "Grade Score": gradeScore.toFixed(2),
    "Letter Grade": getLetterGrade(gradeScore)
  });
}

console.table(studentData);

function getLetterGrade(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
}
