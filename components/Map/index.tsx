"use client";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <section className="dark:bg-blacksection bg-[#E6D5F0] py-20 lg:py-25">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top"
        >
          <div className="mb-10 text-center">
            <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
              Find Us in Lagos
            </h2>
            <p className="text-[#6B6B6B]">
              Our office is located in the heart of Lekki, one of Lagos' premier
              business districts.
            </p>
          </div>

          {/* Map Container */}
          <div className="shadow-solid-3 overflow-hidden rounded-lg">
            <div className="relative h-[400px] w-full bg-white md:h-[500px] dark:bg-black">
              {/* Placeholder for Google Maps - Replace with actual iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6268886719475!2d3.4497!3d6.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnNTAuNiJOIDPCsDI2JzU4LjkiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mezzo Aid Office Location"
              />
            </div>
          </div>

          {/* Office Info */}
          <div className="mt-7.5 grid gap-7.5 md:grid-cols-3">
            <div className="shadow-solid-3 rounded-lg bg-white p-5 text-center dark:bg-black">
              <div className="mb-3 text-3xl">📍</div>
              <h4 className="mb-2 font-semibold text-black dark:text-white">
                Address
              </h4>
              <p className="text-sm text-[#6B6B6B]">
                15 Wole Ariyo Street
                <br />
                Lekki Phase 1<br />
                Lagos, Nigeria
              </p>
            </div>

            <div className="shadow-solid-3 rounded-lg bg-white p-5 text-center dark:bg-black">
              <div className="mb-3 text-3xl">🕒</div>
              <h4 className="mb-2 font-semibold text-black dark:text-white">
                Office Hours
              </h4>
              <p className="text-sm text-[#6B6B6B]">
                Monday - Friday: 9AM - 6PM
                <br />
                Saturday: 10AM - 2PM
                <br />
                Sunday: Closed
              </p>
            </div>

            <div className="shadow-solid-3 rounded-lg bg-white p-5 text-center dark:bg-black">
              <div className="mb-3 text-3xl">🚗</div>
              <h4 className="mb-2 font-semibold text-black dark:text-white">
                Getting Here
              </h4>
              <p className="text-sm text-[#6B6B6B]">
                5 min from Lekki Toll Gate
                <br />
                10 min from Admiralty Way
                <br />
                Parking available on-site
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
