const Group = require('./group.js');
//========================================================
// Array of 'Group' Objects
var groupObjectList = [];
//========================================================
module.exports = {
    getGroupObjectList:getGroupObjectList,
    createNewGroup:createNewGroup,
    getListOfGroupNames:getListOfGroupNames,
    doesGroupExist:doesGroupExist,
    removeGroup:removeGroup,
};
//=========================================================
function getGroupObjectList() {
    return groupObjectList;
}
//========================================================
function createNewGroup(GroupName) {
    var newGroup = new Group(GroupName);
    groupObjectList.push(newGroup);
    return newGroup;
}
//========================================================
function doesGroupExist(GroupName) {
    if (groupObjectList.length === 0) {
        return null;
        // in case 'groupObjectList' is empty
    }
    for (var i = 0; i < groupObjectList.length; i++) {
        if (groupObjectList[i].getName() === GroupName) {
            return groupObjectList[i]; //
            // If user exist. Return from function immediately
        }
    }
    return null;
    // If group does not exist
}
//=========================================================
function getListOfGroupNames() {
    var groupsList = [];
    if (groupObjectList.length > 0) {
        for (var i = 0; i < groupObjectList.length; i++) {
            groupsList.push(groupObjectList[i].getName());
        }
    }
    return groupsList;
}
//=========================================================
function removeGroup(groupName) {
    for(var i=0; i<groupObjectList.length; i++) {
        if (groupObjectList[i].getName() === groupName){
            groupObjectList.splice(i,1);
            // Delete an array member
            return true;
        }
    }
    return false;
}