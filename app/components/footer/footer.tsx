import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AHS Driving School</h3>
            <p className="text-sm text-gray-400">Quality driver training in Sydney since 2005.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-gray-400 hover:text-white transition-colors">Our Courses</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">B8/29 Penny Place, Arndell Park 2148, NSW, Australia</p>
            <p className="text-sm text-gray-400">Phone: 0434 681 036</p>
            <p className="text-sm text-gray-400">Email: info@ahsdriving.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-400">© 2024 AHS Driving School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
