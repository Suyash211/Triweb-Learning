my_user = null;
const red_block = document.getElementById("red_block");
const green_block = document.getElementById("green_block");
const blue_block = document.getElementById("blue_block");
const yellow_block = document.getElementById("yellow_block");

const ProjectUser = document.getElementById("ProjectUser");

const btn_add_user = document.getElementById("btn_add_user");
const btn_delete_user = document.getElementById("btn_delete_user");

const btn_move_to_red = document.getElementById("btn_move_to_red");
const btn_move_to_green = document.getElementById("btn_move_to_green");
const btn_move_to_blue = document.getElementById("btn_move_to_blue");
const btn_move_to_yellow = document.getElementById("btn_move_to_yellow");

function addUserToBlock(){
    if(my_user == null){
        my_user = document.createElement('div');
        my_user.classname = "my_user";
        my_user.setAttribute("id","my_user");
        my_user.innerHTML = ProjectUser.value;
        ProjectUser.disabled = true;
        btn_add_user.disabled = true;
        btn_delete_user.disabled = false;
        red_block.append(my_user);
    }
}

function deleteuserFromBlock(){
    if(my_user != null){
        my_user.remove();
        ProjectUser.disabled = false;
        btn_add_user.disabled = false;
        btn_delete_user.disabled = true;
        ProjectUser.value = "";
        my_user = null;
    }
}

function moveUserToRed(){
    if(my_user != null)
        red_block.append(my_user);
}

function moveUserToGreen(){
    if(my_user != null)
        green_block.append(my_user);
}

function moveUserToBlue(){
    if(my_user != null)
        blue_block.append(my_user);
}

function moveUserToYellow(){
    if(my_user != null)
        yellow_block.append(my_user);
}

btn_add_user.addEventListener("click",addUserToBlock);
btn_delete_user.addEventListener("click",deleteuserFromBlock);
btn_move_to_red.addEventListener("click",moveUserToRed);
btn_move_to_green.addEventListener("click",moveUserToGreen);
btn_move_to_blue.addEventListener("click",moveUserToBlue);
btn_move_to_yellow.addEventListener("click",moveUserToYellow);