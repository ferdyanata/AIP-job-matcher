export function convertDropdownDataToArray(data) {
    //The values selected by the user in the dropdown
    var valuesFromDropdown = data.value;
    //skills to insert into our talentToRegister object
    var skills = [];
    //copy data to skills array
    for (var i in valuesFromDropdown) {
        skills[i] = valuesFromDropdown[i];
    }

    return skills;
}