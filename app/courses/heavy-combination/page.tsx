import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from 'app/components/ui/card';
import { CheckCircle2, Truck } from 'lucide-react';
import team from 'app/assets/team.jpg';
import safety from 'app/assets/safety.jpg';
import cover from 'app/assets/hc-licence-cover.webp';
import Navigation from 'app/components/navigation/navigation';
import footer from 'app/components/footer/footer';

export default function HeavyCombinationPage() {
  return (
    <main className="flex-1">
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Navigation />
        <Image
          src={cover}
          alt="Heavy Combination Truck"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">HC Truck Licence In NSW</h1>
            <p className="text-xl md:text-2xl">Your Path to Becoming a Semi-Trailer Driver</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You Can Drive with an HC Licence</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Articulated vehicles with three or more axles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Heavy rigid vehicle trailer combinations including unladen dolly, with three or more axles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Any towed trailer with a GVM greater than nine tonnes</span>
                </li>
              </ul>
              <p className="mt-6 text-lg">
                An HC licence is required for various careers including tanker driver, road construction/quarry driver, refrigerated transport, container transport, heavy general freight, bulk garden supplies, and more.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Enquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No</label>
                    <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
                  </div>
                  <Button type="submit" className="w-full">Send Enquiry</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Requirements to Obtain HC Licence in NSW</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-6 w-6 text-primary" />
                  Licence Requirement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>You must have held a MR or HR licence (open or P class) for a minimum of 12 months.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-6 w-6 text-primary" />
                  Knowledge Test
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>You must pass the RMS driver knowledge test.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-6 w-6 text-primary" />
                  Practical Test
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>You must pass the on-road HC practical test and competency assessment at AHS Driving School.</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-lg">
            NOTE: If you have any medical conditions on your licence, you must bring a medical certificate to accompany the class of licence you are applying for.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Our Heavy Combination Licence Training Course</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg mb-4">
                Our truck driving course is intensive, and you will be trained one-on-one by one of our friendly instructors. We will teach you how to start, steer, manoeuvre and stop HC vehicles in addition to highlighting safety and practicing some defensive driving techniques.
              </p>
              <h3 className="text-2xl font-bold mt-6 mb-4">Fastening</h3>
              <p className="text-lg mb-4">
                A key element of our course is a component on fastening. Heavy combination vehicles carry heavy loads which are prone to shifting. We will discuss the best ways to safely load your vehicle, as well as the best restraint methods to keep your load secure.
              </p>
              <p className="text-lg">
                We will also take you through the coupling and un-coupling procedures, so that you have a complete understanding of how to operate your HC vehicle and keep both yourself and the public safe.
              </p>
            </div>
            <div className="space-y-6">
              <Image
                src={safety}
                alt="HC Training"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="flex gap-4">
                <Button size="lg">Book Now</Button>
                <Button size="lg" variant="outline">Call Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </main>
  );
}
