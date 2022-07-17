const Engineer = require('../lib/engineer')

test('Test instance of employee to be an Object',()=>{
    const testEmpl = new Engineer("Jim", 33,"jim@gmail.com",'jimsgithub');
    expect(typeof(testEmpl)).toBe("object");
})
test('Test the name attribute to match Jim',()=>{
    const testEmpl = new Engineer("Jim", 33,"jim@gmail.com",'jimsgithub');
    expect(testEmpl.name).toBe("Jim");
})
test('Test the ID attribute to match 33',()=>{
    const testEmpl = new Engineer("Jim", 33,"jim@gmail.com",'jimsgithub');
    expect(testEmpl.id).toBe(33);
})
test('Test to confirm the github pulls jimsgithub', ()=> {
    const testEmpl = new Engineer('Jim',33,"jim@gmail.com",'jimsgithub')
    expect(testEmpl.github).toBe('jimsgithub')
})
test('Test to see what the role returns', () => {
    const testEmpl = new Engineer('Jim', 33, 'jim@gmail.com','jimsgithub')
    expect(testEmpl.getRole()).toBe('Engineer')
})
test('Test the getID function pulls the ID of 33',()=>{
    const testEmpl = new Engineer("Jim", 33,"jim@gmail.com",'jimsgithub');
    expect(testEmpl.getId()).toBe(33);
})
test('Test the getEmail function that it pulls the HTML for the card',()=>{
    const testEmpl = new Engineer("Jim", 33,"jim@gmail.com",'jimsgithub');
    expect(testEmpl.getEmail()).toBe('<a href = "mailto: jim@gmail.com">jim@gmail.com</a>');
})
test('Test the getName function to match Jim',()=>{
    const testEmpl = new Engineer("Jim", 33,"jim@gmail.com",'jimsgithub');
    expect(testEmpl.getName()).toBe('Jim');
})
test('Test if the getGithub function will pull HTML that would redirect in a new tab to the users github page', () => {
    const testEmpl = new Engineer("Jim", 33,"jim@gmail.com",'jimsgithub');
    expect(testEmpl.getGithub()).toBe('<a href="https://github.com/jimsgithub" target="_blank">GitHub</a>');
})