
// Hex function for ArrayBuffer
function hex(buff) {
    return [].map.call(new Uint8Array(buff), b => ('00' + b.toString(16)).slice(-2)).join('');
}

// Base64 encode
function encode64(buff) {
    return btoa(new Uint8Array(buff).reduce((s, b) => s + String.fromCharCode(b), ''));
}

// HASH FUNCTION
function hash(algo, str) {
    return crypto.subtle.digest(algo, new TextEncoder().encode(str));
}

/*
hash('SHA-256', 'Hello').then(hashed => {
    console.log(hashed); // ArrayBuffer

    console.log(hex(hashed)); // 185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969
    console.log(encode64(hashed)); // GF+NsyJx/iX1Yab8k4suJkMG7DBO2lGAB9F2SCY4GWk=

});
*/


//CLICK EVENT HANDLER - DISPLAYS SIGN UP FORM
const signup = document.getElementById("signupButton");
signup.addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("loginDiv").classList.add("hidden");
    let element = document.getElementById("signupDiv");
    element.classList.remove("hidden");
    let element2 = document.getElementById("dashboard");
    element2.classList.add("hidden");
    document.getElementById("loginButton").classList.remove("hidden");
    document.getElementById("logoutButton").classList.add("hidden");
    document.getElementById("accountDetailsButton").classList.add("hidden");

})

//CLICK EVENT HANDLER - DISPLAYS LOGIN FORM
const login = document.getElementById("loginButton");
login.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("signupDiv").classList.add("hidden");
    document.getElementById("loginDiv").classList.remove("hidden");
})


//CLICK EVENT HANDLER - LOGOUT
const logout = document.getElementById("logoutButton");
logout.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("signupDiv").classList.add("hidden");
    document.getElementById("loginDiv").classList.add("hidden");

    document.getElementById("dashboardLoggedInButton").classList.add("hidden");

    document.getElementById("accountDetailsButton").classList.add("hidden");
    document.getElementById("loginButton").classList.remove("hidden");
    document.getElementById("logoutButton").classList.add("hidden");
    document.getElementById("accountDetailsButton").classList.add("hidden");
    document.getElementById("signupButton").classList.remove("hidden");
    document.getElementById("accountDetailsDiv").classList.add('hidden');
})

//CLICK EVENT HANDLER - DISPLAY ACCOUNT DETAILS
const accountdetails = document.getElementById("accountDetailsButton");
accountdetails.addEventListener("click", function (event) {
    event.preventDefault();


    removeElementsByClass("messagealert");

    document.getElementById("accountDetailsButton").classList.add("hidden");
    document.getElementById("dashboardLoggedInButton").classList.remove("hidden");

    document.getElementById("dashboard").classList.add('hidden');
    document.getElementById("accountDetailsDiv").classList.remove('hidden');

    document.getElementById("accountDetailsEmail").value = document.getElementById("emailDashboard").value;

    //retrieve the user key from storage
    Email = document.getElementById("emailDashboard").value;
    User = localStorage.getItem(Email);

    //parse user back to object from local storage
    const usr1 = JSON.parse(User);

    document.getElementById("accountDetailsFirstName").value = usr1["firstName"];
    document.getElementById("accountDetailsFirstName").readOnly = true;
    document.getElementById("accountDetailsFirstName").style.backgroundColor = "lightblue";

    document.getElementById("accountDetailsLastName").value = usr1["lastName"];
    document.getElementById("accountDetailsLastName").readOnly = true;
    document.getElementById("accountDetailsLastName").style.backgroundColor = "lightblue";

    document.getElementById("accountDetailsEmail").readOnly = true;
    document.getElementById("accountDetailsEmail").style.backgroundColor = "lightblue";

    document.getElementById("accountDetailsPassword").value = "HASHED"
    document.getElementById("accountDetailsPassword").readOnly = true;
    document.getElementById("accountDetailsPassword").style.backgroundColor = "lightblue";

})


//New email, validate and update
const EmailValidateUpdate = (field, alerttxt) => {
    with (field) {
        apos = value.indexOf("@");
        dotpos = value.lastIndexOf(".");
        if (apos < 1 || dotpos - apos < 2) {

            const element = document.getElementById("accountDetailsEmail");
            const text = alerttxt

            MessageAlert(element, text, "newEmail");

            return false;
        }

        //A check to determine if a user already exists with the email address, if true code is exit.
        else if
            (document.getElementById("newEmail").value in localStorage) {

            const element = document.getElementById("newEmail");
            const text = "A user account already exists with this email address.  Please try a different email address."

            MessageAlert(element, text, "newEmail");

            return false;
        } else {

            //retrieve the user key from storage
            Email = document.getElementById("accountDetailsEmail").value;
            User = localStorage.getItem(Email);
            const newEmail = document.getElementById("newEmail").value;
            //parse user back to object from local storage
            const usr1 = JSON.parse(User);
            usr1["email"] = newEmail;
            localStorage.setItem(newEmail, JSON.stringify(usr1));
            localStorage.removeItem(Email);
            document.getElementById("accountDetailsEmail").value = document.getElementById("newEmail").value;
            document.getElementById("newEmail").value = "";

            const element = document.getElementById("accountDetailsEmail");
            const text = "Email has been updated"

            MessageAlert(element, text, "newEmail");

        }
    }
}

