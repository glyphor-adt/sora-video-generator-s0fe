import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-muted-foreground">Video Generation</a></li>
              <li><a href="#" className="hover:underline text-muted-foreground">AI Models</a></li>
              <li><a href="#" className="hover:underline text-muted-foreground">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-muted-foreground">About Us</a></li>
              <li><a href="#" className="hover:underline text-muted-foreground">Contact</a></li>
              <li><a href="#" className="hover:underline text-muted-foreground">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-muted-foreground">Documentation</a></li>
              <li><a href="#" className="hover:underline text-muted-foreground">Blog</a></li>
              <li><a href="#" className="hover:underline text-muted-foreground">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-muted-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline text-muted-foreground">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Sora 2. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
