
import { ExtractedData } from '../models/extractor'
export class ExtractedDataService {

    async createExtractedData(data: any) {
        const newExtractedData = await ExtractedData.create(data)
        return newExtractedData
    }

    async getExtractedDataById(id: string) {
        const extractedData = await ExtractedData.findById({_id:id})
        if (!extractedData) {
            return 'ExtractedData not available'
        }
        return extractedData
    }

    async getAllExtractedData() {
        const extractedData = await ExtractedData.find({})
        return extractedData
    }

    async deleteExtractedData(id: string) {
        console.log("entrei no delete")
        const extractedData = await ExtractedData.findByIdAndDelete(id)
        if (!extractedData) {
            return 'extractedData not available'
        }
       
    }
 
}
// TODO: refatorar com um padrão pro nome das coisas
// TODO: aplicar algum padrão de projeto
export const ExtractedDataServices = new ExtractedDataService()