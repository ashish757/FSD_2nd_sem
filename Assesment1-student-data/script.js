let stdName = document.getElementById("stdName");
let stdRoll = document.getElementById("stdRoll");
let totalBtn = document.getElementById("totalBtn");

let mathMarks = document.getElementById("mathMarks");
let scienceMarks = document.getElementById("scienceMarks");
let englishMarks = document.getElementById("englishMarks");


let table = document.querySelector("table");
let info = document.getElementById("info");

let stdData = localStorage.getItem("stdData") ? JSON.parse(localStorage.getItem("stdData")) : [];
displayStudents(stdData);

function addStudent() {
    let name = stdName.value;
    let id = stdRoll.value;
    let math = mathMarks.value;
    let science = scienceMarks.value;
    let english = englishMarks.value;
    let avg = ((parseFloat(math) || 0) + (parseFloat(science) || 0) + (parseFloat(english) || 0)) / 3;

    if (name && id && math && science && english) {
        stdData.push({ name, id, math, science, english, avg });
        localStorage.setItem("stdData", JSON.stringify(stdData));
        stdName.value = "";
        stdRoll.value = "";
        mathMarks.value = "";
        scienceMarks.value = "";
        englishMarks.value = "";
        displayStudents(stdData);
    } else {
        alert("Please fill in all fields.");
    }

}

function initTable(table) {
    table.innerHTML = `
        <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Math Marks</th>
            <th>Science Marks</th>
            <th>English Marks</th>
            <th>Average Marks</th>
        </tr>
    `;
}

function displayStudents(stdData) {
    initTable(table);

    stdData.forEach(std => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${std.id}</td>
            <td>${std.name}</td>
            <td>${std.math}</td>
            <td>${std.science}</td>
            <td>${std.english}</td>
            <td>${std.avg.toFixed(2)}</td>
        `;
        table.appendChild(row);
    });
}

document.getElementById("addBtn").addEventListener("click", addStudent);
document.getElementById("displayBtn").addEventListener("click", () => displayStudents(stdData));


totalBtn.addEventListener("click", () => {
    let count = stdData.length;
    info.innerHTML = `Total Students: <strong>${count}</strong>`;
});

let avgMarksBtn = document.getElementById("avgMarksBtn");
avgMarksBtn.addEventListener("click", () => {
    let totalMath = 0;
    let totalScience = 0;
    let totalEnglish = 0;
    stdData.forEach(std => {
        totalMath += parseFloat(std.math);
        totalScience += parseFloat(std.science);
        totalEnglish += parseFloat(std.english);
    });
    let avgMath = (totalMath / stdData.length).toFixed(2);
    let avgScience = (totalScience / stdData.length).toFixed(2);
    let avgEnglish = (totalEnglish / stdData.length).toFixed(2);
    info.innerHTML = `
        Average Marks:<br>
        Math: <strong>${avgMath}</strong><br>
        Science: <strong>${avgScience}</strong><br>
        English: <strong>${avgEnglish}</strong>
    `;

});


let avgFilterBtn = document.getElementById("avgFilterBtn");
avgFilterBtn.addEventListener("click", () => {
    let filteredStudents = stdData.filter(std => std.avg > 80);
    if (filteredStudents.length > 0) {
        info.innerHTML = `Students with Average Marks above 80: <strong>${filteredStudents.length}</strong>`;
    } else {
        info.innerHTML = `No students with Average Marks above 80.`;
    }
    displayStudents(filteredStudents);
});


let failedStudentsBtn = document.getElementById("failedStudentsBtn");
failedStudentsBtn.addEventListener("click", () => {
    let failedStudents = stdData.filter(std => std.avg < 40);
    if (failedStudents.length > 0) {
        info.innerHTML = `Failed Students (Average Marks below 40): <strong>${failedStudents.length}</strong>`;
    } else {
        info.innerHTML = `No failed students with Average Marks below 40.`;
    }
    displayStudents(failedStudents);
});