//New first name, validation and updating
const FirstNameValidateUpdate = () => {
    const newFirstName = document.getElementById("newFirstName").value;

    //retrieve the user key from storage
    Email = document.getElementById("accountDetailsEmail").value;
    User = localStorage.getItem(Email);

    //parse user back to object from local storage
    var usr1 = JSON.parse(User);

    if (newFirstName.length >= 1) {
        if (document.getElementById("accountDetailsFirstName").value === newFirstName) {

            const element = document.getElementById("accountDetailsFirstName");
            const text = "The new first name is already the currently specified first name"

            MessageAlert(element, text, "newFirstName");

            return;
        }
        usr1["firstName"] = newFirstName;
        document.getElementById("accountDetailsFirstName").value = newFirstName;
        document.getElementById("newFirstName").value = "";
        localStorage.setItem(Email, JSON.stringify(usr1));

        const element = document.getElementById("accountDetailsFirstName");
        const text = "First Name has been updated"

        MessageAlert(element, text, "newFirstName");
    }
}


//New last name, validation and updating
const LastNameValidateUpdate = () => {
    const newLastName = document.getElementById("newLastName").value;

    //retrieve the user key from storage
    Email = document.getElementById("accountDetailsEmail").value;
    User = localStorage.getItem(Email);

    //parse user back to object from local storage
    var usr1 = JSON.parse(User);

    if (newLastName.length >= 1) {
        if (document.getElementById("accountDetailsLastName").value === newLastName) {

            const element = document.getElementById("accountDetailsLastName");
            const text = "The new last name is already the currently specified last name"

            MessageAlert(element, text, "newLastName");

            return;
        }
        usr1["lastName"] = newLastName;
        document.getElementById("accountDetailsLastName").value = newLastName;
        document.getElementById("newLastName").value = "";
        localStorage.setItem(Email, JSON.stringify(usr1));

        const element = document.getElementById("accountDetailsLastName");
        const text = "Last Name has been updated"

        MessageAlert(element, text, "newLastName");
    }

}


//New password, validation and updating
const PasswordValidateUpdate = () => {
    const newPassword = document.getElementById("newPassword").value;

    //retrieve the user key from storage
    Email = document.getElementById("accountDetailsEmail").value;
    User = localStorage.getItem(Email);

    //parse user back to object from local storage
    var usr1 = JSON.parse(User);

    if (newPassword === "") {

        console.log("password update not requested")

    } else if (newPassword.length < 8) {

        const element = document.getElementById("accountDetailsPassword");
        const text = "Password requires 8 or more characters"

        MessageAlert(element, text, "newPassword");

        return;

    } else {
        hash('SHA-256', newPassword).then(hashed => {

            usr1["password"] = (hex(hashed));

            document.getElementById("accountDetailsPassword").value = newPassword;
            document.getElementById("newPassword").value = "";

            localStorage.setItem(Email, JSON.stringify(usr1));

            const element = document.getElementById("accountDetailsPassword");
            const text = "Password has been updated"

            MessageAlert(element, text, "newPassword");
        })
    }
}

//update "logged in" login page
const updateLoginFromAccountDetailsUpdate = () => {

    //retrieve the user key from storage
    Email = document.getElementById("accountDetailsEmail").value;
    User = localStorage.getItem(Email);

    //parse user back to object from local storage
    var usr1 = JSON.parse(User);

    document.getElementById("fullNameDashboard").value = usr1.firstName + " " + usr1.lastName;
    document.getElementById("emailDashboard").value = usr1.email;

    //ensure that all cached child lis are removed from OL to do list before loading to do lists from local storage
    document.getElementById("todoList").innerHTML = "";

    // get lists from orderedList array
    usr1["orderedList"].forEach(function (el) {
        let node = document.createElement("LI");
        let node2 = document.createElement("A");
        node2.setAttribute("href", "");
        let textnode = document.createTextNode(el);

        node2.appendChild(textnode);
        node.appendChild(node2);

        document.getElementById("todoList").prepend(node);

    })

}


//clear all message alert boxes
function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

async function ValidateUpdateAll() {

    //clears all message alert boxes
    await removeElementsByClass("messagealert");

    const alertTxt = "Check the formatting of your email address";
    const newEmail = document.getElementById("newEmail").value;

    if (newEmail !== "") {
        await EmailValidateUpdate(document.getElementById("newEmail"), alertTxt);
    }

    await FirstNameValidateUpdate();

    await LastNameValidateUpdate();

    await PasswordValidateUpdate();

    await updateLoginFromAccountDetailsUpdate();

}

//CLICK EVENT HANDLER - DASHBOARD VIEW (WHEN LOGGED IN)
const dashboardLoggedInButton = document.getElementById("dashboardLoggedInButton");
dashboardLoggedInButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("accountDetailsDiv").classList.add("hidden");
    document.getElementById("dashboardLoggedInButton").classList.add("hidden");
    document.getElementById("accountDetailsButton").classList.remove("hidden");

    //clear unprocessed Account Details new fields when leaving Account Details
    document.getElementById("newFirstName").value = "";
    document.getElementById("newLastName").value = "";
    document.getElementById("newEmail").value = "";
    document.getElementById("newPassword").value = "";


})



