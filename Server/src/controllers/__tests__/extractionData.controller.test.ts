import { Request, Response } from 'express';
import { HttpStatus } from '../../utils/enums/httpStatusEnum';
import { ExtractionDataService } from '../../services/extractionDataService';
import { collectData, listData } from '../extractionDataController';

jest.mock('../../services/extractionDataService');

describe('ExtractionDataController', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObject = {};

  beforeEach(() => {
    mockRequest = {
      body: {
        device: 'desktop',
        operatingSystem: 'Windows',
        origin: 'test.com',
        themeSwitchCount: 0,
      },
      header: jest.fn().mockReturnValue('Bearer token123'),
      query: {},
    };

    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockImplementation((result) => {
        responseObject = result;
      }),
    };
  });

  describe('collectData', () => {
    it('should collect data successfully', async () => {
      const mockResult = {
        status: HttpStatus.CREATED,
        body: { message: 'Data collected' },
      };

      (ExtractionDataService.collectData as jest.Mock).mockResolvedValue(
        mockResult,
      );

      await collectData(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(HttpStatus.CREATED);
      expect(mockResponse.json).toHaveBeenCalledWith(mockResult.body);
    });

    it('should handle missing authorization', async () => {
      mockRequest.header = jest.fn().mockReturnValue(undefined);

      const mockResult = {
        status: HttpStatus.UNAUTHORIZED,
        body: { error: 'No token provided' },
      };

      (ExtractionDataService.collectData as jest.Mock).mockResolvedValue(
        mockResult,
      );

      await collectData(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(HttpStatus.UNAUTHORIZED);
    });
  });

  describe('listData', () => {
    it('should list data successfully', async () => {
      mockRequest.query = { token: 'token123' };

      const mockResult = {
        status: HttpStatus.OK,
        body: [{ id: 1, data: 'test' }],
      };

      (ExtractionDataService.listData as jest.Mock).mockResolvedValue(
        mockResult,
      );

      await listData(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(HttpStatus.OK);
      expect(mockResponse.json).toHaveBeenCalledWith(mockResult.body);
    });

    it('should handle missing token', async () => {
      mockRequest.query = {};

      const mockResult = {
        status: HttpStatus.BAD_REQUEST,
        body: { error: 'Token is required' },
      };

      (ExtractionDataService.listData as jest.Mock).mockResolvedValue(
        mockResult,
      );

      await listData(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST);
    });
  });
});
