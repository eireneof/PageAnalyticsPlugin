import { Request, Response } from 'express';

import ExtractionData, {
  ExtractionDataValidator,
} from '../models/extractionData';

// TODO: adicionar tratativa para dados vazios
// TODO: criar handleError
// TODO: validar se está seguindo os princípios RESTFUL corretamente
// TODO: mudar responsabilidades devidas para o service

export const collectData = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { device, operatingSystem, origin, themeSwitchCount } = req.body;

  try {
    const newData = {
      device,
      operatingSystem,
      origin,
      themeSwitchCount,
      createdAt: new Date(),
      token: req.header('Authorization')?.toString()?.trim(),
    };
    const { error } = ExtractionDataValidator.validate(newData);
    if (error) {
      res.status(400).json({ message: 'Validation error', error });
    }

    const extractionData = new ExtractionData(newData);
    const savedData = await extractionData.save();
    res.status(201).json({
      message: 'Data collected successfully',
      id: savedData._id,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
  }
};

export const listData = async (req: Request, res: Response) => {
  try {
    const token = req.query.token as string;
    const data = await ExtractionData.find({ token })
      .sort({ createdAt: -1 })
      .limit(20);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
};
