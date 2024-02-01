import Image from "next/image";
import CustomButton from "@/app/(components)/Button";

export default function Home() {
  const socials = [
    "Github",
    "Frontend Mentor",
    "Linkedin",
    "Twitter",
    "Instagram",
  ];
  return (
    <main className="rounded-lg flex flex-col items-center p-8 bg-Dark_Grey">
      <Image
        src="/avatar-jessica.jpeg"
        height="80"
        width="80"
        alt="profile pic"
        className="rounded-[100%] mb-8"
      />
      <h1 className="text-xl text-White mb-2">Jessica Randall</h1>
      <h3 className="text-Green">London, United Kingdom</h3>
      <p className="text-White mb-8">
        &quot;Front-end developer and avid reader&quot;
      </p>
      <div className="w-full flex flex-col items-center space-y-2">
        {socials.map((name, idx) => (
          <CustomButton key={idx} name={name} />
        ))}
      </div>
    </main>
  );
}
