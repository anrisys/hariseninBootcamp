import appData from "./data/database.js";

const logoutButton = document.querySelector(".logout");
const addTaskBtn = document.querySelector(".add__card");
const taskForm = document.getElementById("taskForm");

logoutButton.addEventListener("click", userLogout);
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskTitle = document.getElementById("title").value;

    addNewTask(taskTitle);
    document.getElementById("title").value = "";
    formVisibility();
    refreshContainer("todo");
});

function getStarted() {
    displayUserIdentity();
    displayUserAppData();
    addTaskBtn.addEventListener("click", formVisibility);
}

function getUserIdentity() {
    const userData = localStorage.getItem("user");
    const userActive = JSON.parse(userData);
    return userActive;
}

function displayUserIdentity() {
    const userActive = getUserIdentity();

    const imgElm = document.querySelector(".avatar__icon");
    imgElm.src = userActive.imgUrl;

    const accName = document.querySelector(".account__name");
    accName.innerHTML = userActive.userFullName;
}

function getUserData() {
    const userActive = getUserIdentity();
    const username = userActive.username;
    const userAppData = appData[username];
    return userAppData;
}

function userLogout() {
    localStorage.removeItem("user");
    return (window.location.href = "login.html");
}

function createTaskCard(taskTitle, dateCreated) {
    const taskCard = document.createElement("div");

    taskCard.innerHTML = `<div class="task__card">
    <div class="task__title">${taskTitle}</div>
    <div class="task__deadline">
        <div class="task__deadline deadline__text">
            Created at :
        </div>
        <div class="task__dealine deadline__date">
            ${dateCreated}
        </div>
    </div>
    <div class="card__actions">
        <div class="delete__task">
            <div class="delete__icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                >
                    <path
                        d="M1.25 18.125C1.25 18.6223 1.44754 19.0992 1.79917 19.4508C2.15081 19.8025 2.62772 20 3.125 20H14.375C14.8723 20 15.3492 19.8025 15.7008 19.4508C16.0525 19.0992 16.25 18.6223 16.25 18.125V5H1.25V18.125ZM11.875 8.125C11.875 7.95924 11.9408 7.80027 12.0581 7.68306C12.1753 7.56585 12.3342 7.5 12.5 7.5C12.6658 7.5 12.8247 7.56585 12.9419 7.68306C13.0591 7.80027 13.125 7.95924 13.125 8.125V16.875C13.125 17.0408 13.0591 17.1997 12.9419 17.3169C12.8247 17.4342 12.6658 17.5 12.5 17.5C12.3342 17.5 12.1753 17.4342 12.0581 17.3169C11.9408 17.1997 11.875 17.0408 11.875 16.875V8.125ZM8.125 8.125C8.125 7.95924 8.19085 7.80027 8.30806 7.68306C8.42527 7.56585 8.58424 7.5 8.75 7.5C8.91576 7.5 9.07473 7.56585 9.19194 7.68306C9.30915 7.80027 9.375 7.95924 9.375 8.125V16.875C9.375 17.0408 9.30915 17.1997 9.19194 17.3169C9.07473 17.4342 8.91576 17.5 8.75 17.5C8.58424 17.5 8.42527 17.4342 8.30806 17.3169C8.19085 17.1997 8.125 17.0408 8.125 16.875V8.125ZM4.375 8.125C4.375 7.95924 4.44085 7.80027 4.55806 7.68306C4.67527 7.56585 4.83424 7.5 5 7.5C5.16576 7.5 5.32473 7.56585 5.44194 7.68306C5.55915 7.80027 5.625 7.95924 5.625 8.125V16.875C5.625 17.0408 5.55915 17.1997 5.44194 17.3169C5.32473 17.4342 5.16576 17.5 5 17.5C4.83424 17.5 4.67527 17.4342 4.55806 17.3169C4.44085 17.1997 4.375 17.0408 4.375 16.875V8.125ZM16.875 1.25001H12.1875L11.8203 0.519538C11.7425 0.363372 11.6227 0.232008 11.4743 0.140225C11.326 0.0484421 11.1549 -0.00011828 10.9805 6.84872e-06H6.51562C6.34155 -0.000662313 6.17081 0.047717 6.02297 0.139602C5.87512 0.231487 5.75615 0.363161 5.67969 0.519538L5.3125 1.25001H0.625C0.45924 1.25001 0.300268 1.31585 0.183058 1.43306C0.065848 1.55027 0 1.70925 0 1.87501L0 3.12501C0 3.29077 0.065848 3.44974 0.183058 3.56695C0.300268 3.68416 0.45924 3.75001 0.625 3.75001H16.875C17.0408 3.75001 17.1997 3.68416 17.3169 3.56695C17.4341 3.44974 17.5 3.29077 17.5 3.12501V1.87501C17.5 1.70925 17.4341 1.55027 17.3169 1.43306C17.1997 1.31585 17.0408 1.25001 16.875 1.25001Z"
                        fill="#1E1E1E"
                        fill-opacity="0.58"
                    />
                </svg>
            </div>
            <div class="delete__text">Delete</div>
        </div>
        <div class="edit__task">
            <div class="edit__icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                >
                    <path
                        d="M15.2016 13.4736L16.4108 12.2238C16.5997 12.0285 16.9285 12.1652 16.9285 12.4464V18.1253C16.9285 19.1603 16.1161 20 15.1147 20H1.81376C0.812415 20 0 19.1603 0 18.1253V4.37729C0 3.34228 0.812415 2.50256 1.81376 2.50256H12.1484C12.4167 2.50256 12.5528 2.83845 12.3638 3.03764L11.1547 4.28746C11.098 4.34604 11.0224 4.37729 10.9393 4.37729H1.81376V18.1253H15.1147V13.6923C15.1147 13.6103 15.1449 13.5322 15.2016 13.4736ZM21.119 5.59195L11.1962 15.8483L7.78029 16.2388C6.79028 16.3521 5.94764 15.4889 6.05722 14.4578L6.43509 10.9271L16.3579 0.6708C17.2232 -0.2236 18.6213 -0.2236 19.4829 0.6708L21.1152 2.35805C21.9806 3.25245 21.9806 4.70146 21.119 5.59195ZM17.3857 6.79881L15.1903 4.52961L8.1695 11.7903L7.89366 14.3407L10.3611 14.0556L17.3857 6.79881ZM19.8343 3.68598L18.2019 1.99873C18.047 1.8386 17.7938 1.8386 17.6426 1.99873L16.475 3.20559L18.6704 5.47478L19.8381 4.26793C19.9892 4.10389 19.9892 3.84612 19.8343 3.68598Z"
                        fill="#1E1E1E"
                        fill-opacity="0.58"
                    />
                </svg>
            </div>
            <div class="edit__text">Edit</div>
        </div>
        <div class="move__task">
            <div class="move__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
        <path d="M29.6084 8.24618L22.1083 14.5655C21.3177 15.2317 20 14.7378 20 13.7547V10.4105C12.4701 10.4556 9.29344 12.0422 11.418 18.3734C11.6515 19.0692 10.7489 19.608 10.1156 19.1788C8.08604 17.8032 6.25 15.1722 6.25 12.5164C6.25 5.82755 12.3749 4.5002 20 4.46247V1.11587C20 0.131895 21.3186 -0.360418 22.1083 0.305045L29.6084 6.62453C30.1303 7.06428 30.1307 7.80605 29.6084 8.24618ZM20 17.6184V20.819H3.33333V5.94828H5.98521C6.06937 5.94824 6.15266 5.93301 6.23006 5.90352C6.30746 5.87403 6.37738 5.83088 6.43563 5.77667C7.21443 5.05321 8.11464 4.48059 9.0926 4.02583C9.67229 3.75625 9.4575 2.97415 8.8038 2.97415H2.5C1.11927 2.97415 0 3.97281 0 5.20475V21.5625C0 22.7944 1.11927 23.7931 2.5 23.7931H20.8333C22.2141 23.7931 23.3333 22.7944 23.3333 21.5625V17.4356C23.3333 17.0505 22.9064 16.7819 22.4994 16.9104C21.9288 17.0904 21.3178 17.1443 20.7187 17.0673C20.3401 17.0187 20 17.2771 20 17.6184Z" fill="black"/>
</svg>
            </div>
            <div class="move__text">Move</div>
        </div>
    </div>
</div>`;
    return taskCard;
}

