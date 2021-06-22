const textForRole = (roles, textLines) => {
    let playScript = textLines.split("\n");
    var arrRoles = [];
    for (let i = 0; i < playScript.length; i++) {
        let index = playScript[i].indexOf(":");
        let role = new Object();
        role.name = playScript[i].substr(0, index);
        role.text = i + 1 + ")" + playScript[i].substr(index + 1, playScript[i].length - index);
        arrRoles[i] = role;
    }
    let result = "";
    for (let i = 0; i < roles.length; i++) {
        let arrRolesGroup = arrRoles.filter(role => role.name == roles[i]);
        for (let j = 0; j < arrRolesGroup.length; j++) {
            if (j == 0) {
                result += (i > 0) ? "\n\n" : "";
                result += arrRolesGroup[j].name + ":";
            }
            result += "\n" + arrRolesGroup[j].text;
        }
    }
    return result;
}

module.exports = textForRole;

