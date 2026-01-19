"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "./testimonialData";

interface Review {
  id: number;
  name: string;
  designation: string;
  image: string;
  content: string;
}

const SingleTestimonial = ({ review }: { review: Review }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="border-stroke shadow-solid-9 dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white p-9 pt-7.5 dark:shadow-none">
      <div className="border-stroke dark:border-strokedark mb-7.5 flex justify-between border-b pb-6">
        <div>
          <h3 className="text-metatitle3 mb-1.5 text-black dark:text-white">
            {name}
          </h3>
          <p className="text-[#6B6B6B]">{designation}</p>
        </div>
        <div className="relative h-[50px] w-[60px]">
          <Image
            width={60}
            height={50}
            className="rounded-full"
            src={image}
            alt={name}
          />
        </div>
      </div>

      <p className="text-[#6B6B6B]">{content}</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <>
      <section>
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <div className="animate_top mx-auto text-center">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top mx-auto text-center"
            >
              <div className="mb-4 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
                <span className="text-sectiontitle font-medium text-white">
                  TESTIMONIALS
                </span>
              </div>
              <h2 className="xl:text-sectiontitle3 mx-auto mb-4 text-3xl font-bold text-black md:w-4/5 xl:w-1/2 dark:text-white">
                What Entrepreneurs Say About Us
              </h2>
              <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5 xl:w-[46%]">
                Real stories from entrepreneurs who've used Mezzo Aid to build
                fundable businesses.
              </p>
            </motion.div>
          </div>
          {/* Section Title End */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top max-w-c-1235 mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* Slider main container */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            {/* Additional required wrapper */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonialData.map((review) => (
                <SwiperSlide key={review.id}>
                  <SingleTestimonial review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
