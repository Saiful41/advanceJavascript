const students = [
    {id:123,name:'siyam'},
    {id:124,name:'samiya'},
    {id:125,name:'saiful'},
    {id:126,name:'Antu'},
    {id:127,name:'MOhiuddin'}
];

const names= students.map(s => s.name);
const ids = students.map(s =>s.id);
const bigger = students.find(s => s.id>124);
console.log(bigger);