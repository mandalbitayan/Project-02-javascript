let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    let result=arr.map(element =>{
        if(element.profession=="developer"){
            console.log(element)
        }
    })
}
PrintDeveloper()
  
let arr1=[
    {id:4, name:"susan", age:"20", profession:"intern"}
];
  function addData() {
    //Write your code here, just console.log
    arr.push(...arr1);
    console.log(arr)
}
addData()

  
  function removeAdmin() {
    //Write your code here, just console.log
        let filteredArray = arr.filter(employee => employee.profession !== 'admin');
        console.log(filteredArray);
  }
  removeAdmin()
  

  let employee2 = [
    { id: 5, name: "Aman", age: 28, profession: "Teacher" },
    { id: 6, name: "Rinku", age: 30, profession: "Cricketer" },
    { id: 7, name: "Rohit", age: 29, profession: "Cricketer" },
  ];
  function concatenateArray() {
    //Write your code here, just console.log
    console.log(arr.concat(employee2))
  }
  concatenateArray()
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }