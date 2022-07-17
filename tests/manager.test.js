const Manager = require('../lib/manager')

test('Test instance of employee to be an Object',()=>{
    const testEmpl = new Manager("Jim", 33,"jim@gmail.com",22);
    expect(typeof(testEmpl)).toBe("object");
})
test('Test the name attribute to match Jim',()=>{
    const testEmpl = new Manager("Jim", 33,"jim@gmail.com",22);
    expect(testEmpl.name).toBe("Jim");
})
test('Test the ID attribute to match 33',()=>{
    const testEmpl = new Manager("Jim", 33,"jim@gmail.com",22);
    expect(testEmpl.id).toBe(33);
})
test('Test to confirm Office Number', ()=> {
    const testEmpl = new Manager('Jim',33,"jim@gmail.com",22)
    expect(testEmpl.officeNumber).toBe(22)
})
test('Test to see what the role returns', () => {
    const testEmpl = new Manager('Jim', 33, 'jim@gmail.com',22)
    expect(testEmpl.getRole()).toBe('Manager')
})
test('Test the name attribute to match Jim',()=>{
    const testEmpl = new Manager("Jim", 33,"jim@gmail.com",22);
    expect(testEmpl.getId()).toBe(33);
})
test('Test the ID attribute to match 33',()=>{
    const testEmpl = new Manager("Jim", 33,"jim@gmail.com",22);
    expect(testEmpl.getEmail()).toBe('<a href = "mailto: jim@gmail.com">jim@gmail.com</a>');
})
test('Test the ID attribute to match 33',()=>{
    const testEmpl = new Manager("Jim", 33,"jim@gmail.com",22);
    expect(testEmpl.getName()).toBe('Jim');
})
test('Test if the correct office number is pulled', () => {
    const testEmpl = new Manager("Jim", 33,"jim@gmail.com",22);
    expect(testEmpl.getOffice()).toBe('Office Number: 22');
})