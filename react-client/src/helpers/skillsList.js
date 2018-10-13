export function getSkillsList(skills) {
    var skillsListString = "";
    if (skills) {
        for (var i = 0; i < skills.length; i++) {
            skillsListString += (skills[i]);
            //If final element dont add comma
            if (i + 1 !== skills.length) {
                skillsListString += ", ";
            }
        }
    }
    return skillsListString;
}