import { logger } from "../utils/index.js"


export const addSocialController = async (req,res,next) => {
    try {
        const newsocial = getSocialSevice("all")
        return res.status(200).send({message: "Success", newsocial})
        
    } catch (error) {
        logger.error(error)
        next(error)
        
    }
    
}

export const getSocialController = async (req,res,next) => {
    try {
        const newsocial = getSocialSevice("all")
        return res.status(200).send({message: "Success", newsocial})
        
    } catch (error) {
        logger.error(error)
        next(error)
        
    }
    
}



export const getByIdSocialController = async (req,res,next) => {
    try {
        const id = req.params.id
        const newsocial = getSocialSevice('id',id)
        return res.status(200).send({message: "Success", newsocial})
        
    } catch (error) {
        logger.error(error)
        next(error)
        
    }
    
}

export const updateSocialController = async (req,res,next) => {
    try {
        const { id } = req.params;

        const { user_id, platform, platform_user } = req.body;
        const updatedSocial = await updateSocialService(body, id)
        if (!updatedSocial) {
            return res.status(404).send({
                message: "social not found"
            })
        }
        return res.status(200).send({
            message: "updated",
            date: updatedSocial.id
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteSocialController = async (req,res,next) => {
    try {
        const id = req.params.id
        const deleteSocial = await deleteSocialService(id)
        if(!deleteSocial){
            returnres.status(404).send({message: "socila not found"})
        }
        return res.status(200).send({
            message:"deleted",
            date:deleteSocial.id
        })
    } catch (error) {
        logger.error(error)
        next(error)
        
    }
    
}

