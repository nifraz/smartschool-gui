import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { Apollo } from "apollo-angular";
import { ApolloClientOptions, ApolloLink, InMemoryCache, split } from '@apollo/client/core';
import { ToastrModule } from 'ngx-toastr';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { getMainDefinition } from '@apollo/client/utilities';
import { Kind } from 'graphql';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { AutocompleteTypeComponent } from './shared/components/autocomplete-type/autocomplete-type.component';
import { provideNativeDateAdapter } from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(),
    provideNativeDateAdapter(MY_FORMATS),
    importProvidersFrom(
      HttpClientModule,
      ToastrModule.forRoot(
        {
          timeOut: 5000,
          // positionClass: 'toast-bottom-right',
          // preventDuplicates: true,
        }
      ),
      FormlyModule.forRoot({
        types: [
          {
            name: 'autocomplete',
            component: AutocompleteTypeComponent,
            wrappers: ['form-field'],
          },
        ],
        validationMessages: [{ name: 'required', message: 'This field is required' }],
      }),
      FormlyMaterialModule,
    ),
    {
      provide: APOLLO_OPTIONS,
      useFactory: (
        httpLink: HttpLink,
      ): ApolloClientOptions<unknown> => ({
        // link: ApolloLink.from([
        //   httpLink.create({ uri: 'https://localhost:5001/graphql' }),
        // ]),
        link: split(
          // Split based on operation type
          ({ query }) => {
            const definition = getMainDefinition(query);
            return (
              definition.kind === Kind.OPERATION_DEFINITION &&
              definition.operation === 'subscription'
            );
          },
          new GraphQLWsLink(
            createClient({
              url: 'ws://localhost:5000/graphql',
            }),
          ),
          httpLink.create({
            uri: 'http://localhost:5000/graphql',
          }),
        ),
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
