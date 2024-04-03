"use client";

import { ApolloLink, HttpLink } from '@apollo/client';
import {
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    NextSSRApolloClient,
    SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { setContext } from "@apollo/client/link/context";
import Cookies from 'js-cookie';


function makeClient() {
    const token = Cookies.get('token');
    const headerLink = setContext(async(request, previousContext)=> {
        return {
            headers: {
                ...previousContext.headers,
                Authorization: `Bearer ${token}`,
            }
        }
    })

    const httpLink = new HttpLink({
        uri: 'http://localhost:4000/graphql',
        fetchOptions: {
            cache: 'no-store',
        },
    });

    return new NextSSRApolloClient({
        link:
            typeof window === 'undefined'
                ? ApolloLink.from([new SSRMultipartLink({ stripDefer: true }), headerLink.concat(httpLink)])
                : headerLink.concat(httpLink),
        cache: new NextSSRInMemoryCache(),
    });

    // return new NextSSRApolloClient({
    //     link: headerLink.concat(httpLink),
    //     cache: new NextSSRInMemoryCache(),
    // });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}
