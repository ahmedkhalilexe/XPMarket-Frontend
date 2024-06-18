"use client"
import {QueryClient, QueryClientProvider} from "react-query";
import UserPopOver from "@/components/navBar/userPopOver";

export default function AuthButton() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <UserPopOver />
        </QueryClientProvider>
    )
}