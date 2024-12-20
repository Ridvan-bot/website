// Import the global CSS styles for the application
import "./css/style.css";

// Import the Inter font from Google Fonts using Next.js font optimization
import { Inter } from "next/font/google";
// Import a local font using Next.js font optimization
import localFont from "next/font/local";

// Import the Header component from the UI components directory
import Header from "@/components/ui/header";

// Initialize the Inter font with specific configuration
const inter = Inter({
  subsets: ["latin"], // Specify the character subsets to include (e.g., Latin characters)
  variable: "--font-inter", // Define a CSS variable for the font
  display: "swap", // Use 'swap' to ensure text is displayed while the font is loading
});

// Initialize the Nacelle font with specific configuration
const nacelle = localFont({
  src: [ 
    {
      path: "../public/fonts/nacelle-regular.woff2", 
      weight: "400", 
      style: "normal", 
    },
    {
      path: "../public/fonts/nacelle-italic.woff2", 
      weight: "400", 
      style: "italic", 
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2", 
      weight: "600", 
      style: "normal", 
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2", 
      weight: "600", 
      style: "italic", 
    },
  ],
  variable: "--font-nacelle", // Define a CSS variable for the font
  display: "swap", // Use 'swap' to ensure text is displayed while the font is loading
});

// Metadata for the application, used for SEO and document settings
export const metadata = {
  title: "Pohlman Protean",
  description: "Home of Pohlman Protean", // Description of the application
};

// Define the RootLayout component, which serves as the main layout for the application
export default function RootLayout({
  children, // Accepts children props which will be rendered inside the layout
}: {
  children: React.ReactNode; // Type definition for children, indicating it can be any React node
}) {
  return (
    <html lang="en"> {/* Set the language of the document to English */}
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        {/* Apply styles from Inter and Nacelle fonts, background color, font color, and antialiasing */}
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {/* Set up a flex container to ensure full height and flexible layout */}
          <Header /> {/* Render the Header component */}
          {children} {/* Render the children passed to the RootLayout */}
        </div>
      </body>
    </html>
  );
}
