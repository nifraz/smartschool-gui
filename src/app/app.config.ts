import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { Apollo } from "apollo-angular";
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { ToastrModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(),
    importProvidersFrom(
      HttpClientModule,
      ToastrModule.forRoot(
        {
          timeOut: 3000,
          // positionClass: 'toast-bottom-right',
          // preventDuplicates: true,
        }
      ),
    ),
    {
      provide: APOLLO_OPTIONS,
      useFactory: (
        httpLink: HttpLink,
      ): ApolloClientOptions<unknown> => ({
        link: ApolloLink.from([
          httpLink.create({ uri: 'https://localhost:5001/graphql' }),
        ]),
        cache: new InMemoryCache(),
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
          query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
        },
      }),
      deps: [HttpLink],
    },
    Apollo,
  ]
};
