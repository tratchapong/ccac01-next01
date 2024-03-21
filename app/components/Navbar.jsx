import Link from "next/link"

export default function Navbar() {
  return (
    <header className="p-3 bg-blue-300">
        <nav className="flex gap-3">
            <Link href='/tester' className="btn">Tester</Link>
            <Link href='/service' className="btn">Service</Link>
            <Link href='/product-ssr' className="btn">Product-SSR</Link>
            <Link href='/product-csr' className="btn">Product-CSR</Link>
        </nav>
    </header>
  )
}
