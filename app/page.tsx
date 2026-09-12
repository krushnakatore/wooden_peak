import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import CategoriesGrid from '@/components/home/CategoriesGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import PerfectForYourBusiness from '@/components/home/PerfectForYourBusiness';
import CustomizationShowcase from '@/components/home/CustomizationShowcase';
import OrderProcess from '@/components/home/OrderProcess';
import ExportMetrics from '@/components/home/ExportMetrics';
import CatalogueCTA from '@/components/home/CatalogueCTA';
import BuyerReviews from '@/components/home/BuyerReviews';
import FinalCTA from '@/components/home/FinalCTA';
import WaveDivider from '@/components/ui/WaveDivider';

export const metadata: Metadata = {
  title: 'Wooden Handicrafts & Beach Decor Exporter from India',
  description:
    'MeaningWood Crafts manufactures and exports wooden beach decor, souvenirs, table decor, and custom gifts to importers and resorts in Mauritius, USA, Australia, Europe, UAE, and Canada. MOQ from 500 pieces.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <PerfectForYourBusiness />
      <CustomizationShowcase />
      <OrderProcess />
      <WaveDivider topColor="bg-sand-50" fillColor="fill-white" />
      <ExportMetrics />
      <CatalogueCTA />
      <BuyerReviews />
      <FinalCTA />
    </>
  );
}
