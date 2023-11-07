import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About product page",
  description: "About product page",
};

const AboutProductPage = () => {
  return (
    <>
      <h3 className='text-center mb-4'>About Product Page</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
        quibusdam corrupti explicabo, id eius ullam libero suscipit totam itaque
        perspiciatis asperiores illo! Exercitationem a suscipit tempora ducimus
        voluptas. Adipisci earum rem, labore maxime porro cum!
      </p>
    </>
  );
};

export default AboutProductPage;
