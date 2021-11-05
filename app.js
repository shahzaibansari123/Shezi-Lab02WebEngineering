const btnRowColor = document.getElementById('addRowColor');
btnRowColor.addEventListener('click', function (event) {
    var hrow = prompt('Enter the row# you want to highlight from 1-4');
    const row = document.querySelector('#row' + hrow);
    row.style.backgroundColor = 'yellow';
    row.style.color = 'black';
});

function addNewCourse() {
    const body = document.querySelector('tbody');
    var crs = ["AI", "Introduction to Computing", "Probablity and Statistics",
        "SRE", "Operating System", "OOPS"]
    const row = document.createElement('tr');
    const tdCourseID = document.createElement('td');
    const tdCourseName = document.createElement('td');
    const tdcreditHrs = document.createElement('td');
    const tdYearTaken = document.createElement('td');
    const courseId = ((Math.round(Math.random() * 9)) + 0);
    const courseName = ((Math.round(Math.random() * 5)) + 0);
    const creditHrs = ((Math.round(Math.random() * (3 - 2 + 1))) + 2);
    const yearTaken = ((Math.round(Math.random() * (2021 - 2019 + 1))) + 2019);
    row.id = 'row' + courseId;

    tdCourseID.innerHTML = 'Course ' + courseId;
    tdCourseName.innerHTML = crs[courseName];
    tdcreditHrs.innerHTML = creditHrs
    tdYearTaken.innerHTML = yearTaken;

    row.appendChild(tdCourseID);
    row.appendChild(tdCourseName);
    row.appendChild(tdcreditHrs);
    row.appendChild(tdYearTaken);

    body.appendChild(row);
}

function deleteCourse() {
    const courseId = prompt('Please enter course Id');
    if (courseId) {
        const row = document.getElementById('row' + courseId);
        if (row) {
            const body = document.querySelector('tbody');
            body.removeChild(row);
        }
    }
}

function updateCourse() {
    const newCourseYear = prompt('Please enter course# and new year delimited by comma');
    if (newCourseYear) {
        const courseId = newCourseYear.split(',')[0];
        const courseYear = newCourseYear.split(',')[1];
        const row = document.getElementById('row' + courseId);
        if (row) {
            const tdYearTaken = row.querySelector('#row' + courseId + ' > td:nth-child(4)');
            tdYearTaken.innerHTML = courseYear;
        }
    }
}


function logIn() {
    var loginID = document.getElementById('loginID').value
    console.log(loginID)
    var url = window.location.href + "/" + loginID
    console.log(url)
    if (url.includes(loginID)) {
        if (loginID != "") {
            alert("success")
            window.location.href = 'profile.html'
        }
    }
}


function moveBackward() {
    window.history.back()
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = window.history.back();
}


























// var loginID= document.getElementById('loginID')
// var password= document.getElementById('password')
// var checkbox= document.getElementById('checkbox')
// var valuesArr = []
// function findInputs() {
//     valuesArr.push(loginID.value)
//     valuesArr.push(password.value)
//     console.log(valuesArr)
//     validateinput()
// }
// function validateinput(){
//         console.log(!valuesArr.includes(''))
//         if(valuesArr.includes('')){
//             alert("enter your values")
// }
// }

// function okbtn(){
//     alert("Login is Clicked")
// }
// function cancelbtn(){
//     alert("Cancel is Clicked")
// }

// function logIn(){
// if (checkbox.checked){
//     alert("Logged in successfully with Remember Me marked as set")
//     console.log('Logged in successfully with Remember Me marked as set')
// }
// else{
//     alert("logged in successfully")
//     console.log('Logged in successfully ')
// }

// window.alert("Success")
// // window.open("profile.html")
// var loginID= document.getElementById('loginID').value
// var url = window.location.href
// console.log(url)
// location.href(window.location.href + `${loginID}`)
// if (url + `q?ID=${loginID}`){
//     window.open("profile.html")
// }
// else{
//     window.location.href
// }

function removeallcourses() {
    var studentCourses = document.getElementById("studentCourses")
    studentCourses.innerHTML = ""
}

// }


function setcookie() {
    var loginID = document.getElementById('loginID').value
    var name = document.getElementById('name').value
    var pic1 = document.getElementById('pic1')
    // var username= document.getElementById('username')
    if (checkbox.checked) {
        console.log('Logged in successfully with Remember Me marked as set')
        document.cookie = loginID + " , " + name
        console.log(document.cookie)
        pic1.innerHTML = "<img src='pic.png' width='100px' height='150px'/>"
        setTimeout(function () {
            window.location = "profile.html"
        }, 10000);
        // username.innerHTML=`user name: ${loginID}`

    }
    else {
        console.log('Logged in successfully ')
        console.log(document.cookie)
        setTimeout(function () {
            window.location = "profile.html"
        }, 2000);
    }
}


// function clearAll(){
//     var loginID= document.getElementById('loginID').value=""
// var password= document.getElementById('password').value=""

// }
