import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from 'app/components/ui/card';
import { CheckCircle2, Truck } from 'lucide-react';
import mcCover from 'app/assets/light-rigid-cover.webp'; // Replace with the correct path for the image
import mcTeam from 'app/assets/team.jpg'; // Use the same image or a different one
import Navigation from 'app/components/navigation/navigation'; // Adjust the path as needed
import Footer from '@/app/components/footer/footer';

export default function MultiCombinationPage() {
  return (
    <main className="flex-1">
      <Navigation />
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={mcCover}
          alt="Multi Combination Truck"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">MC Truck Licence</h1>
            <p className="text-xl md:text-2xl">Your Path to Driving Multi-Combination Vehicles</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You Can Drive with an MC Licence</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>B-Doubles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Road Trains</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Prime movers, low loader dolly and low loader trailer combinations.</span>
                </li>
              </ul>
              <p className="mt-6 text-lg">
                The MC licence training course is rigorous and requires a high level of confidence and focus.
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
          <h2 className="text-3xl font-bold mb-8 text-center">Requirements to Obtain MC Licence</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-6 w-6 text-primary" />
                  Licence Requirement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>You must have held a Class HR or HC licence for a minimum of one year.</p>
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
                <p>Pass the RMS MC knowledge test.</p>
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-6 w-6 text-primary" />
                  Practical Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Complete HVCBA and on-road MC licence practical with GRU Driving School.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-6 w-6 text-primary" />
                  Medical Examination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Pass a medical examination or provide a medical certificate if needed.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Our Multi Combination Truck Licence Training Course</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg mb-4">
                The MC combination truck licence course is intensive and focused on safety, enhancing your skills and confidence in handling MC vehicles.
              </p>
              <p className="text-lg mb-4">
                Training is conducted one-on-one with our friendly instructors, covering essential skills like steering, manoeuvring, and safe loading.
              </p>
              <p className="text-lg">
                Our courses are tailored to the Indian community, with instructors fluent in Hindi, Punjabi, Sri Lankan, and English, ensuring a supportive learning environment.
              </p>
            </div>
            <div className="space-y-6">
              <Image
                src={mcTeam}
                alt="MC Training Team"
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
