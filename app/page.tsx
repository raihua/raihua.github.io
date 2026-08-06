import Image from "next/image";

export default function Home() {
  return (
    <div className="w-auto">
      <div className="flex flex-row items-center gap-8">
        <div>
          <Image src="/Me.jpeg" width="400" height="400" alt="Peter Trinh" className="rounded-xl" />
        </div>
        <div>
          <h1 className="text-3xl">Hi, I'm Peter Trinh</h1>
          <p className="text-lg text-wrap">I'm a final year software engineering student and freelancer who loves solving problems with software. I love being transparent and upfront about what each solution requires and producing something we can both be proud of is my passion.</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg text-white">Get Resume</button>
        <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg text-white">Contact Me</button>
      </div >
    </div >
  );
}