function displayCard(sectionName) {
    const userTodoArr = getUserData().todo;
    const userDoingArr = getUserData().doing;
    const userDoneArr = getUserData().done;

    let preSectionArr;
    let curSectionArr;
    let nextSectionArr;
    let preSectionName;
    let curSectionName;
    let nextSectionName;
    if (sectionName == "todo") {
        preSectionName = "done";
        curSectionName = "todo";
        nextSectionName = "doing";
        preSectionArr = userDoneArr;
        curSectionArr = userTodoArr;
        nextSectionArr = userDoingArr;
    } else if (sectionName == "doing") {
        preSectionName = "todo";
        curSectionName = "doing";
        nextSectionName = "done";
        preSectionArr = userTodoArr;
        curSectionArr = userDoingArr;
        nextSectionArr = userDoneArr;
    } else {
        preSectionName = "doing";
        curSectionName = "done";
        nextSectionName = "todo";
        preSectionArr = userDoingArr;
        curSectionArr = userDoneArr;
        nextSectionArr = userTodoArr;
    }

    curSectionArr.forEach((task, index) => {
        const taskCard = createTaskCard(task.title, task.created);
        const todo_container = document.querySelector(
            `.${sectionName}--container`
        );
        todo_container.appendChild(taskCard);

        const deleteContainer = taskCard.querySelector(".delete__task");
        const editContainer = taskCard.querySelector(".edit__task");
        const moveContainer = taskCard.querySelector(".move__task");

        deleteContainer.addEventListener(
            "click",
            deleteTask(curSectionArr, curSectionName, index)
        );
        editContainer.addEventListener("click", editTask(task, curSectionName));
        moveContainer.addEventListener("click", function () {
            nextSectionArr.push(task);
            curSectionArr.splice(index, 1);
            refreshContainer(curSectionName);
            refreshContainer(nextSectionName);
        });
    });
}

