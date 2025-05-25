import Image from "next/image";
import cert1 from "../../public/cert-1.webp";
import cert2 from "../../public/cert-2.webp";
import { Slide } from "@/app/Animation/Slide";

const certifications = [
  {
    preview: cert1,
    pdf: "/cert_pdf_1.pdf",
    alt: "Frontend Developer Certificate",
    caption: "Frontend Developer (React/Nextjs) - Kodecamp, Nigeria",
  },
  {
    preview: cert2,
    pdf: "/cert_pdf_2.pdf",
    alt: "JavaScript Mastery Certificate",
    caption: "Frontend Development (Beginner) - Kodecamp, Nigeria",
  },
];

export default function CertificationsSection() {
  return (
    <section className="mt-16 px-6 bg-transparent">
      <Slide delay={0.16}>
        <div className="mb-10">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Certifications
          </h2>
        </div>
      </Slide>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="">
            <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
              <div className="relative w-full h-56">
                <Image
                  src={cert.preview}
                  alt={cert.alt}
                  layout="fill"
                  className="w-full"
                />
              </div>
            </a>
            <p className="mt-2 text-sm dark:text-white font-[700] text-dark-700">
              {cert.caption}
            </p>
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:underline text-sm"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
