// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className={styles.intro}>
//           <h1>To get started, edit the page.js file.</h1>
//           <p>
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className={styles.secondary}
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

import Head from "next/head";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import ArtShowcase from "../components/ArtShowcase";
import Artists from "../components/Artists"; // Client Component
import ContactForm from "../components/ContactForm"; // Client Component
import AltarBr from "@/components/AltarBr";

// import Feedback from "../components/Feedback";

export default function Page() {
  return (
    <>
      <Head>
        <title>Altar Tattoo Studio</title>
        <meta
          name="description"
          content="Altar Tattoo Studio – Tattoo designs, piercing, body modifications, and art showcase in Sofia, Bulgaria."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Altar Tattoo Studio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link
      href="https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
      </Head>

      <Hero />
      <InfoSection />
      <ArtShowcase />
      <AltarBr/>
      <Artists />      {/* Client Component за интерактивност */}
      <AltarBr/>
      <ContactForm />  {/* Client Component за форма */}
      {/* <Feedback /> */}
    </>
  );
}
