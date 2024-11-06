import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import  Navigation from '../components/navigation/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Truck, Bus, ShieldCheck, Phone, Mail, MapPin, Users, Award, Clock } from 'lucide-react'
import cover from 'app/assets/coverimage.png'
import team from 'app/assets/team.jpg'
import safety from 'app/assets/safety.jpg'
import Footer from '../components/footer/footer'

export default function AboutPage() {
  return (
    <main className="flex-1">
    
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Navigation></Navigation>
        <Image
          src= {cover}
          alt="AHS Driving School"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About AHS Driving School</h1>
            <p className="text-xl md:text-2xl">Your Trusted Partner in Truck Driving Education Since 2005</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                AHS Driving School is an RMS approved driving school operating out of Arndell Park, NSW. We provide comprehensive training and assessment for Heavy Vehicle competencies and Bus Driver Authority Licensing.
              </p>
              <p className="text-lg mb-4">
                With over 15 years of experience in the heavy vehicle training and assessment industry, we have established a strong reputation for quality, safety, and positive results for our students.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto text-primary" />
                  <p className="mt-2 font-bold text-2xl">5000+</p>
                  <p className="text-sm">Students Trained</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto text-primary" />
                  <p className="mt-2 font-bold text-2xl">15+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 mx-auto text-primary" />
                  <p className="mt-2 font-bold text-2xl">24/7</p>
                  <p className="text-sm">Support</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src= {team}
                alt="AHS Driving School Team"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Courses</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Truck, title: "LR Licence", desc: "Light Rigid Truck Licence" },
              { icon: Truck, title: "MR Licence", desc: "Medium Rigid Truck Licence" },
              { icon: Truck, title: "HR Licence", desc: "Heavy Rigid Truck Licence" },
              { icon: Truck, title: "HC Licence", desc: "Heavy Combination Truck Licence" },
              { icon: Truck, title: "MC Licence", desc: "Multi Combination Truck Licence" },
              { icon: Bus, title: "Bus Authority", desc: "Bus Driver Authority Licence" },
            ].map((course, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <course.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{course.desc}</p>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src= {safety}
                alt="AHS Driving School Safety Training"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <ShieldCheck className="mr-4 h-8 w-8 text-primary" />
                Safety First
              </h2>
              <p className="text-lg mb-4">
                At AHS Driving School, safety is our number one priority. We aim to minimize the risk of workplace injury by providing you with practical and theory-based knowledge in accordance with guidelines set by the RMS and Work Cover Australia.
              </p>
              <p className="text-lg mb-4">
                Our team of highly qualified and friendly staff are dedicated to ensuring your success. We are proud to have a high passing rate, and we will only allow you to undergo assessment once we have determined your capability and are assured that you feel ready.
              </p>
              <p className="text-lg">
                Our fleet includes modern trucks and buses, which undergo regular inspections. You can expect a hassle-free experience, and upon completion, you will have a complete understanding of how to operate heavy vehicles in a safe and efficient manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-6 w-6 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>(02) 1234 5678</p>
                <p className="mt-2">0400 000 000</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-6 w-6 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>info@ahsdrivingschool.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-6 w-6 text-primary" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>B8/29 Penny Place,</p>
                <p>Arndell Park, NSW 2148</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of successful drivers who started their careers with AHS Driving School.</p>
          <Button size="lg" variant="secondary">
            Book A Course Today
          </Button>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}