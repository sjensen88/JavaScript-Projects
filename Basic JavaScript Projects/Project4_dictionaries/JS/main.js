function my_Dictionary() {                                          //naming the function    
    var employee = {                                                //defining our object variable
        firstName: "Jane",                                          //setting up our key-value pairs
        lastName: "Doe",
        age: 50,
        department: "HR"
    };
    delete employee.age;                                            //deletes the "age" key
    document.getElementById("Dictionary").innerHTML = employee.age; //grabs id "Dictionary" from our HTML file and outputs the "employee age" value
}

