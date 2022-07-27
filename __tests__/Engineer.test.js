const Engineer = require("../lib/Engineer");

test("Set GitHub using constructor", () => {
    const testValue = "GitHubAlaina";
    const emp = new Engineer("Alaina", 1, "Alaina@Alaina.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("getRole() functions", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Alaina", 1, "Alaina@Alaina.com", "GitHubAlaina");
    expect(emp.getRole()).toBe(testValue);
});

test("Get GitHub name using getGitHub()", () => {
    const testValue = "GitHubAlaina";
    const emp = new Engineer("Alaina", 1, "Alaina@Alaina.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});