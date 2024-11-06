import Image from 'next/image';
import Link from 'next/link';
import truck from 'app/assets/truckdriving.jpeg'
import { Button } from 'app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from 'app/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/navigation/navigation';
import Footer from '../components/footer/footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
          <Image
            src= {truck}
            alt="AHS Driving School Contact"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl md:text-2xl">Get in touch with AHS Driving School</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">Send Message</Button>
                </form>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Phone className="mr-2 h-5 w-5 text-blue-600" />
                        Phone
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>(02) 1234 5678</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Mail className="mr-2 h-5 w-5 text-blue-600" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>info@ahsdriving.com</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                        Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>B8/29 Penny Place, Arndell Park, NSW 2148</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.3959533274726!2d150.87291731521252!3d-33.80486818067351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a2f4f9f0f9f9%3A0x5017d681632b0d0!2s29%20Penny%20Pl%2C%20Arndell%20Park%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sus!4v1636424112345!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}