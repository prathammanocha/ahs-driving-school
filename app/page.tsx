'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Button } from './components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Truck, Phone, ChevronRight, CheckCircle2 } from 'lucide-react'
import banner from './assets/truckdriving.jpeg'
import hr from './assets/hr_img-1.jpg'
import lr from './assets/lr_img.jpg'
import hc from './assets/hr_img2.jpg'
import mc from './assets/mc_img.jpg'
import mr from './assets/mr_img.jpg'
import Navigation from './components/navigation/navigation'
import { ContactForm } from 'app/components/ui/ContactForm'
import Footer from './components/footer/footer'

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  link: string;
}

export default function Component() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src={banner}
            alt="Truck driving on a highway"
            width={1400}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Drive Your Future with AHS</h1>
              <p className="text-xl md:text-2xl mb-8">Quality Truck Driver Training in Sydney</p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => setIsContactFormOpen(true)}
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <CheckCircle2 className="mr-2 h-6 w-6" />
                    Expert Instructors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our team of experienced and certified instructors ensure you receive top-notch training.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <CheckCircle2 className="mr-2 h-6 w-6" />
                    Modern Fleet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Train on a diverse range of well-maintained, industry-standard vehicles.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <CheckCircle2 className="mr-2 h-6 w-6" />
                    Flexible Scheduling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Choose from a variety of course times to fit your busy lifestyle.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-16 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Light Rigid Truck Licence"
                description="LR vehicle truck licence for vehicles with 2 axles and up to 8t GVM."
                imageSrc={lr}
                link="/courses/light-rigid"
              />
              <ServiceCard
                title="Medium Rigid Truck Licence"
                description="MR licence for vehicles with 2 axles and over 8,000 kg GVM."
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
                description="HC licence for prime movers with a semi-trailer and B-Doubles."
                imageSrc={hr}
                link="/courses/heavy-combination"
              />
              <ServiceCard
                title="Multi Combination Truck Licence"
                description="MC licence for B-Doubles and road trains."
                imageSrc={mc}
                link="/courses/multi-combination"
              />
              <Card className="overflow-hidden bg-blue-600 text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">This Month's Special</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl">Light Rigid (LR) - 1 Day Courses</h3>
                    <p className="text-blue-100">Limited time offer! Call now for special pricing.</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team is here to answer your questions and help you begin your journey to becoming a licensed truck driver.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="/contact">
                  <Button className="w-full" size="lg">
                    Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  )
}

function ServiceCard({ title, description, imageSrc, link }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={200}
      />
      <CardHeader>
        <CardTitle className="text-xl text-blue-600">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={link}>
          <Button variant="outline" className="w-full hover:bg-blue-600 hover:text-white transition-colors">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}