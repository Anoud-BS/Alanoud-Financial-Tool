import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">Brand</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">Building the future of web design, one pixel at a time.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Product</h3>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Features
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Pricing
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Tutorials
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Releases
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Company</h3>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Careers
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Contact
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Partners
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Legal</h3>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              License
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Brand Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
