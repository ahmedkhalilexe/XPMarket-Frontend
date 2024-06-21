import ClientProvider from "@/components/react query/ClientProvider";
import ProductPage from "@/components/productPage/productPage";

type Props = {
    params: { productId: string };
};

export default function Page({params}: Props) {
    return (
        <ClientProvider>
            <ProductPage productId={params.productId}/>
        </ClientProvider>
    );
}
