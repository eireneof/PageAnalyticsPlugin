import { HttpStatus } from '../utils/enums/httpStatusEnum';
import { IExtractionData } from '../utils/interfaces/extractionDataInterface';
import { ExtractionDataValidator } from '../utils/validators/extractionDataValidator';
import { IServiceResult } from '../utils/interfaces/ServiceResultInterface';
import { ExtractionDataRepository } from '../repositories/extractionDataRepository';

export class ExtractionDataService {
  static async collectData(
    body: Partial<IExtractionData>,
    token: string,
  ): Promise<IServiceResult> {
    try {
      const newData: Partial<IExtractionData> = {
        ...body,
        token,
        createdAt: new Date(),
      };

      const { error } = ExtractionDataValidator.validate(newData);
      if (error) {
        return {
          status: HttpStatus.BAD_REQUEST,
          body: { message: 'Validation error', error },
        };
      }

      const savedData = await ExtractionDataRepository.save(newData);
      return {
        status: HttpStatus.CREATED,
        body: {
          message: 'Data collected successfully',
          id: savedData._id,
        },
      };
    } catch (error: unknown) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        body: { error, details: error },
      };
    }
  }

  static async listData(token: string): Promise<IServiceResult> {
    if (!token) {
      return {
        status: HttpStatus.BAD_REQUEST,
        body: { message: 'Token is required as a query parameter' },
      };
    }

    try {
      const data = await ExtractionDataRepository.findByToken(token);

      if (!data.length) {
        return {
          status: HttpStatus.NO_CONTENT,
        };
      }

      return {
        status: HttpStatus.OK,
        body: data,
      };
    } catch (error: unknown) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        body: { error, details: error },
      };
    }
  }
}