//CLICK EVENT HANDLER - ACCOUNT DETAILS UPDATE BUTTON
const accountDetailsUpdateButton = document.getElementById("accountDetailsUpdateButton");
accountDetailsUpdateButton.addEventListener("click", function (event) {
    event.preventDefault();

    const newFirstName = document.getElementById("newFirstName").value;
    const newLastName = document.getElementById("newLastName").value;
    const newEmail = document.getElementById("newEmail").value;
    const newPassword = document.getElementById("newPassword").value;

    if (newFirstName === "" && newLastName === "" && newEmail === "" && newPassword === "") {

        alert("No new account detail values specified");
        removeElementsByClass("messagealert")
        return;
    }

    ValidateUpdateAll();

})


//CLICK EVENT HANDLER - DISPLAYS DASHBOARD
const loginToDashboard = document.getElementById("loginToDashboardButton");
loginToDashboard.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("emailLogin");

    //Check to determine if a user is already registered using  email address as key
    if (document.getElementById("emailLogin").value in localStorage) {
        console.log("user exists");

        //retrieve the user from storage
        let retrievedUser = localStorage.getItem(email.value);

        //parse to object
        let userObj = JSON.parse(retrievedUser);

        //fetch password from local storage
        const pword = userObj.password;

        //fetch password from ui password field
        const uipwd = document.getElementById("passwordLogin").value;

        //hash uipwd
        hash('SHA-256', uipwd).then(hashed => {
            // console.log(hashed); // ArrayBuffer

            // console.log(hex(hashed));

            hashedpwd = hex(hashed);

            // verify if password is correct

            if (pword === hashedpwd) {

                console.log("password is a match");

                //clear login screen
                document.getElementById("emailLogin").value = "";
                document.getElementById("passwordLogin").value = "";

                //Hide login screen, make visible dashboard
                document.getElementById("loginDiv").classList.add("hidden");
                document.getElementById("dashboard").classList.remove("hidden");
                document.getElementById("fullNameDashboard").value = userObj.firstName + " " + userObj.lastName;
                document.getElementById("emailDashboard").value = userObj.email;

                //ensure that TO DO CONTENT has been cleared
                document.getElementById("todoListTitle").readOnly = false;
                document.getElementById("todoListTitle").value = "";
                document.getElementById("todo-contentDiv").classList.add("hidden");
                document.getElementById("todoListTitle").style.backgroundColor = "white";

                //FETCH LISTS
                //retrieve the user key from storage
                const emailDash = document.getElementById("emailDashboard").value;
                let User = localStorage.getItem(emailDash);

                //fetch new list input
                todoList = document.getElementById("todoListTitle").value;

                //parse user back to object from local storage
                const usr = JSON.parse(User);

                //ensure that all cached child lis are removed from OL to do list before loading to do lists from local storage
                document.getElementById("todoList").innerHTML = "";

                // get lists from orderedList array
                usr["orderedList"].forEach(function (el) {
                    let node = document.createElement("LI");
                    let node2 = document.createElement("A");
                    node2.setAttribute("href", "");
                    let textnode = document.createTextNode(el);

                    node2.appendChild(textnode);
                    node.appendChild(node2);

                    document.getElementById("todoList").prepend(node);

                })

                document.getElementById("logoutButton").classList.remove("hidden");
                document.getElementById("loginButton").classList.add("hidden");
                document.getElementById("accountDetailsButton").classList.remove("hidden");
                document.getElementById("signupButton").classList.add("hidden");

            } else {
                console.log("Password is incorrect, please check and try again");
                document.getElementById("passwordLogin").value = "";

                const element = document.getElementById("passwordLogin");
                const text = "Password is incorrect, please check and try again"

                MessageAlert(element, text, "passwordLogin");
            }


        });


    } else {

        const element = document.getElementById("emailLogin");
        const text = "This User does not exist please use an existing account or sign up";

        MessageAlert(element, text, "emailLogin");

        console.log("This User does not exist please use an existing account or sign up");
        return;
    }

});

//FUNCTION DYNAMIC MESSAGE ALERT
function MessageAlert(el, txt, id) {
    let divNode = document.createElement("DIV");
    let pNode = document.createElement("P");

    divNode.classList.add("messagealert");
    divNode.id = id + "messageBox";

    let txtNode = document.createTextNode(txt);
    pNode.appendChild(txtNode);
    divNode.appendChild(pNode);
    el.parentNode.insertBefore(divNode, { el }.nextSibling);
    el.style.borderColor = "red";
    document.getElementById("dashboardButton").disabled = true;
}


