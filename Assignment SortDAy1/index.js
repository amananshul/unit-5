// const myname: string = "Aman";
// console.log("hello typescript")
// const myage: number = 12;
// console.log("hello typesc")
// let my: number = 10;
// const mynaame: string = "anshul"
// let isMarried = false;
// if (isMarried == false) {
//     console.log("true")
// }
// else {
//     console.log("false")
// }
// const arr: string[] = ["a", "s"]
// const arr2 = [...arr, 3]
// console.log(arr2)
// const add = (a: any, b: any) => {
//     return a + b
// }
// add(0, 5)
var teacherData = [
    {
        id: 1,
        name: "Odelinda",
        age: 22,
        subject: "Chemistry",
        numberOfStudents: 2906,
        salary: 781
    },
    {
        id: 2,
        name: "Cherrita",
        age: 27,
        subject: "Maths",
        numberOfStudents: 27,
        salary: 523
    },
    {
        id: 3,
        name: "Mariam",
        age: 18,
        subject: "Physics",
        numberOfStudents: 37904,
        salary: 1560
    },
    {
        id: 4,
        name: "Skylar",
        age: 32,
        subject: "Physics",
        numberOfStudents: 91,
        salary: 989
    },
    {
        id: 5,
        name: "Myra",
        age: 12,
        subject: "Maths",
        numberOfStudents: 2260,
        salary: 60676
    },
];
var userArr = [
    {
        name: 'Anshul',
        age: 26,
        id: 1,
        salary: 6046
    },
    {
        name: 'pulp',
        age: 25,
        id: 2,
        salary: 9145
    },
    {
        name: 'rish',
        age: 34,
        id: 4,
        salary: 17099
    },
    {
        name: 'san',
        age: 29,
        id: 3,
        salary: 11054
    },
];
function bubbleSort(a, par) {
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = 0; j < a.length - i - 1; j++) {
            if (a[j][par] > a[j + 1][par]) {
                var tem = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tem;
            }
        }
    }
    return a;
}
console.log(bubbleSort(teacherData, 'salary'));
// const divide = <T>(arr: T[], key: string, start: number, end: number) => {
//     const pivot = arr[end][key];
//     let pivotIndex = start;
//     for (let i = start; i < end; i++) {
//       if (arr[i][key] < pivot) {
//         [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//         pivotIndex++;
//       }
//     }
//     [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
//     return pivotIndex;
//   };
//Custom Sort
//   var sort = <T>(
//     arr: T[],
//     key: keyof User | keyof Teacher,
//     start: number,
//     end: number
//   ) => {
//     if (start >= end) {
//       return;
//     }
//     let index = divide(arr, key, start, end);
//     sort(arr, key, start, index - 1);
//     sort(arr, key, index + 1, end);
//   };
//   sort<User>(userArr, "salary", 0, userArr.length - 1);
//   console.log(userArr);
//   sort<Teacher>(teacherData, "numberOfStudents", 0, teacherData.length - 1);
//   console.log(teacherData);
