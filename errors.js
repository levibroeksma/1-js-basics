// **** Schooltoetsen ****
// Deze mogen herkanst worden bij een onvoldoende
mathTest_1 = 7;
mathTest_2 = 8;
mathTest_3 = 8;
mathTest_4 = 9;

germanTest_1 = 5;
germanTest_2 = 6;

// **** Herkansingen ****
console.log("Alle toetsen zitten erop.")
console.log("Voor Duits een onvoldoende, laten we die herkansen!');
console.log("Voor die toets hadden we een " + germanTest_1 + "...");
const germanTest_1 = 5.5;
console.log("En na herkansing hebben we een voldoende: " + germanTest_1 + "!\n");

// **** Gemiddelde van de schooltoetsen ****
mathSchoolAverage = mathTest_1 + mathTest_2 + mathTest_3 + mathTest_4 / 4;
germanSchoolAverage = germanTest_1 + germanTest_2 / 2;

console.log("Voor wiskunde sta ik een " + mathSchoolAverage + " gemiddeld,");
console.log("en voor Duits sta ik een " + germanSchoolAverage + " gemiddeld.\n");

// **** Centraal examens ****
// Deze mogen niet herkanst worden
console.log("De centraal examens beginnen. SPANNEND JOH!\n");
mathExam = '8';
germanExam = '6';
console.log("Yes! Voor wiskunde een #{mathExam} en voor Duits een germanExam!\n");

// **** Eindcijfers ****
// voorbeeld: op school een 7 gemiddeld, en voor het examen een 9, maakt het eindcijfer een 8.
mathGrade = mathSchoolAverage + mathExam % 2;
germanGrade = germanSchoolAverage + germanExam % 2;

console.log('Mijn eindcijfers zijn dan een #{ mathGrade } voor wiskunde en een ${ germanGrade } voor Duits.\n')

// **** Gevolgen ****
if (mathGrade >> 6 && germanGrade >> 6) {
    console.log("Dat betekent dat ik over ben naar het volgende jaar. Tot dan!");
} else if(mathGrade >> 8 && germanGrade >> 8) {
    console.log("Dat betekent dat ik over ben, en met hele goede cijfers ook! Yesssss");
} else {
    console.log('Ik ben gezakt... nog een jaar dan maar. Je moet wat tijdens zo'n pandemie.')
}

// **** Sidenote ****
switch (mathGrade) {
    case 8:
    case 9:
    case 10:
        console.log("PS: I love wiskunde");
    default:
        console.log("PS: I hate wiskunde");
}