import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from 'app/components/ui/card';
import { CheckCircle2, Truck } from 'lucide-react';
import mrcover from 'app/assets/mr-license-cover.jpg'; // Replace with the correct path for the image
import team from 'app/assets/team.jpg'; // Use the same image or a different one
import Navigation from 'app/components/navigation/navigation'
import Footer from '@/app/components/footer/footer';

export default function MediumRigidPage() {
  return (
    <main className="flex-1">
      <Navigation />
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={mrcover}
          alt="Medium Rigid Truck"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">MR Licence In NSW</h1>
            <p className="text-xl md:text-2xl">Your Gateway to Driving Medium Rigid Vehicles</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You Can Drive with an MR Licence</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Rigid motor vehicles with a GVM of more than 8 tonnes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Any towed trailer must not weigh more than 9 tonnes GVM.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Common roles include bus driver, courier, or medium haulage driver.</span>
                </li>
              </ul>
              <p className="mt-6 text-lg">
                Obtaining an MR licence opens up various career opportunities, enabling you to drive medium rigid vehicles confidently.
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
          <h2 className="text-3xl font-bold mb-8 text-center">Requirements to Obtain MR Licence in NSW</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-6 w-6 text-primary" />
                  Licence Requirement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>You must have held a class C licence for at least 1 year. Learner licence does not count, but time spent on a P1 licence does.</p>
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
                <p>Pass the RMS MR knowledge test.</p>
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
          <h2 className="text-3xl font-bold mb-8">1 Day Training Course + Assessment</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg mb-4">
                GRU Driving School provides comprehensive training for the MR licence. Our courses are designed with the local community in mind, with staff fluent in Hindi, Punjabi, Sri Lankan, and English.
              </p>
              <p className="text-lg mb-4">
                Our MR licence course is RMS accredited and can be completed in just 1 day. We focus on safety and defensive driving, ensuring you gain the skills needed to operate a medium rigid vehicle with confidence.
              </p>
              <p className="text-lg">
                After training, you will be assessed by one of our licensed assessors. Upon passing, you can visit the RMS to obtain your upgraded MR licence.
              </p>
            </div>
            <div className="space-y-6">
              <Image
                src={team}
                alt="MR Training"
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