function editTask(task, sectionName) {
    return function () {
        const editForm = document.querySelector(".edit__form");
        editForm.classList.toggle("invisible");

        const submitNewTitleBtn = document.querySelector(".form__edit");

        submitNewTitleBtn.addEventListener("submit", function (event) {
            event.preventDefault();
            const newTitle = document.getElementById("newTitle").value;
            task.title = newTitle;
            editForm.classList.add("invisible");
            refreshContainer(sectionName);
        });
    };
}

function deleteTask(section, sectionName, index) {
    return function () {
        const deleteVal = document.querySelector(".delete__validation");
        deleteVal.classList.toggle("invisible");

        const yesOption = document.querySelector(".option__yes");
        const noOption = document.querySelector(".option__no");

        yesOption.addEventListener("click", function () {
            section.splice(index, 1);
            deleteVal.classList.add("invisible");
            refreshContainer(sectionName);
        });

        noOption.addEventListener("click", function () {
            deleteVal.classList.add("invisible");
        });
    };
}

function displayUserAppData() {
    displayCard("todo");
    displayCard("doing");
    displayCard("done");
}

function refreshContainer(sectionName) {
    const container = document.querySelector(`.${sectionName}--container`);

    container.innerHTML = "";
    displayCard(sectionName);
}

// Add new task

function formVisibility() {
    const addTaskContainer = document.querySelector(".form__container");
    addTaskContainer.classList.toggle("invisible");
}

function getCreatedAt() {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    const createdAt = `${date} ${month} ${year}`;
    return createdAt;
}

function addNewTask(title) {
    const userTodoTask = getUserData().todo;
    const created = getCreatedAt();

    userTodoTask.push({
        title: title,
        created: created,
    });
}

getStarted();
