// password validation
// min 6 char
// 1 capitalize
// 1 number
/**
 * 
 * @param {@string} password 
 * @returns boolean
 */
const validate =(password) =>{
    const lowercase="abcdefghijklmnopqrstuvwxyz"
    const uppercase=lowercase.map((e)=>e.toUpperCase());
    const digit ="123456789".split("")
    let flag =true;
    if(password.length<8)
    flag= false;
    
    if(!password.split("").find((c)=>lowercase.includes(c))) flag= false;
    if(!password.split("").find((c)=>uppercase.includes(c))) flag=false

}
module.exports =validate;