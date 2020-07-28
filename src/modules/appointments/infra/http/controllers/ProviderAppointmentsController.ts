import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderAppoitmentsService from '@modules/appointments/services/ListProviderAppointmentService';


export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.body;

    const createAppointment = container.resolve(ListProviderAppoitmentsService);

    const appointments = await createAppointment.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(appointments);
  }
}