//CLICK EVENT HANDLER - TRANSFER DASHBOARD DATA TO LOCAL STORAGE INCLUDING NEW TO DO LIST AND LIST ITEM IF SPECIFIED
const dashboard = document.getElementById("dashboardButton");
dashboard.addEventListener("click", function (event) {
    event.preventDefault();

    let element = document.getElementById("messageBox");
    if (element !== null) {
        element.parentNode.removeChild(element);
    }

    //retrieve the user key from storage
    email = document.getElementById("emailDashboard").value;
    let User = localStorage.getItem(email);

    //fetch new list input
    todoList = document.getElementById("todoListTitle").value;

    // alert appears when focus is not on the to do list name field and is empty. If to do list name field is empty and has focus then it is handled by the blur event.
    if (todoList.length < 4) {

        const element = document.getElementById("todoListTitle");
        const text = "The To Do List Title Name field requires 3 characters or more"

        MessageAlert(element, text);

        return
    }


    //global variable is used to detect when EDIT list name is in progress to prevent form from being saved
    if (editMode === true) {

        // alert("Please SAVE List Name Change or CANCEL");

        const element = document.getElementById("todoListTitle");
        const text = "Please SAVE New List Name Change or CANCEL"

        MessageAlert(element, text);
        return;
    }

    //parse user back to object from local storage
    let usr = JSON.parse(User);

    if (usr[todoList.trim().toUpperCase()] === undefined) {
        usr[todoList.trim().toUpperCase()] = [];
        localStorage.setItem(email, JSON.stringify(usr));
    }

    //loop through orderedList array to check if list has already been added
    let listExists = false
    usr["orderedList"].forEach(function (entry) {
        if (todoList.trim().toUpperCase() === entry) {
            listExists = true
        }
    })

    //wrapped in if condition to prevent list from being added twice in the case where it may already have been added as part of the list change name process.

    if (listExists === false) {

        usr["orderedList"].push(todoList.trim().toUpperCase());
        let node = document.createElement("LI");
        let node2 = document.createElement("A");
        node2.setAttribute("href", "");
        let textnode = document.createTextNode(todoListTitle.value.toUpperCase());

        node2.appendChild(textnode);
        node.appendChild(node2);

        //checks if new li list li item has already been added to list of lists in the UI
        let ul = document.getElementById("todoList").textContent;

        if (!ul.includes(todoList)) {
            document.getElementById("todoList").prepend(node);
        }

    }

    //add new list item to user object
    const newListItem = document.getElementById("todoListItem")

    // check if list item already specified in list
    var itemExists = false;
    Object.entries(usr).forEach(([key, value]) => {

        if (key === document.getElementById("todoListTitle").value) {

            value.forEach(function (item) {

                let tmp = document.createElement('div');
                tmp.innerHTML = item;
                let itemValue = tmp.textContent

                if (itemValue === newListItem.value.trim()) {
                    itemExists = true;

                    const element = document.getElementById("todoListItem");
                    const text = "List item with the same name has already been added to list"

                    MessageAlert(element, text);

                }

            })
        }
    })

    document.getElementById("dashboardAddItemButton").disabled = true;

    //prevents an empty list value or a duplicate list  value from being transferred to local storage
    if (newListItem.value !== "" && itemExists === false) {

        let htmlString1 = '<input type="checkbox" class="listItems" ><label class="listItems">';
        let htmlString2 = '</label>';

        usr[todoList.toUpperCase()].push(htmlString1 + newListItem.value + htmlString2)

        //update user object in local storage
        localStorage.setItem(email, JSON.stringify(usr));
    }

    //prevents a duplicate list from being appended to the list UI
    if (itemExists === false) {
        //hide dashboard and signup divs on saveof dat
        // document.getElementById('dashboard').classList.add("hidden");
        document.getElementById("todo-contentDiv").classList.add("hidden");
        document.getElementById("todoListTitle").value = "";
        document.getElementById("todoListItem").value = "";
        document.getElementById("todoListTitle").style.background = "white";
        document.getElementById("todoListTitle").readOnly = false;
    }

    localStorage.setItem(email, JSON.stringify(usr));
    console.log(JSON.stringify(usr, null, 4));

})

//FOCUS EVENT HANDLER - CLEARS DYNAMICALLY CREATED MESSAGE BOX
const todoListTitleFocus = document.getElementById("todoListTitle");

todoListTitleFocus.addEventListener('focus', (event) => {
    // event.preventDefault();

    //clears message alert box
    let element = document.getElementById("messageBox");
    if (element !== null) {
        element.parentNode.removeChild(element);
    };
    document.getElementById("dashboardButton").disabled = false;
    // editMode = false;

}, true)



//FOCUS EVENT HANDLER - CLEARS DYNAMICALLY CREATED MESSAGE BOX
const todoListItemFocus = document.getElementById("todoListItem");

todoListItemFocus.addEventListener('focus', (event) => {
    // event.preventDefault();

    //clears message alert box
    let element = document.getElementById("messageBox");
    if (element !== null) {
        element.parentNode.removeChild(element);
    };
    document.getElementById("dashboardButton").disabled = false;
    document.getElementById("dashboardAddItemButton").disabled = false;

}, true)



//FOCUS EVENT HANDLER - CLEARS DYNAMICALLY CREATED MESSAGE BOX
const emailFocus = document.getElementById("emailLogin");

emailFocus.addEventListener('focus', (event) => {
    // event.preventDefault();

    //clears message alert box
    let element = document.getElementById("messageBox");
    if (element !== null) {
        element.parentNode.removeChild(element);
    };

}, true)


//FOCUS EVENT HANDLER - CLEARS DYNAMICALLY CREATED MESSAGE BOX
const passwordFocus = document.getElementById("passwordLogin");

passwordFocus.addEventListener('focus', (event) => {
    // event.preventDefault();

    //clears message alert box
    let element = document.getElementById("messageBox");
    if (element !== null) {
        element.parentNode.removeChild(element);
    };

}, true)


