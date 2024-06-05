import HeroCarousel from "@/components/heroCarousel/heroCarousel";
import MoreToLoveSection from "@/components/mainPage/moreToLoveSection";
import NewProductsSection from "@/components/mainPage/newProductsSection";
import OnSaleSection from "@/components/mainPage/onSaleSection";
import {Suspense} from "react";
import SectionLoading from "@/components/mainPage/sectionLoading";


export default function Home() {
    return (
        <>
            <HeroCarousel/>
            <section>

                {/* On Sale section */}
                <Suspense fallback={<SectionLoading />}>
                    <OnSaleSection/>
                </Suspense >
            </section>
            <section>
                {/* New products! */}
                <NewProductsSection/>
            </section>
            <section>
                {/* More to love! */}
                <MoreToLoveSection/>
            </section>
        </>
    );
}
