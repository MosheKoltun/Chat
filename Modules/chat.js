const userFuncs = require('./users.js');
const groupFuncs = require('./groups.js');

//=========================================================
module.exports = {
    addUserToGroup:addUserToGroup,
    removeUserFromGroup:removeUserFromGroup,
    createGroupsUsersDisplayTree:createGroupsUsersDisplayTree,
};
//=========================================================
// addUserToGroup
//=========================================================
function addUserToGroup(groupName, username){
    // check if such group exists
    // (Inside 'groups.js' 'groupObjectList' array)
    var groupObject = groupFuncs.doesGroupExist(groupName);
    if (groupObject ===null) {
        return false;
    }

    // check if such user exists
    // (Inside 'users.js' 'userObjectList' array)
    var userObject = userFuncs.doesUserExist(username);
    if (userObject===null) {
        return false;
    }

    // Check if user is already a child of that group
    var listOfUsersInGroup = groupObject.getUsers();
    for (var i=0; i < listOfUsersInGroup.length; i++) {
        if (listOfUsersInGroup[i].getName() === username) {
            return false;
        }
    }

    return addUserToGroupUtil(groupName, userObject);
 }
//=========================================================
function addUserToGroupUtil(groupName, userObject) {
    var groupObjectList = groupFuncs.getGroupObjectList();
    for (var i=0; i<groupObjectList.length; i++) {
        if (groupObjectList[i].getName() === groupName) {
            groupObjectList[i].addUser(userObject);
            return true;
        }
    }
    return false;
}
//=========================================================
// removeUserFromGroup
//=========================================================
function removeUserFromGroup(groupName, username){

    var groupObject = groupFuncs.doesGroupExist(groupName);
    if (groupObject===null) {
        return false;
    }

    var userObject = userFuncs.doesUserExist(username);
    if (userObject===null) {
        return false;
    }

    return removeUserFromGroupUtil(groupName, userObject);
}
//=========================================================
function removeUserFromGroupUtil(groupName, userObject) {
    var groupObjectList = groupFuncs.getGroupObjectList();
    for (var i = 0; i < groupObjectList.length; i++) {
        if (groupObjectList[i].getName() === groupName) {
            var username = userObject.getName();
            groupObjectList[i].removeUser(username);
            return true;
        }
    }
    return false;
}
//=========================================================
// createGroupsUsersDisplayTree
//=========================================================
function createGroupsUsersDisplayTree(){
    //This Function returns a tree of strings
    //Only group names and username and ages
    //notice: it does not return objects

    var groupsUsersDisplayTree = {};
    // {"groupName" : {"username" : "("+age+")"}}
    // example: {group1 : {user1 : (34)}, group2 : {user2: (14), user3 : (50)}}

    var groupObjectList = groupFuncs.getGroupObjectList();

    for (var i=0; i<groupObjectList.length; i++) {

        var listOfUsernamesAndAges = {};
        var groupObject = groupObjectList[i];
        var groupName = groupObject.getName();
        var usersInGroupList = groupObject.getUsers();

        for (var j=0; j<usersInGroupList.length; j++) {

            var username = usersInGroupList[j].getName();
            var userAge = usersInGroupList[j].getAge();

            listOfUsernamesAndAges[username]=userAge;
        }
        groupsUsersDisplayTree[groupName]=listOfUsernamesAndAges;
    }
    return groupsUsersDisplayTree;
}
