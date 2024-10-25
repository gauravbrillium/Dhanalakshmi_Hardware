const About = () => {
  return (
    <div className="flex justify-between items-center px-10 pt-10">
      <div className="w-1/2">
        <h1 className="text-4xl text-primary">About us</h1>
        <p className="pt-2 text-2xl font-bold">
          &ldquo;Excellence in Hardware Since 1993&rdquo;
        </p>
        <p className="pt-2 text-sm leading-[2.5]">
          Our story began 31 years ago with a simple mission: to serve our
          community with the finest products, exceptional customer service, and
          expert advice. Since then, we&apos;ve grown alongside our community,
          becoming a trusted name in quality and reliability. Our commitment
          remains unwavering, driven by a passion for meeting our
          customers&apos; needs with integrity and care. Thank you for allowing
          us to be a part of your journey—we look forward to many more years of
          serving you.
        </p>
      </div>
      <div className="w-1/2 flex justify-center pt-2">
        <img
          src="./images/aboutus/aboutus.png"
          alt="About Us"
          className="w-full max-w-sm h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default About;
