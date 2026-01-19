"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section className="py-20 lg:py-25">
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
        <div className="grid gap-7.5 lg:grid-cols-2 lg:gap-12.5">
          {/* Form */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left"
          >
            <div className="border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white p-7.5 lg:p-12.5">
              <h2 className="xl:text-sectiontitle3 mb-5 text-2xl font-bold text-black dark:text-white">
                Send Us a Message
              </h2>
              <p className="mb-7.5 text-[#6B6B6B]">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-2.5 block font-medium text-black dark:text-white"
                  >
                    Full Name <span className="text-[#5B1B8D]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="border-stroke dark:border-strokedark w-full rounded-lg border bg-transparent px-6 py-3 outline-none focus:border-[#5B1B8D]"
                  />
                </div>

                <div className="mb-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2.5 block font-medium text-black dark:text-white"
                    >
                      Email Address <span className="text-[#5B1B8D]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="border-stroke dark:border-strokedark w-full rounded-lg border bg-transparent px-6 py-3 outline-none focus:border-[#5B1B8D]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2.5 block font-medium text-black dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className="border-stroke dark:border-strokedark w-full rounded-lg border bg-transparent px-6 py-3 outline-none focus:border-[#5B1B8D]"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="mb-2.5 block font-medium text-black dark:text-white"
                  >
                    Subject <span className="text-[#5B1B8D]">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-stroke dark:border-strokedark w-full rounded-lg border bg-transparent px-6 py-3 outline-none focus:border-[#5B1B8D]"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="quest-help">Quest Help</option>
                    <option value="expert">Expert Marketplace</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className="mb-7.5">
                  <label
                    htmlFor="message"
                    className="mb-2.5 block font-medium text-black dark:text-white"
                  >
                    Message <span className="text-[#5B1B8D]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="border-stroke dark:border-strokedark w-full rounded-lg border bg-transparent px-6 py-3 outline-none focus:border-[#5B1B8D]"
                  ></textarea>
                </div>

                {submitStatus === "success" && (
                  <div className="mb-5 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#5B1B8D] px-7.5 py-3.5 font-medium text-white transition-all hover:bg-[#7B2CBF] disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="currentColor"
                    >
                      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Why Contact Us */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right"
          >
            <div className="mb-7.5">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Why Reach Out?
              </h3>
              <p className="text-[#6B6B6B]">
                Our support team is here to ensure your success. Here are some
                reasons entrepreneurs contact us:
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: "🎯",
                  title: "Quest Guidance",
                  description:
                    "Stuck on a quest activity? Need clarification on requirements? We're here to help you progress.",
                },
                {
                  icon: "💼",
                  title: "Expert Matching",
                  description:
                    "Not sure which expert to book? We can recommend the best professional for your specific needs.",
                },
                {
                  icon: "🤝",
                  title: "Partnership Inquiries",
                  description:
                    "Interested in partnering with Mezzo Aid? We're always open to collaborations that help entrepreneurs.",
                },
                {
                  icon: "💡",
                  title: "Feature Requests",
                  description:
                    "Have an idea to improve our platform? Your feedback shapes our roadmap.",
                },
                {
                  icon: "🔧",
                  title: "Technical Issues",
                  description:
                    "Experiencing technical difficulties? Our team will resolve issues quickly.",
                },
                {
                  icon: "📊",
                  title: "Business Inquiries",
                  description:
                    "Media, research, or other business-related questions? Let's talk.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-stroke dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white p-5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#E6D5F0]">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-black dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#6B6B6B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
