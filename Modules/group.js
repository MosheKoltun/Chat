module.exports = Group;
//========================================================
function Group(name, users, groups) {
    this.name = name;
    this.users = users || [];
    this.groups = groups || []
}
//========================================================
Group.prototype.getUsers = function () {
    return this.users;
};
//========================================================
Group.prototype.addUser = function (user) {
    this.users.push(user);
};
//========================================================
Group.prototype.removeUser = function (username) {
    for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].getName() === username) {
            this.users.splice(i, 1);
        }
    }
};
//========================================================
Group.prototype.getName = function () {
    return this.name;
};