//CLICK EVENT HANDLER - ADD TO DO LIST ITEMS TO TO DO LIST
const dashboardAddItemButton = document.getElementById("dashboardAddItemButton");
dashboardAddItemButton.disabled = true;
dashboardAddItemButton.addEventListener("click", function (event) {
    event.preventDefault();

    //retrieve the user key from storage
    email = document.getElementById("emailDashboard").value;
    let User = localStorage.getItem(email);

    //fetch new list input
    todoList = document.getElementById("todoListTitle").value;

    //parse user back to object from local storage
    const usr = JSON.parse(User);

    //set to do list and initialise if not initialised
    if (usr[todoList.trim().toUpperCase()] === undefined) {
        usr[todoList.trim().toUpperCase()] = [];
    }

    localStorage.setItem(email, JSON.stringify(usr));

    //add new list item to user object & append item list item UI
    const todoListItemText = document.getElementById("todoListItem").value;
    const newListItem = document.getElementById("todoListItem");

    // check if list item already specified in list
    var itemExists = false;
    Object.entries(usr).forEach(([key, value]) => {

        if (key === document.getElementById("todoListTitle").value) {

            value.forEach(function (item) {

                let tmp = document.createElement('div');
                tmp.innerHTML = item;
                let itemValue = tmp.textContent


                if (itemValue === newListItem.value.trim()) {
                    itemExists = true;

                    const element = document.getElementById("todoListItem");
                    const text = "List item with the same name has already been added to list"

                    MessageAlert(element, text);

                }

            })
        }
    })


    if (newListItem.value !== "" && itemExists === false) {

        let htmlString1 = '<input type="checkbox" class="listItems" ><label class="listItems">';
        let htmlString2 = '</label>';

        usr[todoList.toUpperCase()].push(htmlString1 + newListItem.value + htmlString2)

        //append new list item to item list UI
        let node = document.createElement("LI");

        node.classList.add("listItems");

        let nodeChk = document.createElement("INPUT");
        nodeChk.setAttribute("type", "checkbox");

        nodeChk.classList.add("listItems");

        let node2 = document.createElement("A");
        node2.setAttribute("href", "");

        node2.classList.add("listItems");

        let nodeLabel = document.createElement("Label");
        nodeLabel.classList.add("listItems");

        let textnode = document.createTextNode(todoListItemText);

        nodeLabel.appendChild(textnode);
        node.appendChild(nodeChk);
        node.appendChild(nodeLabel);

        document.getElementById("todoListContentItems").prepend(node);

        document.getElementById("todoListItem").value = '';
        document.getElementById("dashboardAddItemButton").disabled = true;

        //update user object in local storage
        localStorage.setItem(email, JSON.stringify(usr));

    }

    document.getElementById("dashboardAddItemButton").disabled = true;
})

//KEYUP EVENT HANDLER - DISABLES 'ADD ITEM' BUTTON IF THE LIST ITEM INPUT IS EMPTY TO PREVENT AN ITEM EMPTY STRING FROM BEING SUBMITTED
const todoListItem = document.getElementById("todoListItem");
todoListItem.addEventListener("keyup", function (event) {
    event.preventDefault();

    const todoListItemText = document.getElementById("todoListItem").value;
    if (todoListItemText === "") {
        document.getElementById("dashboardAddItemButton").disabled = true;
    } else {
        document.getElementById("dashboardAddItemButton").disabled = false;
    }

})

//KEYUP EVENT HANDLER - PREVENTS LIST ITEM FIELD FROM BEING POPULATED BEFORE A LIST TITLE NAME IS SPECIFIED
const todoListTitleName = document.getElementById("todoListTitle");

document.getElementById("todoListItem").disabled = true;
todoListTitleName.addEventListener("keyup", (event) => {
    event.preventDefault();

    if (todoListTitleName.value !== "") {
        document.getElementById("todoListItem").disabled = false;
    }

})

//MOUSE OVER EVENT HANDLER - DISABLES THE BLUR EVENT WHEN CLICKING ON THE CANCEL NEW LIST NAME BUTTON
var excludeblur = "";
const dashboardCancelNewListNameButtonMO = document.getElementById("dashboardCancelNewListNameButton")
dashboardCancelNewListNameButtonMO.addEventListener("mouseover", (event) => {
    // event.preventDefault();
    excludeblur = true;
})


//BLUR EVENT HANDLER - THE BLUR EVENT (ON EXITING THE TO DO LIST TITLE NAME FIELD) IS USED TO ENSURE THAT A DUPLICATE LIST NAME IS NOT SUBMITTED AND THAT IT HAS A MINIMUM NUMBER OF CHARACTERS AND ON SUCCCESSFUL TRANSFER OF A LIST NAME THEN RESETS PROPERTIES ON THE LIST NAME FIELD

todoListTitleName.addEventListener("blur", (event) => {

    //retrieve the user key from storage
    email = document.getElementById("emailDashboard").value;
    let User = localStorage.getItem(email);
    const usr = JSON.parse(User);
    //fetch new list input
    todoList = document.getElementById("todoListTitle").value;

    //if condition  prevents false "blur" alerts when user clicks on to do list title field when in read only mode
    if (event.target.readOnly === false && excludeblur !== true) {

        //checks if inputted list matches an existing list of list items
        const keys = Object.keys(usr);

        for (const key of keys) {

            if (todoList.trim().toUpperCase() === key) {

                const element = document.getElementById("todoListTitle");
                const text = "To Do List Name already in use!!!!"

                MessageAlert(element, text);

                // document.getElementById("todoListTitle").focus();
                return false;
            }

            if (todoList.trim().length < 5) {

                const element = document.getElementById("todoListTitle");
                const text = "A To Do List Name with 5 characters or more is required"

                MessageAlert(element, text);

                // document.getElementById("todoListTitle").focus();
                return false;
            }
        }

        if (todoListTitleName.value.length >= 4) {
            event.target.style.background = "lightblue";
            event.target.readOnly = true;
            localStorage.setItem(email, JSON.stringify(usr));

        }
    }
})


