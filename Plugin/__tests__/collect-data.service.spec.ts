import fetchMock from 'jest-fetch-mock';
import { CollectDataService } from '../src/services/collect-data.service';

describe('CollectDataService', () => {
    let service: CollectDataService;

    beforeEach(() => {
        fetchMock.resetMocks();
        service = new CollectDataService();
    });

    it('should successfully send data to the API collect route', async () => {
        const mockResponseData = { success: true };
        fetchMock.mockResponseOnce(JSON.stringify(mockResponseData));

        const data = {
            device: 'desktop',
            operatingSystem: 'Windows',
            origin: 'localhost',
            themeSwitchCount: 0
        };

        const response = await service.saveData(data);
        const responseData = await response.json();

        expect(responseData).toEqual(mockResponseData);
        expect(fetchMock).toHaveBeenCalledWith(
            'http://localhost:3001/api/collect',
            expect.objectContaining({
                method: 'POST',
                headers: expect.objectContaining({
                    'Content-Type': 'application/json'
                })
            })
        );
        expect(fetchMock).toHaveBeenCalledTimes(1);
    });
});