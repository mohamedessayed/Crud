var form = document.getElementById('taskDataForm');

//step 1: catch inputs fields

var taskInput = document.getElementById('exampleInputTask1')
var dateInput = document.getElementById('exampleInputDate1')

//step 2: init an array to store array ob object
var taskList = [];

// step 3: catch tbody element

var tableBody = document.querySelector('.customeClass tbody')

//Global variable to detecte editable element

var editIndex = -1;

var errorList = []

if (localStorage.getItem('taskList')) {
    taskList = JSON.parse(localStorage.getItem('taskList'))
    readListData() //to show data into table
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    errorList = [];
    
    validateInput(taskInput)
    validateInput(dateInput)

    
    if ( errorList.length == 0 ) {
        if (form.dataset.role === 'store') {
            storeNewData() //to add new date to array
        } else{
            updateListData(); //to update exist data
        }
    } else {
        for (var error of errorList) {
            error.classList.add('is-invalid')
        }
        alert('please all fileds are required')
        return false;
    }

    

    clearFormInpust() //to clear inputs
    readListData() //to show data into table

})

function storeNewData(){
    taskList.unshift({task:taskInput.value, date:dateInput.value});

    localStorage.setItem('taskList',JSON.stringify(taskList))
}

function clearFormInpust(){
    taskInput.value =''
    dateInput.value=''
}


function readListData(){
    tableBody.innerHTML =''
    
    for (let index = 0; index < taskList.length; index++) {
        var element = taskList[index];
        var htmlCollectionCode =`<tr>
                    <th scope="row">${index}</th>
                    <td>${element.task}</td>
                    <td>${element.date}</td>
                    <td>
                        <button onclick="deleteListElement(${index});" class="btn btn-danger">Delete</button>
                        <button onclick="editListElement(${index})" class="btn btn-warning">Edit</button>
                    </td>
                </tr>`

                tableBody.insertAdjacentHTML('afterbegin',htmlCollectionCode)
    }
}


function deleteListElement(index){
    taskList.splice(index,1)
    readListData(); // to read new data after delete element
    localStorage.setItem('taskList',JSON.stringify(taskList))

}


function editListElement(index){
    editIndex = index;

    var element = taskList[index];

    taskInput.value = element.task
    dateInput.value = element.date


    //toggle form dataset role from store to update

    form.dataset.role = 'update'
}


function updateListData(){
    taskList.splice(editIndex,1,{task:taskInput.value, date:dateInput.value})

    form.dataset.role = 'store'

    localStorage.setItem('taskList',JSON.stringify(taskList))

}


function validateInput(input){
    if (input.value === '') {
        errorList.push(input)
        return false
    }

    input.classList.remove('is-invalid')
    input.classList.add('is-valid')

    return true
}





