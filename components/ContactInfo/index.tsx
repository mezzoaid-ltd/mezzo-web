"use client";
import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Email Us",
    details: [
      { label: "General Inquiries", value: "hello@mezzoaid.com" },
      { label: "Support", value: "support@mezzoaid.com" },
      { label: "Experts", value: "experts@mezzoaid.com" },
    ],
    action: "Send Email",
    href: "mailto:hello@mezzoaid.com",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "Call Us",
    details: [
      { label: "Nigeria", value: "+234 (0) 800 MEZZO-AID" },
      { label: "Business Hours", value: "Mon-Fri: 9AM - 6PM WAT" },
      { label: "Weekend", value: "Sat: 10AM - 2PM WAT" },
    ],
    action: "Call Now",
    href: "tel:+2348001234567",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Visit Us",
    details: [
      { label: "Address", value: "15 Wole Ariyo Street, Lekki Phase 1" },
      { label: "City", value: "Lagos, Nigeria" },
      { label: "Office Hours", value: "By Appointment Only" },
    ],
    action: "Get Directions",
    href: "https://maps.google.com/?q=Lekki+Phase+1+Lagos",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Live Chat",
    details: [
      { label: "Instant Support", value: "Chat with our team in real-time" },
      { label: "Availability", value: "Mon-Fri: 9AM - 6PM WAT" },
      { label: "Response Time", value: "Usually under 2 minutes" },
    ],
    action: "Start Chat",
    href: "#",
  },
];

const ContactInfo = () => {
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
            <span className="text-sm font-medium text-white">GET IN TOUCH</span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Multiple Ways to Reach Us
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            Choose the contact method that works best for you. We're available
            through email, phone, live chat, or in-person visits.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid gap-7.5 md:grid-cols-2">
          {contactMethods.map((method, index) => (
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
              {/* Icon */}
              <div className="mb-5 flex h-15 w-15 items-center justify-center rounded-full bg-[#5B1B8D] text-white">
                {method.icon}
              </div>

              {/* Title */}
              <h3 className="mb-5 text-xl font-semibold text-black dark:text-white">
                {method.title}
              </h3>

              {/* Details */}
              <div className="mb-7.5 space-y-3">
                {method.details.map((detail, i) => (
                  <div key={i}>
                    <p className="mb-1 text-sm font-medium text-black dark:text-white">
                      {detail.label}
                    </p>
                    <p className="text-[#6B6B6B]">{detail.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#5B1B8D] px-6 py-2.5 font-medium text-[#5B1B8D] transition-all hover:bg-[#5B1B8D] hover:text-white"
              >
                {method.action}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Social Media */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="animate_top mt-12.5 text-center"
        >
          <h3 className="mb-5 text-xl font-semibold text-black dark:text-white">
            Follow Us on Social Media
          </h3>
          <div className="flex justify-center gap-4">
            {[
              {
                name: "Twitter",
                icon: "𝕏",
                href: "https://twitter.com/mezzoaid",
              },
              {
                name: "LinkedIn",
                icon: "in",
                href: "https://linkedin.com/company/mezzoaid",
              },
              {
                name: "Instagram",
                icon: "📷",
                href: "https://instagram.com/mezzoaid",
              },
              {
                name: "Facebook",
                icon: "f",
                href: "https://facebook.com/mezzoaid",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5B1B8D] transition-all hover:bg-[#5B1B8D] hover:text-white dark:bg-black"
                aria-label={social.name}
              >
                <span className="text-xl font-bold">{social.icon}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
