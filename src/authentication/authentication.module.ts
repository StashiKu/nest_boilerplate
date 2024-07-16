import { Module } from '@nestjs/common';
import { AuthenticationGuard } from './authentication.guard';
import { AUTHENTICATION_STRATEGY_TOKEN } from './authentication.strategy';
import { FakeAuthenticationStrategy } from './fake.strategy';
import { KeycloakAuthenticationStrategy } from './keycloak.strategy';
import { AuthenticationService } from './authentication.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    {
      provide: AUTHENTICATION_STRATEGY_TOKEN,
      useClass:
        process.env.NODE_ENV === 'test'
          ? FakeAuthenticationStrategy
          : KeycloakAuthenticationStrategy,
    },
  ],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
