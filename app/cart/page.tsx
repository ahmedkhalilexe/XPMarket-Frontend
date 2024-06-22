import ClientProvider from "@/components/react query/ClientProvider";
import CartPage from "@/components/cartPage/CartPage";

type Props = {};

function Page (props : Props){
  
  return (<ClientProvider>
      <CartPage />
  </ClientProvider>)
}

export default Page;
