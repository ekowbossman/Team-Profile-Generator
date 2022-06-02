const Manager = require( "../lib/Manager" );

////////////////////////////////////////////
////////////////////////////////////////////

test( "Setting manager's office number.", () => {
   const testOfficeNumber = 888;
   const manager = new Manager( "Bossman", 38472, "ekowbossman@gmail.Com", testOfficeNumber );

   expect( manager.officeNumber ).toBe( testOfficeNumber );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Use getRole() to return \"Manager\" as role.", () => {
   const testRole = "Manager";
   const manager = new Manager( "Bossman", 38472, "ekowbossman@gmail.Com", 888 );

   expect( manager.getRole()).toBe( testRole );
});