const FacebookUser = require("../models/FacebookUser");
const GoogleUser = require("../models/GoogleUser");


const registerUserUsingGoogle = async (req, res) => {

    try {
        // Destructing data 
        const { email, picture, name } = req.userData;

        // Checking is the user already exists
        const isUserDataAlreadyStored = await GoogleUser.findOne({ email });

        console.log(isUserDataAlreadyStored);

        if (isUserDataAlreadyStored) {
            return res.status(202).json({ "message": "User already exists in Database", "userEmail": email })
        }

        // Storing the user data in DB
        const user = await GoogleUser({ email, name, picture });
        await user.save()

        return res.status(200).json({ "message": "User Data is stored in DB", "userEmail": email })

    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}


const registerUserUsingFacebook = async (req, res) => {

    try {
        // Destructing data 
        const { profileID, picture, name } = req.body;

        // Checking is the user already exists
        const isUserDataAlreadyStored = await FacebookUser.findOne({ profileID });
        if (isUserDataAlreadyStored) {
            return res.status(200).json({ "message": "User already exists in Database", "profileID": profileID })
        }

        // Storing the user data in DB
        const user = await FacebookUser({ profileID, name, picture });
        await user.save()

        return res.status(200).json({ "message": "User Data is stored in DB", "profileID": profileID })

    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}

const getGoogleUserData = async (req, res) => {

    const email = await req.params.email;
    const user = await GoogleUser.findOne({ email })

    if (user) {
        return res.status(200).json(user)
    }

    return res.status(404).json({ error: "User not found" })
}


const getFacebookUserData = async (req, res) => {

    const profileID = await req.params.profileID;
    const user = await FacebookUser.findOne({ profileID })

    if (user) {
        return res.status(200).json(user)
    }

    return res.status(404).json({ error: "User not found" })
}

module.exports = { registerUserUsingFacebook, registerUserUsingGoogle, getGoogleUserData, getFacebookUserData }