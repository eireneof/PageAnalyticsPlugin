
export class CollectDataService {
    async saveData(data) {
        const url = "http://localhost:3001/api/collect";
        const token = "9432c3271314caaa5f29f248cf4513fb0f341a2864981b3cda69052c526ded97";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            },
            body: JSON.stringify(data),
        });
        console.log(response);
        return response;
    }
}
