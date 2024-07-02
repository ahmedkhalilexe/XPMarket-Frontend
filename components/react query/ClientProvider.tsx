"use client"
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactNode} from "react";

function ClientProvider({children}: {
    children: ReactNode

}) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5
            }
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default ClientProvider;