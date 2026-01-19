"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const experts = [
  {
    name: "Adebayo Ogunleye",
    title: "Corporate Lawyer",
    experience: "12 years",
    specialization: "Business Registration & Compliance",
    rating: 4.9,
    reviews: 45,
    consultations: 120,
    rate: "₦25,000/hr",
    verified: true,
    image: "/images/experts/expert-01.png",
    qualifications: ["LLB", "BL", "Member, Nigerian Bar"],
    topSkills: ["CAC Registration", "Contract Law", "IP Protection"],
  },
  {
    name: "Ngozi Eze",
    title: "Chartered Accountant",
    experience: "10 years",
    specialization: "Financial Planning & Tax",
    rating: 5.0,
    reviews: 62,
    consultations: 180,
    rate: "₦35,000/session",
    verified: true,
    image: "/images/experts/expert-02.png",
    qualifications: ["ACA", "ICAN Member", "CPA"],
    topSkills: ["Financial Projections", "Tax Strategy", "Bookkeeping"],
  },
  {
    name: "Tunde Bakare",
    title: "Business Strategist",
    experience: "15 years",
    specialization: "Business Model & Growth",
    rating: 4.8,
    reviews: 38,
    consultations: 95,
    rate: "₦40,000/session",
    verified: true,
    image: "/images/experts/expert-03.png",
    qualifications: ["MBA", "Business Consultant", "Ex-McKinsey"],
    topSkills: ["Strategy", "Market Analysis", "Business Models"],
  },
  {
    name: "Amaka Okoli",
    title: "Digital Marketing Expert",
    experience: "8 years",
    specialization: "Brand & Growth Marketing",
    rating: 4.9,
    reviews: 51,
    consultations: 145,
    rate: "₦30,000/session",
    verified: true,
    image: "/images/experts/expert-04.png",
    qualifications: ["Google Certified", "MBA Marketing"],
    topSkills: ["Social Media", "Brand Strategy", "Customer Acquisition"],
  },
  {
    name: "Chidi Nwosu",
    title: "Tech Founder & CTO",
    experience: "14 years",
    specialization: "Product & Technical Strategy",
    rating: 5.0,
    reviews: 29,
    consultations: 75,
    rate: "₦50,000/session",
    verified: true,
    image: "/images/experts/expert-05.png",
    qualifications: ["BS Computer Science", "Founded 2 startups", "Raised $2M"],
    topSkills: [
      "MVP Development",
      "Technical Architecture",
      "Product Strategy",
    ],
  },
  {
    name: "Funke Adeyemo",
    title: "Successful Founder",
    experience: "11 years",
    specialization: "Fundraising & Investor Relations",
    rating: 4.9,
    reviews: 34,
    consultations: 88,
    rate: "₦45,000/session",
    verified: true,
    image: "/images/experts/expert-06.png",
    qualifications: ["Founded FemTech Startup", "Raised ₦50M+"],
    topSkills: ["Pitch Deck", "Investor Prep", "Fundraising"],
  },
];

const FeaturedExperts = () => {
  return (
    <section className="dark:bg-blacksection bg-[#E6D5F0] py-20 lg:py-25">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        {/* Section Header */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mb-15 text-center"
        >
          <div className="mb-4 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
            <span className="text-sm font-medium text-white">
              FEATURED EXPERTS
            </span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Meet Our Top-Rated Professionals
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            These are some of our most experienced and highly-rated experts. All
            verified, all Nigerian, all ready to help you succeed.
          </p>
        </motion.div>

        {/* Experts Grid */}
        <div className="grid gap-7.5 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="animate_top border-stroke shadow-solid-3 dark:border-strokedark rounded-lg border bg-white p-7.5 dark:bg-black"
            >
              {/* Profile Header */}
              <div className="mb-5 flex items-start gap-4">
                <div className="relative">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  {expert.verified && (
                    <div className="absolute -right-1 -bottom-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#5B1B8D]">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-black dark:text-white">
                    {expert.name}
                  </h3>
                  <p className="mb-1 text-sm text-[#5B1B8D]">{expert.title}</p>
                  <p className="text-xs text-[#6B6B6B]">
                    {expert.experience} experience
                  </p>
                </div>
              </div>

              {/* Rating & Stats */}
              <div className="border-stroke dark:border-strokedark mb-5 flex items-center gap-4 border-t border-b py-4">
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-[#5B1B8D]">
                    {expert.rating}
                  </span>
                  <svg
                    className="h-4 w-4 text-[#F59E0B]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm text-[#6B6B6B]">
                  ({expert.reviews} reviews)
                </span>
                <span className="ml-auto text-sm text-[#6B6B6B]">
                  {expert.consultations} sessions
                </span>
              </div>

              {/* Specialization */}
              <p className="mb-4 text-sm text-[#6B6B6B]">
                {expert.specialization}
              </p>

              {/* Top Skills */}
              <div className="mb-5 flex flex-wrap gap-2">
                {expert.topSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-[#E6D5F0] px-3 py-1 text-xs font-medium text-[#5B1B8D]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Rate & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#6B6B6B]">Starting at</p>
                  <p className="text-lg font-bold text-[#5B1B8D]">
                    {expert.rate}
                  </p>
                </div>
                <button className="rounded-full bg-[#5B1B8D] px-6 py-2.5 font-medium text-white transition-all hover:bg-[#7B2CBF]">
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="animate_top mt-12.5 text-center"
        >
          <a
            href="/experts/all"
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#5B1B8D] px-7.5 py-3.5 font-medium text-[#5B1B8D] transition-all hover:bg-[#5B1B8D] hover:text-white"
          >
            View All 50+ Experts
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedExperts;