// CLICK EVENT HANDLER - DISPLAYS A NEW (CONTENT) LIST FORM
const createNewListButton = document.getElementById("dashboardCreateListButton");
createNewListButton.addEventListener("click", (event) => {
    event.preventDefault();

    document.getElementById("todo-contentDiv").classList.remove("hidden");

    //ensure that TO DO CONTENT has been reset
    editMode = false;
    document.getElementById("todoListTitle").readOnly = false;
    document.getElementById("todoListTitle").value = "";
    document.getElementById("todoListTitle").style.backgroundColor = "white";
    document.getElementById("todoListContentItems").innerHTML = "";
    document.getElementById("todoListItem").disabled = true;

    document.getElementById("todoListTitle2").classList.add("hidden");
    document.getElementById("todoListTitle2").style.backgroundColor = "white";
    document.getElementById("todoListTitle2").value = "";
    document.getElementById("dashboardEditListNameButton").classList.add('hidden');
    document.getElementById("dashboardSaveNewListNameButton").classList.add('hidden');

})


// CLICK EVENT HANDLER - USES EVENT BUBBLING TO DETECT WHICH TO DO LIST IS CLICKED ON AND THEN POPULATES THE TO DO LIST CONTENT FORM BY TRANSFERRING DATA FROM LOCAL STORAGE

const clickedLi = document.getElementById("todoList");
clickedLi.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.style.color = "red;"
    document.getElementById("todoListTitle").value = event.target.innerText;

    document.getElementById("todo-contentDiv").classList.remove("hidden");
    document.getElementById("todoListTitle").readOnly = true;
    document.getElementById("todoListTitle").style.background = "lightblue";
    document.getElementById("todoListItem").disabled = false;
    document.getElementById("dashboardEditListNameButton").classList.remove('hidden');
    document.getElementById("dashboardSaveNewListNameButton").classList.add("hidden");
    document.getElementById("todoListTitle2").style.background = "white";
    document.getElementById("todoListTitle2").classList.add("hidden");

    //retrieve the user key from storage
    email = document.getElementById("emailDashboard").value;
    let User = localStorage.getItem(email);

    //fetch new list input
    todoList = document.getElementById("todoListTitle").value;

    // if (todoList.length < 4) {
    //     alert("The To Do List Title Name field requires 3 characters or more");
    //     return
    // }

    //parse user back to object from local storage
    const usr = JSON.parse(User);

    //ensure that all child lis (list items) are not duplicated in the UI when clicking more than once on the TO DO list
    document.getElementById("todoListContentItems").innerHTML = "";

    //loop through object keys and locate clicked on to do list and then loop through the array value paired with the object key containing any items and update UI with li to do list items
    Object.entries(usr).forEach(([key, value]) => {

        if (key.toUpperCase() === event.target.innerText) {

            value.forEach(function (item) {
                let node = document.createElement("LI");

                node.classList.add("listItems");
                node.innerHTML = item;
                document.getElementById("todoListContentItems").prepend(node);
            })
        }
    })
}, false)


//CHANGE EVENT HANDLER - DETECTS CHANGE TO THE COMPLETED ITEM RADIO BUTTON AND UPDATES CHANGE IN LOCAL STORAGE

const changeListItemChkBox = document.getElementById("todoListContentItems");
changeListItemChkBox.addEventListener("change", (event) => {
    event.preventDefault();

    const listItem = event.target.closest("#todoListContentItems input").parentNode

    //retrieve the user key from storage
    email = document.getElementById("emailDashboard").value;
    let User = localStorage.getItem(email);
    const usr = JSON.parse(User);

    Object.entries(usr).forEach(([key, value]) => {

        if (key === document.getElementById("todoListTitle").value) {

            let count = 0;
            value.forEach(function (item) {

                // create li node
                let node = document.createElement("LI");
                node.innerHTML = item;

                if (listItem.innerText === node.innerText) {

                    //create temporary element and clone
                    let tmp = document.createElement('div');
                    tmp.cloneNode();
                    tmp.appendChild(listItem.cloneNode(true));

                    usr[todoList][count] = tmp.innerHTML;

                    //update user object in local storage
                    localStorage.setItem(email, JSON.stringify(usr));
                }
                count += 1;
            })
        }
    })

})


//CLICK EVENT HANDLER - ON RADIO BUTTON SETS/RESETS CHECKED ATTRIBUTE AND 'COMPLETED' CLASS ON UI
document.addEventListener('click', function (event) {

    let item = event.target.closest("input");

    if (item) {
        if (item.checked) {
            item.parentNode.classList.add("completed");
            item.setAttribute('checked', 'checked');

        } else {
            item.parentNode.classList.remove("completed");
            item.removeAttribute('checked')
        }
    }

}, false)

