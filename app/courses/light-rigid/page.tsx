import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from 'app/components/ui/card';
import { CheckCircle2, Truck } from 'lucide-react';
import lrcover from 'app/assets/light-rigid-cover.webp';
import team from 'app/assets/team.jpg';
import safety from 'app/assets/safety.jpg';
import Navigation from 'app/components/navigation/navigation'; // Adjust the path as needed
import Footer from '@/app/components/footer/footer';

export default function LightRigidPage() {
  return (
    <main className="flex-1">
      <Navigation />
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={lrcover}
          alt="Light Rigid Truck"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">LR Licence In NSW</h1>
            <p className="text-xl md:text-2xl">Your Gateway to Driving Small Buses and Courier Trucks</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You Can Drive with an LR Licence</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Small trucks with a gross vehicle mass (GVM) of up to 8 tonnes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Buses seating more than 12 adults (including driver) with a GVM up to 8 tonnes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>If towing a trailer, it must not weigh more than 9 tonnes GVM.</span>
                </li>
              </ul>
              <p className="mt-6 text-lg">
                An LR licence is necessary for driving small buses, such as minibuses for schools and nursing homes, community buses, motorhomes, and courier trucks. It's also applicable for those wishing to join the NSW Ambulance Service.
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
          <h2 className="text-3xl font-bold mb-8 text-center">Requirements to Obtain LR Licence in NSW</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-6 w-6 text-primary" />
                  Licence Requirement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>You must have held a class C licence for at least 1 year. Learner licence is not included, but a green P licence is acceptable.</p>
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
                <p>Pass the RMS LR knowledge test.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-6 w-6 text-primary" />
                  Eyesight Test
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Pass an RMS eyesight test.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Light Rigid Training + Assessment</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg mb-4">
                AHS Driving School is your one-stop-shop for both training and assessment. Our team is dedicated to your success, and all members of staff speak fluent English. We aim to provide a quick and cost-effective training service, and we operate out of our high-quality training facility in Arndell Park.
              </p>
              <p className="text-lg mb-4">
                The training course has a duration of 1-day, and you will be taught how to drive an LR vehicle by one of our highly qualified instructors. At the end of your training, you should feel confident and ready to put your skills to the test with one of our assessors.
              </p>
              <p className="text-lg">
                During the assessment process, the assessor will take note of your driving. If you pass, you will receive a certificate of competency and be eligible to obtain an LR licence NSW from the RMS.
              </p>
            </div>
            <div className="space-y-6">
              <Image
                src={team}
                alt="LR Training"
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

      <Footer></Footer>
    </main>
  );
}
