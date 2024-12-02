import ExtractionData from '../models/extractionData';
import { IExtractionData } from '../utils/interfaces/extractionDataInterface';

export class ExtractionDataRepository {
  static async save(newData: Partial<IExtractionData>) {
    const extractionData = new ExtractionData(newData);
    return extractionData.save();
  }

  static async findByToken(token: string) {
    return ExtractionData.find({ token })
      .sort({ createdAt: -1 })
      .limit(20)
      .lean();
  }
}
