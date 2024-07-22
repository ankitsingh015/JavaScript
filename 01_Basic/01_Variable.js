const accountId = 144553        //Value can't be change
let accountEmail="e-mail@gmail.com"
var accountPassword="ankit"     //Prefer Not To Use
accountCity= "Jaipur"
let accountState  

// accountId =2  Not Allowed

accountEmail="email@gmail.com"
accountPassword="singh"
accountCity="Bihar"

console.log(accountId);     //144553

//Prefer not to use =>var<=
// because of issue in block scope and functional Scope

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])    //Output
                                                                                    // ┌─────────┬───────────────────┐
                                                                                    // │ (index) │ Values            │
                                                                                    // ├─────────┼───────────────────┤
                                                                                    // │ 0       │ 144553            │
                                                                                    // │ 1       │ 'email@gmail.com' │
                                                                                    // │ 2       │ 'singh'           │
                                                                                    // │ 3       │ 'Bihar'           │
                                                                                    // │ 4       │ undefined         │
                                                                                    // └─────────┴───────────────────┘



                                   