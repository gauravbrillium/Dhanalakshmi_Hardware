// const Footer = () => {
//   return (
//     <div className="relative">
//       <div className="bg-black text-white flex flex-col md:flex-row justify-around items-start pt-5 rounded-xl max-w-screen-lg mx-auto w-full h-36 absolute -top-16 left-0 right-0 z-0">
//         <div className="flex items-center mb-2 md:mb-0">
//           <img src="./images/phone.png" alt="Phone" className="w-6 h-6 mr-2" />
//           <span>+919444052040</span>
//         </div>

//         <div className="flex items-center mb-2 md:mb-0">
//           <img src="./images/email.png" alt="Email" className="w-6 h-6 mr-2" />
//           <span>Dhanalakshmi@gmail.com</span>
//         </div>

//         <div className="flex items-center">
//           <img
//             src="./images/timing.png"
//             alt="Timing"
//             className="w-6 h-6 mr-2"
//           />
//           <span>Timing/ 8:00am - 10:00pm</span>
//         </div>
//       </div>

//       <div className="bg-gradient-to-r from-[#FF9B26] to-[#FFD099] text-white flex flex-col w-full py-5 relative z-10 rounded-xl">
//         <div className="flex flex-col md:flex-row justify-between items-start ml-6 md:ml-12">
//           <div className="flex mr-8">
//             <div className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center mr-8">
//               <span className="text-xs text-gray-700">Logo</span>
//               <img
//                 src=""
//                 alt="Logo"
//                 className="rounded-full object-cover w-12 h-12 hidden"
//               />
//             </div>

//             <div className="flex flex-col justify-center">
//               <div className="text-black text-xl md:text-2xl font-bold">
//                 Dhanalakshi Hardware
//               </div>
//               <div className="text-black text-lg md:text-xl">Address</div>
//               <div className="text-white text-base md:text-lg max-w-[60%]">
//                 1-B, SURENDRA NAGAR 1ST STREET, Medavakkam Main Rd, Adambakkam,
//                 Chennai, Tamil Nadu 600088
//               </div>
//             </div>
//           </div>

//           <div className="text-center md:text-right mt-4 md:mt-0  mr-32">
//             <div className="text-black text-lg md:text-xl mb-2">
//               You can find us at
//             </div>

//             <div className="flex justify-center md:justify-end space-x-5">
//               <img
//                 src="./images/facebook.png"
//                 alt="Facebook"
//                 className="w-8 h-8"
//               />
//               <img
//                 src="./images/instagram.png"
//                 alt="Instagram"
//                 className="w-8 h-8"
//               />
//               <img
//                 src="./images/twitter.png"
//                 alt="Twitter"
//                 className="w-8 h-8"
//               />
//               <img
//                 src="./images/whatsapp.png"
//                 alt="WhatsApp"
//                 className="w-8 h-8"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="text-center text-black text-xs mt-4">
//           © 2024 Company Ltd. All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10">
      <div className="bg-black text-white flex flex-col md:flex-row justify-around items-start pt-5 max-w-screen-lg mx-auto rounded-t-xl w-full h-16">
        <div className="flex items-center mb-2 md:mb-0">
          <img
            src="./images/footer/contactbar/phone.png"
            alt="Phone"
            className="w-6 h-6 mr-2"
          />
          <span> +919444052040</span>
        </div>

        <div className="flex items-center mb-2 md:mb-0">
          <img
            src="./images/footer/contactbar/email.png"
            alt="Email"
            className="w-6 h-6 mr-2"
          />
          <span> Dhanalakshmi@gmail.com</span>
        </div>

        <div className="flex items-center">
          <img
            src="./images/footer/contactbar/timing.png"
            alt="Timing"
            className="w-6 h-6 mr-2"
          />
          <span> Timing/ 8:00am - 10:00pm</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#FF9B26] to-[#FFD099] text-white flex flex-col w-full py-5 relative">
        <div className="flex flex-col md:flex-row justify-between items-start ml-6 md:ml-12">
          <div className="flex mr-8">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center mr-8">
              <span className="text-xs text-gray-700">Logo</span>
              <img
                src=""
                alt="Logo"
                className="rounded-full object-cover w-12 h-12 hidden"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-black text-xl md:text-2xl font-bold">
                Dhanalakshi Hardware
              </div>
              <div className="text-black text-lg md:text-xl">Address</div>
              <div className="text-white text-base md:text-lg max-w-[60%]">
                1-B, SURENDRA NAGAR 1ST STREET, Medavakkam Main Rd, Adambakkam,
                Chennai, Tamil Nadu 600088
              </div>
            </div>
          </div>

          <div className="text-center md:text-right mt-4 md:mt-0 mr-32">
            <div className="text-black text-lg md:text-xl mb-2">
              You can find us at
            </div>

            <div className="flex justify-center md:justify-end space-x-5">
              <img
                src="./images/footer/mainfooter/facebook.png"
                alt="Facebook"
                className="w-8 h-8"
              />
              <img
                src="./images/footer/mainfooter/instagram.png"
                alt="Instagram"
                className="w-8 h-8"
              />
              <img
                src="./images/footer/mainfooter/twitter.png"
                alt="Twitter"
                className="w-8 h-8"
              />
              <img
                src="./images/footer/mainfooter/whatsapp.png"
                alt="WhatsApp"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>

        <div className="text-center text-black text-xs mt-4">
          © 2024 Company Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
