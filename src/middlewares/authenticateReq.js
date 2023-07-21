const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const authenticateReq = async (req, res, next) => {

    const { authorization } = req.headers
    const { serviceprovider } = req.headers

    if (serviceprovider) return next()

    if (!authorization) return res.status(404).json({ error: "Authorization token required" })

    const token = authorization.split(" ")[1];

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        const payload = ticket.getPayload();
        req.userData = payload
        next()

    } catch (error) {
        res.status(404).json({ "error": "Request is not authorized" })
    }
}

module.exports = authenticateReq
