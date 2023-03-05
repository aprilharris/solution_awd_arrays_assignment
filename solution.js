// # Class Assignment 5: Arrays Practice!
// **Step 1:** 
// Write the following into a single array.

// let vegetable1 = "broccoli";
// let vegetable2 = "carrots";
// let vegetable3 = "celery"; 

// const vegetables = ['broccoli', 'carrots', 'celery'];
// console.log(`VEGETABLES ARRAY: ${vegetables}`);

// **Step 2:**  
// Add an additional vegetable to the `vegetables` variable.
// vegetables.push('dill');
// console.log(`VEGETABLES ARRAY: ${vegetables}`);
// **Step 3:** 
// Can you make the vegetable you added appear first in the list?
// vegetables[0] = 'dill';
// vegetables.unshift('dill');
// console.log(`VEGETABLES ARRAY: ${vegetables}`);

// **Step 4:**
// Task 1: Update the variable `songList` so that it is an array with at least 3 song titles.
let songList = ['We Belong Together', 'Shake It Off', 'Hero'];
// console.log(songList);

/* Task 2: Update the variable `classList` so that it is an array with 4 students (including yourself) in your class.*/
    let classList = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'];
    // console.log(classList);
/* - Task 3: Update the variable `teacherList` so that it is an array with all the adults in your class.*/
    let teacherList = ['Andrew', 'Abrar', 'April'];
    // console.log(teacherList);
/* - Task 4: Update the variable `familyAges` so that it is an array with a list of ages (numbers) of your family members. */
let familyAges = [1, 2, 35, 62];

// **Step 5:**
/* Task 5: Update the variable `favSong` to retrieve the array element of your favorite song in the songList array (Task 1). */
let favSong = songList[1];
console.log(`Favorite song: ${favSong}`);

// - Task 6: Update the variable `bestStudent` to retrieve your name from the classList array (Task 2).
let bestStudent = classList[3];
console.log(`Best student: ${bestStudent}`);

// - Task 7: Update the variable `tallestTeacher` to retrieve the array element of the tallest teacher in the teacherList array (Task 3).
let tallestTeacher = teacherList[1];
console.log(`Tallest teacher: ${tallestTeacher}`);
// - Task 8: Update the variable `oldestMember` to retrieve the array element of the oldest member of your family in the familyAges array. (Task 4)
let oldestMember = Math.max(...familyAges);
console.log(oldestMember);

// ### Finished early?
// - Create an array that combines both the class list and the teacher list without rewriting the names of students and teachers.
// - Google how to combine arrays you've already created.

let combinedList = classList.concat(teacherList);
console.log(`Combined list: ${combinedList}`)
/*Hint:
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"] */
