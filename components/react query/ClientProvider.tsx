"use client"
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactNode} from "react";

function ClientProvider({children} :{
    children: ReactNode

} ) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default ClientProvider;