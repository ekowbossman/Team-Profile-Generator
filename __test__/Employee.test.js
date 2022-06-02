const Employee = require( "../lib/Employee" );

////////////////////////////////////////////
////////////////////////////////////////////

test( "Create an employee object.", () => {
   const employee = new Employee( "Shellie", 2938, "Shellie@Shellie.Com");

   expect( typeof( employee )).toBe( "object" );
   expect( employee.name ).toEqual( expect.any( String ));
   expect( employee.id ).toEqual( expect.any( Number ));
   expect( employee.email ).toEqual( expect.any( String ));
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Check to see if can getName() or not.", () => {
   const testName = "Shellie";
   const employee = new Employee( testName );

   expect( employee.getName()).toBe( testName );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Check to see if can getId() or not.", () => {
   const testId = 93847;
   const employee = new Employee( "Shellie", testId );

   expect( employee.getId()).toBe( testId );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Check to see if can getEmail() or not.", () => {
   const testEmail = "ekowbossman@gmail.com";
   const employee = new Employee( "Bossman", 29384, testEmail );

   expect( employee.getEmail()).toBe( testEmail );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Use getRole() to return \"Employee\" as role.", () => {
   const testRole = "Employee";
   const employee = new Employee( "Bossman", 38479, "Shellie@ekowbossman.Com" );

   expect( employee.getRole()).toBe( testRole );
});