import jwt from "jsonwebtoken"

function auth(req, res, next) {

    const token  = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401).json({ message: 'Unauthorized Access' });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch (error) {

        return res.status(403).json({ message: 'Invalid Token' });
    }

}

export default auth;