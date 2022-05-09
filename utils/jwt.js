import jwt from 'jsonwebtoken';

export const generateJWT = (payload) => {
    console.log("payload body", payload)
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        id: payload.id,
    }
    const token = jwt.sign(data, jwtSecretKey);
    console.log("token generated", token)
    return token;
};

export const verifyJWT = (token) => {
    // console.log("verfiy token::", token)
    // let tokens='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiTW9uIE1heSAwOSAyMDIyIDE0OjUwOjQ0IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsImlkIjoxMCwiaWF0IjoxNjUyMDg4MDQ0fQ.o83AsHY8CUCSros9ATHVvbHxhvqjvQ9nbMMFsFrURQs'

    if (token) {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        try {
            const verified = jwt.verify(token, jwtSecretKey);
            // console.log("vefrfordID::", verified)
            if (verified) {
                return { id: verified.id };
            } else {
                return error;
            }
        } catch (error) {
            return error;
        }
    }
    else {
        return 0;
    }
};
