const Intern = require('../lib/intern')

test('Test instance of employee to be an Object',()=>{
    const testEmpl = new Intern("Jim", 33,"jim@gmail.com",'GA TECH');
    expect(typeof(testEmpl)).toBe("object");
})
test('Test the name attribute to match Jim',()=>{
    const testEmpl = new Intern("Jim", 33,"jim@gmail.com",'GA TECH');
    expect(testEmpl.name).toBe("Jim");
})
test('Test the ID attribute to match 33',()=>{
    const testEmpl = new Intern("Jim", 33,"jim@gmail.com",'GA TECH');
    expect(testEmpl.id).toBe(33);
})
test('Test to confirm if it contains the correct school', ()=> {
    const testEmpl = new Intern('Jim',33,"jim@gmail.com",'GA TECH')
    expect(testEmpl.school).toBe('GA TECH')
})
test('Test to see what the role returns', () => {
    const testEmpl = new Intern('Jim', 33, 'jim@gmail.com','GA TECH')
    expect(testEmpl.getRole()).toBe('Intern')
})
test('Test the getID function to match 33',()=>{
    const testEmpl = new Intern("Jim", 33,"jim@gmail.com",'GA TECH');
    expect(testEmpl.getId()).toBe(33);
})
test('Test the the getEmail to return to HTML to be inserted into card',()=>{
    const testEmpl = new Intern("Jim", 33,"jim@gmail.com",'GA TECH');
    expect(testEmpl.getEmail()).toBe('<a href = "mailto: jim@gmail.com">jim@gmail.com</a>');
})
test('Test the getName function to match Jim',()=>{
    const testEmpl = new Intern("Jim", 33,"jim@gmail.com",'GA TECH');
    expect(testEmpl.getName()).toBe('Jim');
})
test('Test if getSchool function matches Current School: GA TECH', () => {
    const testEmpl = new Intern("Jim", 33,"jim@gmail.com",'GA TECH');
    expect(testEmpl.getSchool()).toBe('Current School: GA TECH');
})