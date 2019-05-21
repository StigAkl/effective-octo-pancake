import {jsonwebtoken as jwt} from "jsonwebtoken"; 
const tokenSecret = process.env.TOKEN_SECRET || "playerSecret"; 

export const isValid = token => {

    try {
     jwt.verify(token, tokenSecret); 
    } catch(e) {
        return false; 
    }
return true; 
}

export const getIdFromToken = token => {
    if(isValid(token)) {
        try {
            const decoded = jwt.verify(token, tokenSecret);
            return decoded._id;
        } catch(e) {
            return undefined;
        }
    }
}