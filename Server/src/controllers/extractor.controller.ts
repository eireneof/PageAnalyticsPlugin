//import modules

import { Request, Response } from 'express'
import { ExtractedDataValidator } from '../models/extractor'
import { ExtractedDataServices } from '../services/extractor.service'

// TODO: adicionar tratativa para dados vazios
// TODO: ver como retornar os erros
// TODO: validar se está seguindo os princípios RESTFUL corretamente

class ExtractedDataController {
    addExtractedData = async (req: Request, res: Response) => {
        const data = {
            device: req.body.device,
            operatingSystem: req.body.operatingSystem,
            origin: req.body.origin,
            themeSwitchCount: req.body.themeSwitchCount,
            createdAt: req.body.createdAt
        }
        const {error, value} = ExtractedDataValidator.validate(data)
        if(error){
            res.send(error)
        }else{
            const extractedData = await ExtractedDataServices.createExtractedData(value)
            res.status(201).send(extractedData)          
        }
    }

    getExtractedData = async (req: Request, res: Response) => {
        const extractedData = await ExtractedDataServices.getAllExtractedData()
        res.status(200).send(extractedData)
    }


    getExtractedDataById = async (req: Request, res: Response) => {
        const id = req.params.id
        const extractedData = await ExtractedDataServices.getExtractedDataById(id)
        res.status(200).send(extractedData)
    }

    deleteExtractedData = async (req: Request, res: Response) => {
        console.log("entrei no controller")
        const id = req.params.id
        await ExtractedDataServices.deleteExtractedData(id)
        res.status(200).send(`ExtractedData ${id} deleted`)
    }

}

// TODO: se der, implementar query?

export const ExtractedDataControllers = new ExtractedDataController()