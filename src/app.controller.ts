import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Observable<string>> {
    try {
      return of(JSON.stringify('string'));
    } catch (error) {
      console.log(error, '<<<<<<<<');
    }
  }
}