var editMode = false;
//CLICK EVENT HANDLER SETS UP FORM TO DISPLAY IN EDIT LIST NAME MODE
const dashboardEditListNameButton = document.getElementById("dashboardEditListNameButton")
dashboardEditListNameButton.addEventListener("click", (event) => {
    event.preventDefault();

    editMode = true;

    document.getElementById("todoListTitle2").classList.remove("hidden");
    document.getElementById("todoListTitle2").style.backgroundColor = "lightblue";
    document.getElementById("todoListTitle2").value = document.getElementById("todoListTitle").value.toUpperCase();
    document.getElementById("todoListTitle2").readOnly = true;

    document.getElementById("todoListTitle").style.backgroundColor = "white";
    document.getElementById("todoListTitle").setAttribute('placeholder', "INPUT NEW LIST NAME");
    document.getElementById("dashboardSaveNewListNameButton").classList.remove("hidden");
    document.getElementById("dashboardEditListNameButton").classList.add('hidden');
    document.getElementById("dashboardCancelNewListNameButton").classList.remove("hidden");

    document.getElementById("todoListTitle").value = "";
    document.getElementById("todoListTitle").readOnly = false;

    document.getElementById("dashboardAddItemButton").readyOnly = true;
    document.getElementById("dashboardButton").readOnly = true;

    document.getElementById("todoListItem").readOnly = true;

}, false)


// CLICK EVENT HANDLER - SETS UP AND DISPLAYS FORM AFTER CHANGE OF LIST NAME IS CANCELLED
const dashboardCancelNewListNameButton = document.getElementById("dashboardCancelNewListNameButton")
dashboardCancelNewListNameButton.addEventListener("click", (event) => {
    event.preventDefault();

    editMode = false;
    document.getElementById("dashboardButton").disabled = false;

    //clears message alert box
    let element = document.getElementById("messageBox");
    if (element !== null) {
        element.parentNode.removeChild(element);
    }

    document.getElementById("todoListTitle2").classList.add("hidden");
    document.getElementById("todoListTitle2").style.backgroundColor = "white";
    document.getElementById("todoListTitle").value = document.getElementById("todoListTitle2").value;
    document.getElementById("todoListTitle2").value = "";

    document.getElementById("todoListTitle").style.backgroundColor = "lightblue";
    document.getElementById("todoListTitle").setAttribute('placeholder', "INPUT LIST NAME");

    document.getElementById("todoListTitle").readOnly = true;

    document.getElementById("dashboardAddItemButton").readyOnly = false;
    document.getElementById("dashboardButton").readOnly = false;

    document.getElementById("dashboardSaveNewListNameButton").classList.add("hidden");
    document.getElementById("dashboardEditListNameButton").classList.remove('hidden');
    document.getElementById("dashboardCancelNewListNameButton").classList.add("hidden");

    document.getElementById("todoListItem").readOnly = false;

}, false)


//CLICK EVENT HANDLER - UPDATES THE LIST IN LOCAL STORAGE WITH THE NEW LIST NAME AND UPDATES THE LIST UI
const dashboardSaveNewListNameButton = document.getElementById("dashboardSaveNewListNameButton");
dashboardSaveNewListNameButton.addEventListener("click", function (event) {
    event.preventDefault();

    editMode = false;

    document.getElementById("dashboardButton").disabled = false;

    //clears message alert box
    let element = document.getElementById("messageBox");
    if (element !== null) {
        element.parentNode.removeChild(element);
    }

    //retrieve the user key from storage
    email = document.getElementById("emailDashboard").value;
    let User = localStorage.getItem(email);

    //fetch new list input
    let todoList = document.getElementById("todoListTitle").value;

    //parse user back to object from local storage
    let usr = JSON.parse(User);

    if (usr[todoList.trim().toUpperCase()] === undefined) {
        usr[todoList.trim().toUpperCase()] = [];
    }

    const oldListName = document.getElementById("todoListTitle2").value.toUpperCase();
    const newListName = document.getElementById("todoListTitle").value.toUpperCase();

    if (newListName.length <= 4) {

        const element = document.getElementById("todoListTitle");
        const text = "The To Do List Name field requires 5 characters or more"

        MessageAlert(element, text);

        return;
    }




    //loop through orderedList array to check if list has already been added
    let listExists = false
    usr["orderedList"].forEach(function (entry) {
        if (newListName === entry) {
            listExists = true
        }
    })


    if (listExists === false) {
        Object.keys(usr).forEach((key, index) => {

            if (key === oldListName) {
                let arrNameIndex = usr["orderedList"].indexOf(oldListName);
                usr["orderedList"][arrNameIndex] = newListName;
                localStorage.setItem(email, JSON.stringify(usr));

                usr[newListName] = usr[oldListName];
                delete usr[oldListName];

                console.log(JSON.stringify(usr, null, 4));
                localStorage.setItem(email, JSON.stringify(usr));
            }
        })

        //ensure that all cached child lis are removed from OL to do list before loading to do lists from local storage
        document.getElementById("todoList").innerHTML = "";

        // get lists from orderedList array
        usr["orderedList"].forEach(function (el) {
            let node = document.createElement("LI");
            let node2 = document.createElement("A");
            node2.setAttribute("href", "");
            let textnode = document.createTextNode(el);

            node2.appendChild(textnode);
            node.appendChild(node2);

            document.getElementById("todoList").prepend(node);
        })

        document.getElementById("dashboardSaveNewListNameButton").classList.add("hidden");
        document.getElementById("dashboardEditListNameButton").classList.remove('hidden');

        document.getElementById("todoListTitle2").classList.add("hidden");
        document.getElementById("todoListTitle2").style.backgroundColor = "white";
        document.getElementById("todoListTitle2").value = "";
        document.getElementById("todoListTitle2").readOnly = false;

        document.getElementById("todoListTitle").style.backgroundColor = "lightblue";
        document.getElementById("todoListTitle").setAttribute('placeholder', "INPUT LIST NAME");
        document.getElementById("dashboardSaveNewListNameButton").classList.add("hidden");
        document.getElementById("dashboardEditListNameButton").classList.remove('hidden');
        document.getElementById("dashboardCancelNewListNameButton").classList.add('hidden');
        document.getElementById("todoListItem").readOnly = false;

    } else {

        const element = document.getElementById("todoListTitle");
        const text = "The New To Do List already exists, input a new to do list name"

        MessageAlert(element, text);
    }

})



