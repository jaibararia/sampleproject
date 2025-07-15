import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/project">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    );
}