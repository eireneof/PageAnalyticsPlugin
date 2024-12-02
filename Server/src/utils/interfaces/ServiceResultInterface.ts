import { HttpStatus } from '../enums/httpStatusEnum';

export interface IServiceResult {
  status: HttpStatus;
  body?: object;
}
