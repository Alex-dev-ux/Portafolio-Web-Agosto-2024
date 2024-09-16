import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css';
import '../styles/responsive.css';

export const metadata = {
  title: "Portafolio Web",
  description: "My Portafolio Web",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body>
      <Header />
        <div className="layout">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