//CLICK EVENT HANDLER - VALIDATE AND SIGNUP NEW ACCOUNT

//SIGNUP PROCESS - VALIDATION - TRANSFER DATA TO LOCAL STORAGE - TRANSFERS FIRSTNAME, LASTNAME & EMAIL ADDRESS TO DASHBOARD AFTER SUCCESSFULLY SIGNING UP - CLEARS DATA FROM SIGN UP FORM AFTER SUCCESSFULLY SIGNING UP AND DISPLAYING THE DASHBOARD- DISPLAYS DASHBOARD AFTER SUCCESSFULLY SIGNING UP

const signupWithDetailsButton = document.getElementById("signupWithDetailsButton");
signupWithDetailsButton.addEventListener("click", function (event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("emailSignUp").value;
    var password = document.getElementById("passwordSignUp").value;
    var termsChecked = document.getElementById("terms").checked;

    //A check to determine if a user already exists with the email address, if true code is exit.
    if (document.getElementById("emailSignUp").value in localStorage) {

        const element = document.getElementById("emailSignUp");
        const text = "A user account already exists with this email address.  Please try a different email address."

        MessageAlert(element, text, "emailSignUp");
        notValid = true
    }

    var notValid = false;
    apos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (apos < 1 || dotpos - apos < 2) {

        const element = document.getElementById("emailSignUp");
        const text = "the email address is not valid"

        MessageAlert(element, text, "emailSignUp");
        notValid = true
        // return false;
    }

    if (firstName === "") {

        const element = document.getElementById("firstName");
        const text = "The first name field requires 1 or more characters"

        MessageAlert(element, text, "firstName");

        notValid = true
        // return false;
    }

    if (lastName === "" || lastName.length < 2) {

        const element = document.getElementById("lastName");
        const text = "The last name field requires 2 or more characters"

        MessageAlert(element, text, "lastName");

        notValid = true
        // return false;
    }

    if (password === "" || password.length < 8) {

        const element = document.getElementById("passwordSignUp");
        const text = "The password field requires 8 or more characters"

        MessageAlert(element, text, "passwordSignUp");

        notValid = true
        // return false;
    }

    if (termsChecked === false) {

        const element = document.getElementById("terms");
        const text = "The terms have to be agreed to, to create an account"

        MessageAlert(element, text, "terms");

        notValid = true
    }


    if (notValid === true) {
        return
    }

    const pwsignup = document.getElementById("passwordSignUp").value;

    hash('SHA-256', pwsignup).then(hashed => {

        //create new user object
        let user = {};
        user.firstName = firstName
        user.lastName = lastName;
        user.email = email;
        user.password = (hex(hashed));

        // user.password = document.getElementById("passwordSignUp").value;
        user.orderedList = [];

        localStorage.setItem(email, JSON.stringify(user));
    })


    const signupDiv = document.getElementById("signupDiv");
    signupDiv.classList.add("hidden");

    //Transfer data to dashboard
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    document.getElementById("fullNameDashboard").value = fname + " " + lname;
    document.getElementById("emailDashboard").value = document.getElementById("emailSignUp").value;

    //clear fields prior to leaving form
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("emailSignUp").value = "";
    document.getElementById("passwordSignUp").value = "";

    //Display dashboard
    const login = document.getElementById('dashboard');
    login.classList.remove("hidden");
    document.getElementById("signupButton").classList.add("hidden");
    document.getElementById("loginButton").classList.add("hidden");
    document.getElementById("logoutButton").classList.remove("hidden");
    document.getElementById("accountDetailsButton").classList.remove("hidden");

})


const clearSignupFieldOnFocus = document.getElementById("signupDiv");
clearSignupFieldOnFocus.addEventListener("click", function (event) {
    // event.preventDefault();

    if (event.target.type !== "CHECKBOX") {
        //clears message alert box
        const id = event.target.id;
        let element = document.getElementById(id + "messageBox");
        if (element !== null) {
            element.parentNode.removeChild(element);
        };
    }

}, true)




const accountDetailsFieldOnFocus = document.getElementById("accountDetailsDiv");
accountDetailsFieldOnFocus.addEventListener("click", function (event) {
    event.preventDefault();
    //clears message alert box
    const id = event.target.id;
    let element = document.getElementById(id + "messageBox");
    if (element !== null) {
        element.parentNode.removeChild(element);
    };


}, true)

const loginOnFocus = document.getElementById("loginDiv");
loginOnFocus.addEventListener("click", function (event) {
    event.preventDefault();
    //clears message alert box
    const id = event.target.id;
    let element = document.getElementById(id + "messageBox");
    if (element !== null) {
        element.parentNode.removeChild(element);
    };


}, true)

