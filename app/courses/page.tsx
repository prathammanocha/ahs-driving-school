import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from 'app/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from 'app/components/ui/card';
import { Phone, ChevronRight } from 'lucide-react';
import Navigation from '../components/navigation/navigation';
import hr from '../assets/hr_img-1.jpg';
import lr from '../assets/lr_img.jpg';
import hc from '../assets/hr_img2.jpg';
import mc from '../assets/mc_img.jpg';
import mr from '../assets/mr_img.jpg';
import Footer from '../components/footer/footer';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  link: string;
}

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation></Navigation>
      <main className="flex-1">
        <section className="w-full py-16 bg-gray-50">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Light Rigid Truck Licence"
                description="LR licence for vehicles with 2 axles and up to 8t GVM."
                imageSrc={lr}
                link="/courses/light-rigid"
              />
              <ServiceCard
                title="Medium Rigid Truck Licence"
                description="MR licence for vehicles with 2 axles over 8,000 kg GVM."
                imageSrc={mr}
                link="/courses/medium-rigid"
              />
              <ServiceCard
                title="Heavy Rigid Truck Licence"
                description="HR licence for vehicles with 3 or more axles."
                imageSrc={hc}
                link="/courses/heavy-rigid"
              />
              <ServiceCard
                title="Heavy Combination Truck Licence"
                description="HC licence for prime movers with a semi-trailer."
                imageSrc={hr}
                link="/courses/heavy-combination"
              />
              <ServiceCard
                title="Multi Combination Truck Licence"
                description="MC licence for B-Doubles and road trains."
                imageSrc={mc}
                link="/courses/multi-combination"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">Our team is here to answer your questions and help you begin your journey to becoming a licensed truck driver.</p>
            <Link href="/contact">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Contact Us <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

function ServiceCard({ title, description, imageSrc, link }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={250}
        className="object-cover transition-transform transform hover:scale-105"
      />
      <CardHeader>
        <CardTitle className="text-xl text-blue-600">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={link}>
          <Button variant="outline" className="w-full hover:bg-blue-600 hover:text-white">Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
