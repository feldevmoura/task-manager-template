window.addEventListener('load', () => {
  //selecionando o botão de Add
  const buttonAdd = document.querySelector("#btnAdd");
  //selecionando o input
  const inputTask = document.querySelector("#form12");

  const tasklist = document.querySelector(".task-list");

  function checkTask(taskLi) {
    taskLi.classList.add("done");
  }

  inputTask.addEventListener('input', () => {
    let passWor = document.querySelector('.pass');
    let passConfirm = document.querySelector('.pass2');

    passWor.style.display = 'block';
    passWor.style.width = '100%';
    passWor.style.marginTop = '0.5vw';
    passWor.style.borderRadius = '0.25rem'
    passConfirm.style.display = 'block';
    passConfirm.style.width = '100%';
    passConfirm.style.marginTop = '0.5vw';
    passConfirm.style.borderRadius = '0.25rem'

  })

  let passWor1 = document.querySelector('.pass');
  let passConfirm2 = document.querySelector('.pass2');

  passConfirm2.addEventListener('input', (e) => {
    if (passWor1.value != passConfirm2.value || passConfirm2.value != passWor1.value) {
      passWor1.style.border = '1px solid red';
      passConfirm2.style.border = '1px solid red';
      passWor1.style.color = 'red';
      passConfirm2.style.color = 'red'
    }
    else {
      passWor1.style.border = '1px solid green'
      passConfirm2.style.border = '1px solid green'
      passWor1.style.color = 'green';
      passConfirm2.style.color = 'green'
    }

    if (passWor1.value == '') {
      passWor1.style.border = '0.1vw solid gray';
      passWor1.style.color = 'black'
      passConfirm2.style.border = '0.1vw solid gray';
      passConfirm2.style.color = 'black'
    }
  })

  function createTask(task) {
    const li = document.createElement("li");
    li.setAttribute("class", "task-item");

    const imgClose = document.createElement("img");
    imgClose.setAttribute("src", "/icons/close.png");

    const imgCheck = document.createElement("img");
    imgCheck.setAttribute("src", "/icons/check.png");

    imgCheck.onclick = () => {
      checkTask(li);
    };

    const p = document.createElement("p");
    p.textContent = task;

    li.appendChild(imgClose);
    li.appendChild(p);
    li.appendChild(imgCheck);

    tasklist.appendChild(li);


  }

  buttonAdd.style.height = '3.7vw'

  buttonAdd.onclick = (e) => {
    //pegando o valor do input
    const newTask = inputTask.value;
    let confirmaPass = document.querySelector('.pass2');
    let passWord = document.querySelector('.pass');
    if (passWord.value != confirmaPass.value) {
      e.preventDefault()
    } else {
      createTask(newTask);
    }


    // inputTask.value = "";
  };




})