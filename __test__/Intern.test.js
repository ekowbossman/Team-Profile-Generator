const Intern = require( "../lib/Intern" );

////////////////////////////////////////////
////////////////////////////////////////////

test( "Set intern school.", () => {
   const testSchool = "University of Cape Coast";
   const intern = new Intern( "Bossman", 38495, "ekowbossman@gmail.Com", testSchool );

   expect( intern.school ).toBe( testSchool );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Set school using getSchool().", () => {
   const testSchool = "University of Cape Coast";
   const intern = new Intern( "Bossman", 38494, "ekowbossman@gmail.com", testSchool );

   expect( intern.getSchool()).toBe( testSchool );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Use getRole() to return \"Intern\" as role.", () => {
   const testRole = "Intern";
   const intern = new Intern( "Bossman", 20803, "ekowbossman@gmail.Com", "University of Cape Coast" );

   expect( intern.getRole()).toBe( testRole );
});