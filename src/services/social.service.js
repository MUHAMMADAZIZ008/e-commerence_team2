import { AppError } from "../utils/index.js";

export const addSocialService = async () => {
    try {
        const new_Social= await Social(social)
        await new_Social.save()
        return new_Social
    } catch (error) {
        throw new Error(error)
    }
}

export const getSocialService = async () => {
    try {
     res.send(await Social.find())
    } catch (error) {
        throw new Error(error)
    }
}

export const updateSocialService = async (Social, id, social) => {
    try {
        const updateSociales = await Social.findByIdAndUpdate(id, social, { new: true }); 
        if (!updateSociales) {
            throw new AppError('will not update', 400);
        }
        return updateSociales;
    } catch (error) {
        throw new Error(error.message);
    }
}



export const deleteSocialService = async (id) => {
    try {
        
        const deleteSocial = await Social.findByIdAndDelete(id)
        return deleteSocial
    } catch (error) {
        throw new Error(error)
    }
}