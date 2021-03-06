const Employee = require("../lib/Employee");

test("New Employee", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Set Employee Name using constructor", () => {
    const name = "Jake";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("Set ID using constructor", () => {
    const testValue = 100;
    const emp = new Employee("Jake", testValue);
    expect(emp.id).toBe(testValue);
});

test("Set Email using constructor", () => {
    const testValue = "Alaina@Alaina.com";
    const emp = new Employee("Alaina", 1, testValue);
    expect(emp.email).toBe(testValue);
});

test("Get name using getName()", () => {
    const testValue = "Alaina";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});

test("Get ID using getId()", () => {
    const testValue = 61;
    const emp = new Employee("Alaina", testValue);
    expect(emp.getId()).toBe(testValue);
});

test("Get Email using getEmail()", () => {
    const testValue = "Alaina@Alaina.com";
    const emp = new Employee("Alaina", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});

test("getRole() function", () => {
    const testValue = "Employee";
    const emp = new Employee("Alaina", 1, "Alaina@Alaina.com");
    expect(emp.getRole()).toBe(testValue);
}); 