const jwt=require('jsonwebtoken');
const secretKey='Atusi0987yhjd'
function setUser(user){
    try {
        
        return jwt.sign(user,secretKey);
    } catch (error) {
        return null;
    }

}