const userFuncs = require('../Modules/users.js');
const groupFuncs = require('../Modules/groups.js');
const chatFuncs = require('../Modules/chat.js');

userFuncs.createNewUser("user1","",34);
userFuncs.createNewUser("user2","",34);
userFuncs.createNewUser("user3","",34);
userFuncs.createNewUser("user4","",34);
userFuncs.createNewUser("user5","",34);
console.log("=================================");

userFuncs.updateUsername("user5","user6");
userFuncs.updateUserAge("user6",26);
console.log("user1 exists= " + userFuncs.doesUserExist("user1"));
userFuncs.removeUser("user1");
console.log("user1 exists= " + userFuncs.doesUserExist("user1"));
console.log("List of usernames= " + userFuncs.getListOfUserNames());
console.log("=================================");

groupFuncs.createNewGroup("group1");
groupFuncs.createNewGroup("group2");
groupFuncs.createNewGroup("group3");
groupFuncs.createNewGroup("group4");
groupFuncs.createNewGroup("group5");

console.log("group5 exists= " + groupFuncs.doesGroupExist("group5"));
groupFuncs.removeGroup("group5");
console.log("group5 exists= " + groupFuncs.doesGroupExist("group5"));
console.log("List of group names= " + groupFuncs.getListOfGroupNames());
console.log("=================================");


chatFuncs.addUserToGroup("group1","user2");
chatFuncs.addUserToGroup("group2","user3");
chatFuncs.addUserToGroup("group2","user4");
chatFuncs.addUserToGroup("group3","user6");

printGroupsUsersDisplayTree();
console.log("=================================");

chatFuncs.removeUserFromGroup("group2","user4");
printGroupsUsersDisplayTree();


//=========================================================

function printGroupsUsersDisplayTree() {
    console.clear();

    var listOfGroupAndUsers = chatFuncs.createGroupsUsersDisplayTree();

    for (var groupName in listOfGroupAndUsers) {
        console.log("--> " + groupName);

        var listOfUsernamesAndAges = listOfGroupAndUsers[groupName];
        for (var username in listOfUsernamesAndAges) {
            var age = listOfUsernamesAndAges[username];
            console.log("----> " + username + " (" + age + ")");
        }
    }
}







