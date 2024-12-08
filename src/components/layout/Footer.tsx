import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HoverBoard</h3>
            <p className="text-gray-400">
              Building the future of web development, one component at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-gray-400 hover:text-white">Documentation</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} daotanhao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}