const Engineer = require( "../lib/Engineer" );

////////////////////////////////////////////
////////////////////////////////////////////

test( "Set engineer's Github username.", () => {
   const testGithutUsername = "ekowbossman";
   const engineer = new Engineer( "Bossman", 38475, "ekowbossman@gmail.com", testGithutUsername );

   expect( engineer.githubUsername ).toBe( testGithutUsername );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Get Github account using getGithub().", () => {
   const testGithubUsername = "ekowbossman";
   const engineer = new Engineer( "Bossman", 39482, "ekowbossman@gmail.Com", testGithubUsername );

   expect( engineer.getGithubUsername()).toBe( testGithubUsername );
});

////////////////////////////////////////////
////////////////////////////////////////////

test( "Use getRole() to return \"Engineer\" as role.", () => {
   const testRole = "Engineer";
   const engineer = new Engineer( "Bossman", 38472, "ekowbossman@gmail.com" );

   expect( engineer.getRole()).toBe( testRole );
});