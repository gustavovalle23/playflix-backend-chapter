import { Controller, Get } from './decorator';

@Controller({ path: 'customers', version: '1' })
export class CustomerController {
  @Get()
  getAllCustomers() {
    return [{ id: 1, name: 'John Doe' }];
  }
}
