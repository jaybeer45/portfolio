import "./globals.css";

export const metadata = {
  title: "Jaybeer Singh — Full-Stack Web Developer",
  description:
    "Portfolio of Jaybeer Singh, a full-stack MERN developer. See projects including a live event-booking and vendor-marketplace platform with payments, auth, and real-time chat.",
  openGraph: {
    title: "Jaybeer Singh — Full-Stack Web Developer",
    description:
      "Portfolio of Jaybeer Singh, a full-stack MERN developer. See projects including a live event-booking and vendor-marketplace platform with payments, auth, and real-time chat.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Ovo&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}



// import { Outfit , Ovo} from "next/font/google";
// import "./globals.css";

// const outfit = Outfit({

//   subsets: ["latin"] , weight: ["400", "500", "600"]
// });
// const ovo = Ovo({

//   subsets: ["latin"] , weight: ["400"]
// });


// export const metadata = {
//   title: "Jaybeer Singh — Full-Stack Web Developer",
//   description:
//     "Portfolio of Jaybeer Singh, a full-stack MERN developer. See projects including a live event-booking and vendor-marketplace platform with payments, auth, and real-time chat.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="scroll-smooth ">
//       <body
//         className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden 
//         `}
        
//       >
        
//         {children}
       
//       </body>
//     </html>
//   );
// }
