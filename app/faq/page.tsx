import Link from 'next/link';
import { Button } from 'app/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from 'app/components/ui/card';
import Navigation from '../components/navigation/navigation';
import Footer from '../components/footer/footer';

const faqs = [
  {
    question: "How do I obtain a truck license in NSW?",
    answer: (
      <ol>
        <li>Decide on the type of truck license needed (LR, MR, HR).</li>
        <li>Meet eligibility requirements (be 18 years old, have a valid NSW car license, pass medical exam if necessary).</li>
        <li>Complete a pre-learner course (for new drivers).</li>
        <li>Complete a logbook or skills test.</li>
        <li>Pass a knowledge test.</li>
        <li>Pass a practical driving test.</li>
      </ol>
    ),
  },
  {
    question: "MR licence weight limit",
    answer: "MR (Medium Rigid class) heavy vehicle licences permit the operation of two-axle vehicles with a gross vehicle mass (GVM) in excess of 8,000 kg. You may also pull a trailer with a maximum GVM of 9,000 kg.",
  },
  {
    question: "What is the difference between a MR and HR License?",
    answer: "An MR (Medium Rigid) License allows you to operate trucks and buses weighing more than eight tonnes GVM with only two axles, whereas an HR License allows you to operate trucks and buses weighing more than eight tonnes GVM with three or more axles.",
  },
  {
    question: "What licence do I need to drive a truck in Australia?",
    answer: "A Heavy (HR) class license allows you to drive rigid vehicles with three or more axles and a gross vehicle mass (GVM) of more than 8 tonnes.",
  },
  {
    question: "How long does it take to become a truck driver in Australia?",
    answer: "You are eligible to submit an application for a Heavy Combination Driver's License once you have been in possession of a Heavy Rigid licence for at least a year. This means it may take up to four years to complete the requirements for your HC licence.",
  },
  {
    question: "What is the highest truck license?",
    answer: "MC (multi-combination) is the highest level of heavy vehicle licence class and includes B-doubles, prime movers, and road trains.",
  },
  {
    question: "How do I become a truck driver in Sydney?",
    answer: (
      <ul>
        <li>Obtaining a heavy vehicle permit.</li>
        <li>Licensing exams for heavy-duty vehicles.</li>
        <li>Heavy Vehicle Knowledge Test and Competency-Based Evaluation.</li>
        <li>Registered Training Providers.</li>
        <li>Heavy vehicle registration costs.</li>
        <li>MC licence regulations.</li>
      </ul>
    ),
  },
  {
    question: "How can a foreigner become a truck driver in Australia?",
    answer: "If you are not from Australia, you will need a visa to work as a truck driver. Suitable visas include 189, 190, 491, working holiday visa, spouse visa, or international student visa.",
  },
  {
    question: "What size truck can I drive on a car Licence NSW?",
    answer: "With a Class C - Car licence, you may operate automobiles, utes, vans, certain light trucks, and car-based motor tricycles with a gross vehicle mass up to 4.5 tonnes (GVM).",
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="w-full py-16 bg-gray-50">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
