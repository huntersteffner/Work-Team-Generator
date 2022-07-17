const Employee = require('../lib/employee')

test('Test instance of employee to be an Object',()=>{
    const testEmpl = new Employee("Jim", 33,"jim@gmail.com");
    expect(typeof(testEmpl)).toBe("object");
})
test('Test the name attribute to match Jim',()=>{
    const testEmpl = new Employee("Jim", 33,"jim@gmail.com");
    expect(testEmpl.name).toBe("Jim");
})
test('Test the ID attribute to match 33',()=>{
    const testEmpl = new Employee("Jim", 33,"jim@gmail.com");
    expect(testEmpl.id).toBe(33);
})
test('Test to see what the role returns', () => {
    const testEmpl = new Employee('Jim', 33, 'jim@gmail.com')
    expect(testEmpl.getRole()).toBe('Employee')
})
test('Test the getID function to match 33',()=>{
    const testEmpl = new Employee("Jim", 33,"jim@gmail.com");
    expect(testEmpl.getId()).toBe(33);
})
test('Test the getEmail function pulls the HTML for the card',()=>{
    const testEmpl = new Employee("Jim", 33,"jim@gmail.com");
    expect(testEmpl.getEmail()).toBe('<a href = "mailto: jim@gmail.com">jim@gmail.com</a>');
})
test('Test the getName attribute to pull Jim',()=>{
    const testEmpl = new Employee("Jim", 33,"jim@gmail.com");
    expect(testEmpl.getName()).toBe('Jim');
})