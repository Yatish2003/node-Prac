
function validation(req,res){
    return(
        <>
            <input type='text' placeholder='Username'/>
            <input type='text' placeholder='Email'/>
            <input type='password' placeholder='PAssword'/>
            <input type='submit'/>
        </>
    )

}
module.exports = validation;