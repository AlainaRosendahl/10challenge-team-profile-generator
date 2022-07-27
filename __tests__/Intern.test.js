const Intern = require("../lib/Intern");

test("Set School using constructor", () => {
    const testValue = "Missouri";
    const emp = new Intern("Alaina", 1, "Alaina@Alaina.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() functions", () => {
    const testValue = "Intern";
    const emp = new Intern("Alaina", 1, "Alaina@Alaina.com", "Missouri");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School using getSchool()", () => {
    const testValue = "Missouri";
    const emp = new Intern("Alaina", 1, "Alaina@Alaina.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
}); 