import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Mezzo Aid",
  description: "Learn how Mezzo Aid collects, uses, and protects your personal information as you build your fundable business.",
  openGraph: {
    title: "Privacy Policy - Mezzo Aid",
    description: "Learn how Mezzo Aid collects, uses, and protects your personal information.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        
        {/* Header */}
        <div className="mb-15 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
            <span className="text-sm font-medium text-white">LEGAL</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
            Privacy Policy
          </h1>
          <p className="mx-auto text-[#6B6B6B] dark:text-[#c8cbd0] md:w-4/5 lg:w-3/5">
            Effective Date: January 1, 2025 | Last Updated: January 1, 2025
          </p>
        </div>

        {/* Content */}
        <div className="rounded-lg border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
          <div className="max-w-none space-y-10">
            
            {/* 1. Introduction */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                1. Introduction
              </h2>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0] leading-relaxed">
                Welcome to Mezzo Aid. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how Mezzo Aid ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use our platform to build fundable businesses through our quest system, expert consultations, business plan development, and pitch deck creation services.
              </p>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0] leading-relaxed">
                By accessing or using Mezzo Aid, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and our Terms of Service. If you do not agree with our policies and practices, please do not use our platform.
              </p>
              <p className="text-[#6B6B6B] dark:text-[#c8cbd0] leading-relaxed">
                This policy applies to all users of our platform, including entrepreneurs completing quests, experts providing consultations, and visitors browsing our website.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                2. Information We Collect
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    2.1 Information You Provide Directly
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We collect information you voluntarily provide when you:
                  </p>
                  <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li><strong className="text-black dark:text-white">Create an account:</strong> Name, email address, password, phone number, and country/region</li>
                    <li><strong className="text-black dark:text-white">Build your entrepreneur profile:</strong> Business name, industry, company stage, location, professional biography, business description</li>
                    <li><strong className="text-black dark:text-white">Complete quests:</strong> Survey responses, uploaded documents, business plans, pitch decks, financial projections, market research, customer data</li>
                    <li><strong className="text-black dark:text-white">Book expert consultations:</strong> Meeting preferences, availability, consultation topics, specific business questions, areas where you need guidance</li>
                    <li><strong className="text-black dark:text-white">Process payments:</strong> Billing information processed securely through our payment partners Paystack and Flutterwave (we do not store complete payment card details)</li>
                    <li><strong className="text-black dark:text-white">Contact support:</strong> Support requests, feedback, bug reports, feature suggestions, complaints</li>
                    <li><strong className="text-black dark:text-white">Participate in events:</strong> Webinar registrations, workshop sign-ups, networking event attendance</li>
                    <li><strong className="text-black dark:text-white">Apply to be an expert:</strong> Professional credentials, work experience, areas of expertise, certifications, professional references, LinkedIn profile</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    2.2 Information We Collect Automatically
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    When you access or use Mezzo Aid, we automatically collect certain information about your device and usage:
                  </p>
                  <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li><strong className="text-black dark:text-white">Device information:</strong> Browser type and version, operating system, device type (mobile, tablet, desktop), screen resolution, device identifiers</li>
                    <li><strong className="text-black dark:text-white">Usage data:</strong> Pages viewed, quests started and completed, expert profiles viewed, time spent on platform, features used, click patterns, navigation paths, search queries</li>
                    <li><strong className="text-black dark:text-white">Location data:</strong> IP address, general geographic location (city/country level), timezone</li>
                    <li><strong className="text-black dark:text-white">Cookies and tracking technologies:</strong> Session cookies, preference cookies, analytics cookies, authentication tokens (see Section 5 for details)</li>
                    <li><strong className="text-black dark:text-white">Communication data:</strong> Metadata from expert consultation calls (duration, participants, date/time - not call content)</li>
                    <li><strong className="text-black dark:text-white">Log data:</strong> Access times, error logs, performance metrics, API calls, system diagnostics</li>
                    <li><strong className="text-black dark:text-white">Referral information:</strong> Source of traffic, marketing campaigns that brought you to us, referral links</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    2.3 Information from Third Parties
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We may receive information about you from third-party sources, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li><strong className="text-black dark:text-white">Social authentication services:</strong> When you sign up or log in using Google, LinkedIn, or other social accounts, we receive basic profile information (name, email, profile picture)</li>
                    <li><strong className="text-black dark:text-white">Payment processors:</strong> Paystack and Flutterwave provide transaction confirmations, payment status, and fraud detection signals (but not your complete payment card details)</li>
                    <li><strong className="text-black dark:text-white">Expert partners:</strong> With your explicit consent, experts may provide consultation summaries, progress notes, and recommendations</li>
                    <li><strong className="text-black dark:text-white">Analytics services:</strong> Google Analytics and similar tools provide aggregate usage statistics and user behavior insights</li>
                    <li><strong className="text-black dark:text-white">Public databases:</strong> We may verify business registration information from publicly available sources like the Corporate Affairs Commission (CAC) in Nigeria</li>
                    <li><strong className="text-black dark:text-white">Business partners:</strong> If you're referred to us by accelerators, incubators, or funding organizations, they may share basic information about your business</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                3. How We Use Your Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    3.1 To Provide and Improve Our Services
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We use your information to deliver, maintain, and enhance the Mezzo Aid platform:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li>Create, maintain, and secure your account with authentication and account recovery</li>
                    <li>Track your quest progress, unlock new quests based on completion, and save your work</li>
                    <li>Facilitate expert consultation bookings, schedule video meetings, and manage cancellations</li>
                    <li>Generate business plans and pitch decks based on your quest responses</li>
                    <li>Process payments securely through Paystack and Flutterwave in Nigerian Naira (₦)</li>
                    <li>Provide responsive customer support and resolve technical issues</li>
                    <li>Analyze platform usage to identify bugs, optimize performance, and fix errors</li>
                    <li>Develop new features, tools, and resources based on user needs</li>
                    <li>Generate anonymized analytics and insights to improve the entrepreneur experience</li>
                    <li>Ensure platform security and prevent fraud or abuse</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    3.2 To Personalize Your Experience
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We use your information to tailor Mezzo Aid to your specific needs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li>Recommend quests specifically tailored to your business stage, industry, and goals</li>
                    <li>Match you with relevant experts who have experience in your industry or region</li>
                    <li>Customize your dashboard with content, resources, and tools most relevant to you</li>
                    <li>Remember your preferences, settings, language choices, and progress</li>
                    <li>Show you success stories and case studies from entrepreneurs in similar situations</li>
                    <li>Suggest next steps and additional resources based on your quest completion patterns</li>
                    <li>Provide industry-specific templates and examples in your business plan and pitch deck</li>
                    <li>Highlight funding opportunities and accelerators relevant to your business</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    3.3 To Communicate With You
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We use your contact information to send you relevant communications:
                  </p>
                  <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li>Quest reminders to help you maintain momentum on your entrepreneurship journey</li>
                    <li>Milestone celebration notifications when you complete important quests</li>
                    <li>Expert consultation confirmations, reminders, and follow-up messages</li>
                    <li>Platform updates, new feature announcements, and product improvements</li>
                    <li>Educational newsletters with entrepreneur resources, tips, and best practices</li>
                    <li>Invitations to webinars, workshops, networking events, and pitch competitions</li>
                    <li>Funding opportunity alerts and accelerator program announcements</li>
                    <li>Support responses to your questions, requests, and feedback</li>
                    <li>Administrative messages (password resets, account security, policy updates)</li>
                    <li>Surveys and feedback requests to help us improve Mezzo Aid</li>
                  </ul>

                  <div className="rounded-lg bg-[#E6D5F0] p-6">
                    <p className="text-sm text-[#5B1B8D] font-semibold mb-2">
                      📧 Managing Your Email Preferences
                    </p>
                    <p className="text-sm text-[#5B1B8D]">
                      You can opt out of marketing and promotional emails at any time by clicking the "unsubscribe" link in any email or updating your communication preferences in your account settings. You'll continue to receive essential service emails like quest confirmations, expert consultation reminders, payment receipts, and critical security alerts that are necessary for your use of the platform.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    3.4 For Security, Legal Compliance, and Protection
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We use your information to maintain platform integrity and comply with legal obligations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li>Prevent fraud, unauthorized access, payment disputes, and security breaches</li>
                    <li>Detect, investigate, and respond to suspicious activity or policy violations</li>
                    <li>Comply with applicable Nigerian and international laws, regulations, and legal obligations</li>
                    <li>Respond to valid legal requests from government authorities, courts, or law enforcement</li>
                    <li>Enforce our Terms of Service, Privacy Policy, Expert Code of Conduct, and other agreements</li>
                    <li>Protect the rights, property, safety, and intellectual property of Mezzo Aid</li>
                    <li>Protect the rights, privacy, safety, and property of our users and the public</li>
                    <li>Resolve disputes, investigate complaints, and prevent harm</li>
                    <li>Conduct internal audits and maintain business records</li>
                    <li>Verify the identity and credentials of experts applying to join our platform</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. How We Share Your Information */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                4. How We Share Your Information
              </h2>

              <div className="rounded-lg border-2 border-[#5B1B8D] bg-[#E6D5F0] p-6 mb-6">
                <p className="text-[#5B1B8D] font-bold text-lg mb-2">
                  ⚠️ We Never Sell Your Personal Information
                </p>
                <p className="text-sm text-[#5B1B8D]">
                  Mezzo Aid does not and will never sell, rent, or trade your personal information to third parties for their marketing purposes. Your entrepreneurial journey and business ideas are yours alone. We only share your information in the limited circumstances described below, and always with your best interests in mind.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    4.1 With Experts on Our Platform
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    When you book a consultation with an expert through Mezzo Aid, we share only the information necessary to provide you with quality guidance:
                  </p>
                  <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li>Your name and preferred contact method (email, phone if you've provided it)</li>
                    <li>Relevant business details (company name, industry, business stage, brief description)</li>
                    <li>Your specific consultation questions, topics, and areas where you need guidance</li>
                    <li>Relevant quest responses and progress that relate to the consultation topic</li>
                    <li>Any documents, business plans, or materials you explicitly choose to share</li>
                    <li>Your meeting availability and timezone preferences</li>
                  </ul>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <strong className="text-black dark:text-white">Expert Confidentiality:</strong> All experts on Mezzo Aid are contractually bound by strict confidentiality agreements. They must:
                  </p>
                  <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li>Keep all consultation information strictly confidential</li>
                    <li>Use your information solely for providing consultation services</li>
                    <li>Not disclose your business ideas, plans, or sensitive information to anyone</li>
                    <li>Not use your information for their own business ventures or purposes</li>
                    <li>Delete or return your materials after the consultation ends (unless you request otherwise)</li>
                  </ul>
                  <p className="text-[#6B6B6B] dark:text-[#c8cbd0]">
                    Experts who violate these confidentiality obligations may be permanently removed from our platform and may face legal consequences.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    4.2 With Trusted Service Providers
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We partner with carefully vetted third-party service providers who help us operate Mezzo Aid. These providers are bound by strict data processing agreements and can only use your information as instructed by us:
                  </p>
                  <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li><strong className="text-black dark:text-white">Payment processors:</strong> Paystack and Flutterwave (to securely process payments in Nigerian Naira and protect against payment fraud)</li>
                    <li><strong className="text-black dark:text-white">Cloud infrastructure:</strong> Amazon Web Services (AWS), Google Cloud Platform (to host our platform and store data securely with encryption)</li>
                    <li><strong className="text-black dark:text-white">Email services:</strong> SendGrid, Mailgun (to send transactional emails, quest reminders, and newsletters)</li>
                    <li><strong className="text-black dark:text-white">Analytics:</strong> Google Analytics (to understand how entrepreneurs use our platform and identify areas for improvement)</li>
                    <li><strong className="text-black dark:text-white">Customer support:</strong> Intercom, Zendesk (to provide responsive support and manage support tickets)</li>
                    <li><strong className="text-black dark:text-white">Video conferencing:</strong> Zoom, Google Meet (to facilitate expert consultation video calls)</li>
                    <li><strong className="text-black dark:text-white">SMS notifications:</strong> Twilio, Africa's Talking (to send appointment reminders via SMS, if you opt in)</li>
                    <li><strong className="text-black dark:text-white">Document storage:</strong> AWS S3, Google Cloud Storage (to securely store your uploaded business plans, pitch decks, and documents)</li>
                    <li><strong className="text-black dark:text-white">Security services:</strong> Cloudflare (for DDoS protection and secure content delivery)</li>
                  </ul>
                  <p className="text-[#6B6B6B] dark:text-[#c8cbd0]">
                    These service providers are contractually prohibited from using your information for any purpose other than providing services to Mezzo Aid. They must maintain the confidentiality and security of your information and comply with applicable data protection laws.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    4.3 For Legal Requirements and Protection
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We may disclose your information when we believe in good faith that disclosure is necessary to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li>Comply with applicable laws, regulations, legal processes, or enforceable governmental requests</li>
                    <li>Respond to valid court orders, subpoenas, warrants, or other legal demands</li>
                    <li>Cooperate with law enforcement, regulatory authorities, or government agencies when legally required</li>
                    <li>Enforce our Terms of Service, Privacy Policy, Expert Code of Conduct, or investigate potential violations</li>
                    <li>Detect, prevent, or address fraud, security breaches, or technical issues</li>
                    <li>Protect against harm to the rights, property, or safety of Mezzo Aid, our users, or the public as required or permitted by law</li>
                    <li>Respond to claims that content violates the rights of third parties</li>
                    <li>Verify compliance with applicable export control or economic sanctions laws</li>
                  </ul>
                  <p className="mt-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    Before disclosing information for legal reasons, we will make reasonable efforts to notify you unless we are legally prohibited from doing so, or if providing notice would compromise an investigation or create a risk of harm.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    4.4 In Business Transfers
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    If Mezzo Aid is involved in a merger, acquisition, asset sale, reorganization, bankruptcy, or other business transition, your information may be among the assets transferred. In such cases:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li>We will provide you with prominent notice via email and on our platform at least 30 days before the transfer</li>
                    <li>We will notify you of any changes to data handling practices or privacy policies</li>
                    <li>The acquiring entity will be required to honor this Privacy Policy for existing users</li>
                    <li>You will have the opportunity to delete your account and data before the transfer if you do not agree to the new terms</li>
                    <li>We will require the new entity to maintain equivalent privacy protections</li>
                  </ul>
                  <p className="text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We will take reasonable steps to ensure that your information continues to be protected in accordance with this Privacy Policy during any business transition.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    4.5 With Your Explicit Consent or At Your Direction
                  </h3>
                  <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We may share your information in other circumstances when you give us explicit, informed consent or direct us to do so, such as:
                  </p>
                  <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li><strong className="text-black dark:text-white">Success stories:</strong> Featuring your entrepreneurship journey, business outcomes, or testimonials in our marketing materials, blog posts, or case studies</li>
                    <li><strong className="text-black dark:text-white">Investor introductions:</strong> Connecting you with potential investors, venture capitalists, or angel investors who may be interested in funding your business</li>
                    <li><strong className="text-black dark:text-white">Ecosystem partners:</strong> Sharing your profile with startup accelerators, incubators, or entrepreneurship programs you're interested in</li>
                    <li><strong className="text-black dark:text-white">Pitch competitions:</strong> Submitting your pitch deck or business plan to pitch competitions, demo days, or funding events on your behalf</li>
                    <li><strong className="text-black dark:text-white">Media coverage:</strong> Sharing your story with journalists, bloggers, or media outlets for press coverage</li>
                    <li><strong className="text-black dark:text-white">Research participation:</strong> Including your anonymized data in entrepreneurship research or studies you've opted into</li>
                    <li><strong className="text-black dark:text-white">Third-party integrations:</strong> Connecting your Mezzo Aid account with other business tools or platforms you choose to integrate</li>
                  </ul>
                  <p className="text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We will always request your explicit, specific permission before sharing your information for these purposes. You can withdraw your consent at any time by contacting us at privacy@mezzoaid.com.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    4.6 Aggregated and Anonymized Data
                  </h3>
                  <p className="text-[#6B6B6B] dark:text-[#c8cbd0]">
                    We may share aggregated, anonymized, or de-identified data that cannot reasonably be used to identify you individually. This data has been processed to remove all personal identifiers. Examples include:
                  </p>
                  <ul className="mt-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    <li>Publishing reports on entrepreneurship trends in Nigeria or Africa</li>
                    <li>Sharing statistics on average quest completion rates by industry</li>
                    <li>Providing insights on the most common challenges African entrepreneurs face</li>
                    <li>Contributing to research on startup ecosystems in emerging markets</li>
                    <li>Sharing platform usage statistics with potential partners or investors</li>
                  </ul>
                  <p className="mt-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                    This aggregated data helps advance entrepreneurship knowledge and support ecosystem development while protecting your individual privacy.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Cookies and Tracking Technologies */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                Mezzo Aid uses cookies, web beacons, and similar tracking technologies to enhance your experience, understand how you use our platform, and improve our services.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                What Are Cookies?
              </h3>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                Cookies are small text files stored on your device by your web browser. They help us recognize you, remember your preferences, and provide personalized features.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Types of Cookies We Use:
              </h3>
              <ul className="mb-6 list-disc pl-6 space-y-3 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li>
                  <strong className="text-black dark:text-white">Essential Cookies (Required):</strong> These cookies are necessary for Mezzo Aid to function properly. They enable core features like secure login, quest progress tracking, expert consultation bookings, and payment processing. You cannot opt out of essential cookies as they're critical for platform functionality.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Analytics Cookies (Optional):</strong> These cookies help us understand how you use Mezzo Aid by collecting anonymous information about pages visited, quests completed, features used, and time spent. We use Google Analytics and similar tools. This data helps us improve the platform and create better resources for entrepreneurs.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Marketing Cookies (Optional):</strong> These cookies track your browsing activity to show you relevant content about entrepreneurship resources, upcoming webinars, and funding opportunities. They also help us measure the effectiveness of our marketing campaigns.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Personalization Cookies (Optional):</strong> These cookies remember your preferences (language, dashboard layout, notification settings) and customize your experience. They remember your quest progress, saved experts, and recommended next steps.
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Managing Cookie Preferences
              </h3>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                You have full control over which cookies you accept:
              </p>
              <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li>Use our cookie preference center (accessible via the cookie banner when you first visit)</li>
                <li>Update your cookie preferences anytime in your account settings</li>
                <li>Configure your browser settings to block or delete cookies</li>
                <li>Use browser extensions to manage cookie preferences</li>
              </ul>
              <p className="text-[#6B6B6B] dark:text-[#c8cbd0]">
                Note that disabling certain cookies may limit your ability to use some Mezzo Aid features. Essential cookies cannot be disabled as they're necessary for the platform to work.
              </p>
            </section>

            {/* 6. Data Security */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                6. Data Security
              </h2>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                We take the security of your information seriously and implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Our Security Measures Include:
              </h3>
              <ul className="mb-6 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li><strong className="text-black dark:text-white">Encryption:</strong> All data transmitted between your device and our servers is encrypted using TLS/SSL (Transport Layer Security). Sensitive data at rest is encrypted using AES-256 encryption.</li>
                <li><strong className="text-black dark:text-white">Secure authentication:</strong> Passwords are hashed using bcrypt with salt. We support two-factor authentication (2FA) for additional account security.</li>
                <li><strong className="text-black dark:text-white">Access controls:</strong> Strict role-based access controls limit who can access your information. Employees and contractors only have access to data necessary for their job functions.</li>
                <li><strong className="text-black dark:text-white">Regular security audits:</strong> We conduct regular internal security reviews and third-party penetration testing to identify and fix vulnerabilities.</li>
                <li><strong className="text-black dark:text-white">Secure infrastructure:</strong> Our platform is hosted on secure, certified cloud infrastructure (AWS, Google Cloud) with built-in security features, firewalls, and intrusion detection.</li>
                <li><strong className="text-black dark:text-white">Employee training:</strong> All team members receive regular security and privacy training and are bound by confidentiality agreements.</li>
                <li><strong className="text-black dark:text-white">Incident response:</strong> We have documented incident response procedures to quickly detect, respond to, and recover from security incidents.</li>
                <li><strong className="text-black dark:text-white">Monitoring:</strong> Continuous monitoring of our systems for suspicious activity, unauthorized access attempts, and potential security threats.</li>
                <li><strong className="text-black dark:text-white">Payment security:</strong> Payment information is processed by PCI DSS-compliant providers (Paystack, Flutterwave). We do not store complete payment card details on our servers.</li>
                <li><strong className="text-black dark:text-white">Data backups:</strong> Regular encrypted backups ensure data can be recovered in case of system failures or disasters.</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Security Breach Notification
              </h3>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                In the unlikely event of a data breach that affects your personal information, we will:
              </p>
              <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li>Notify you via email within 72 hours of discovering the breach</li>
                <li>Inform relevant authorities as required by law</li>
                <li>Provide clear information about what data was affected</li>
                <li>Explain steps we're taking to address the breach</li>
                <li>Recommend actions you can take to protect yourself</li>
                <li>Offer free credit monitoring if financial information was compromised</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Your Role in Security
              </h3>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                While we implement robust security measures, you also play an important role in protecting your account:
              </p>
              <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li>Use a strong, unique password for your Mezzo Aid account</li>
                <li>Enable two-factor authentication (2FA) in your account settings</li>
                <li>Never share your password or authentication codes with anyone</li>
                <li>Log out when using shared or public devices</li>
                <li>Keep your contact information updated so we can reach you about security issues</li>
                <li>Report any suspicious activity or unauthorized access immediately</li>
                <li>Be cautious of phishing emails claiming to be from Mezzo Aid</li>
              </ul>

              <div className="rounded-lg border border-[#5B1B8D]/30 bg-[#E6D5F0] p-6">
                <p className="text-sm text-[#5B1B8D] font-semibold mb-2">
                  ⚠️ Important Security Disclaimer
                </p>
                <p className="text-sm text-[#5B1B8D]">
                  While we implement industry-leading security measures, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security. However, we continuously work to improve our security practices and protect your information to the best of our ability.
                </p>
              </div>
            </section>

            {/* 7. Data Retention */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                7. Data Retention
              </h2>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Retention Periods:
              </h3>
              <ul className="mb-6 list-disc pl-6 space-y-3 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li>
                  <strong className="text-black dark:text-white">Active accounts:</strong> We retain your account information and quest progress for as long as your account is active and you continue to use Mezzo Aid.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Inactive accounts:</strong> If you haven't logged in for 3 years, we may delete your account and associated data after sending you advance notice.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Deleted accounts:</strong> When you delete your account, we permanently delete most of your personal information within 30 days, except for data we're legally required to retain.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Business documents:</strong> Business plans, pitch decks, and documents you've uploaded are deleted when you delete your account or remove them individually.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Expert consultations:</strong> Consultation records are retained for 2 years for quality assurance and dispute resolution, then deleted unless you or the expert request continued retention.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Payment information:</strong> Transaction records are retained for 7 years as required by Nigerian tax and financial regulations. Payment card details are stored by Paystack/Flutterwave, not by us.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Support communications:</strong> Customer support tickets and related communications are retained for 3 years to improve our service and resolve potential disputes.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Marketing data:</strong> Email marketing data is retained until you unsubscribe or request deletion.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Legal obligations:</strong> Some information may be retained longer when required by law, to comply with regulatory requirements, resolve disputes, enforce agreements, or protect legal rights.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Anonymized data:</strong> Aggregated, anonymized data (which cannot identify you) may be retained indefinitely for research, analytics, and improving our platform.
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Secure Deletion
              </h3>
              <p className="text-[#6B6B6B] dark:text-[#c8cbd0]">
                When we delete your data, we use secure deletion methods to ensure it cannot be recovered. This includes removing data from backups within 90 days. We maintain audit logs of deletions for compliance purposes, but these logs do not contain your personal information.
              </p>
            </section>

            {/* 8. Your Privacy Rights */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                8. Your Privacy Rights
              </h2>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                Depending on your location, you may have specific rights regarding your personal information under data protection laws such as the Nigerian Data Protection Regulation (NDPR), the European Union's General Data Protection Regulation (GDPR), or the California Consumer Privacy Act (CCPA).
              </p>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Your Rights Include:
              </h3>
              <ul className="mb-6 list-disc pl-6 space-y-3 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li>
                  <strong className="text-black dark:text-white">Right to Access:</strong> Request a copy of the personal information we hold about you, including quest responses, business plans, consultation records, and account data.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Right to Rectification:</strong> Request correction of inaccurate or incomplete personal information. You can update most information directly in your account settings.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Right to Deletion:</strong> Request deletion of your personal information, subject to certain legal exceptions (e.g., records we must keep for tax or legal compliance).
                </li>
                <li>
                  <strong className="text-black dark:text-white">Right to Data Portability:</strong> Request a machine-readable copy of your personal information to transfer to another service provider.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Right to Restrict Processing:</strong> Request that we limit how we process your personal information in certain circumstances.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Right to Object:</strong> Object to processing of your personal information for direct marketing, research, or our legitimate interests.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Right to Withdraw Consent:</strong> Withdraw your consent for processing based on consent at any time (this won't affect processing that occurred before withdrawal).
                </li>
                <li>
                  <strong className="text-black dark:text-white">Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority (in Nigeria: Nigeria Data Protection Commission - NDPC) if you believe we've violated your privacy rights.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                How to Exercise Your Rights
              </h3>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                To exercise any of these rights, you can:
              </p>
              <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li>Email us at <a href="mailto:privacy@mezzoaid.com" className="text-[#5B1B8D] hover:text-[#7B2CBF] underline font-medium">privacy@mezzoaid.com</a></li>
                <li>Use the privacy settings in your account dashboard</li>
                <li>Contact our support team through the platform</li>
                <li>Write to us at: 15 Wole Ariyo Street, Lekki Phase 1, Lagos, Nigeria</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Response Timeline
              </h3>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                We will respond to your request within:
              </p>
              <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li>30 days for most requests (as required by NDPR and GDPR)</li>
                <li>45 days for complex requests (with notification of the extension)</li>
                <li>We may need to verify your identity before processing certain requests</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Limitations
              </h3>
              <p className="text-[#6B6B6B] dark:text-[#c8cbd0]">
                Your rights may be limited in certain circumstances. For example, we may deny your deletion request if we're legally required to retain the information, need it to defend legal claims, or it's necessary for fraud prevention or security purposes. We will explain any limitations that apply to your request.
              </p>
            </section>

            {/* 9. Children's Privacy */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                9. Children's Privacy
              </h2>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                Mezzo Aid is designed for entrepreneurs who are at least 18 years old. We do not knowingly collect, use, or disclose personal information from children under 18 years of age.
              </p>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                If we discover that we have inadvertently collected personal information from a child under 18, we will:
              </p>
              <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li>Delete the information as quickly as possible</li>
                <li>Terminate the account</li>
                <li>Notify the parent or guardian if we have contact information</li>
                <li>Take steps to prevent future unauthorized access by minors</li>
              </ul>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                If you believe we have collected information from a child under 18, please contact us immediately at <a href="mailto:privacy@mezzoaid.com" className="text-[#5B1B8D] hover:text-[#7B2CBF] underline font-medium">privacy@mezzoaid.com</a> so we can take appropriate action.
              </p>
              <p className="text-[#6B6B6B] dark:text-[#c8cbd0]">
                Parents and guardians: If you discover that your child has created an account on Mezzo Aid without your permission, please contact us and we will delete the account and associated information.
              </p>
            </section>

            {/* 10. International Transfers */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                10. International Data Transfers
              </h2>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                Mezzo Aid is based in Nigeria, but we may transfer, store, and process your personal information in countries other than Nigeria, including the United States, Europe, and other locations where our service providers operate.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Safeguards for International Transfers
              </h3>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                When we transfer your information internationally, we ensure appropriate safeguards are in place:
              </p>
              <ul className="mb-6 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li><strong className="text-black dark:text-white">Data Processing Agreements:</strong> Contracts with service providers that require them to protect your data according to applicable data protection laws</li>
                <li><strong className="text-black dark:text-white">Standard Contractual Clauses:</strong> Use of EU Standard Contractual Clauses (SCCs) for transfers to countries without adequacy decisions</li>
                <li><strong className="text-black dark:text-white">Privacy Shield (where applicable):</strong> Certification under relevant data transfer frameworks</li>
                <li><strong className="text-black dark:text-white">Technical safeguards:</strong> Encryption during transit and at rest, regardless of storage location</li>
                <li><strong className="text-black dark:text-white">Compliance with NDPR:</strong> Ensuring transfers comply with Nigerian Data Protection Regulation requirements</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Your Rights Regarding International Transfers
              </h3>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                You have the right to:
              </p>
              <ul className="mb-4 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li>Request information about where your data is stored and processed</li>
                <li>Request a copy of the safeguards we use for international transfers</li>
                <li>Object to transfers in certain circumstances</li>
              </ul>
              <p className="text-[#6B6B6B] dark:text-[#c8cbd0]">
                For questions about international data transfers, contact us at <a href="mailto:privacy@mezzoaid.com" className="text-[#5B1B8D] hover:text-[#7B2CBF] underline font-medium">privacy@mezzoaid.com</a>.
              </p>
            </section>

            {/* 11. Changes to This Privacy Policy */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                11. Changes to This Privacy Policy
              </h2>
              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make changes, we will:
              </p>
              <ul className="mb-6 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Notify you of significant changes via email at least 30 days before they take effect</li>
                <li>Display a prominent notice on our platform about the changes</li>
                <li>For material changes that affect your rights, request your consent where required by law</li>
                <li>Maintain an archive of previous policy versions for your reference</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Types of Changes
              </h3>
              <ul className="mb-6 list-disc pl-6 space-y-2 text-[#6B6B6B] dark:text-[#c8cbd0]">
                <li><strong className="text-black dark:text-white">Minor changes:</strong> Clarifications, fixing typos, or updates to contact information - effective immediately upon posting</li>
                <li><strong className="text-black dark:text-white">Significant changes:</strong> Material changes to data collection, use, or sharing practices - 30-day notice before effectiveness</li>
                <li><strong className="text-black dark:text-white">Legal changes:</strong> Updates required by law - may be effective immediately with notice</li>
              </ul>

              <p className="mb-4 text-[#6B6B6B] dark:text-[#c8cbd0]">
                We encourage you to review this Privacy Policy periodically. Your continued use of Mezzo Aid after changes take effect constitutes acceptance of the updated policy. If you disagree with changes, you may delete your account before they take effect.
              </p>

              <div className="rounded-lg bg-[#E6D5F0] p-6">
                <p className="text-sm text-[#5B1B8D] font-semibold mb-2">
                  📧 Stay Informed
                </p>
                <p className="text-sm text-[#5B1B8D]">
                  Make sure your email address is up to date in your account settings so we can notify you of important privacy policy changes.
                </p>
              </div>
            </section>

            {/* 12. Contact Us */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                12. Contact Information
              </h2>
              <p className="mb-6 text-[#6B6B6B] dark:text-[#c8cbd0]">
                If you have any questions, concerns, or requests regarding this Privacy Policy, our data practices, or how we handle your personal information, please don't hesitate to contact us. We're here to help and committed to addressing your privacy concerns promptly.
              </p>

              <div className="rounded-lg bg-[#E6D5F0] p-6 space-y-4">
                <div>
                  <p className="text-black dark:text-white font-bold text-lg mb-1">Mezzo Aid</p>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#c8cbd0] italic">Empowering African Entrepreneurs to Build Fundable Businesses</p>
                </div>

                <div className="space-y-3 text-[#6B6B6B] dark:text-[#c8cbd0]">
                  <div>
                    <p className="font-semibold text-black dark:text-white mb-1">Privacy Officer</p>
                    <p className="text-sm">
                      Email: <a href="mailto:privacy@mezzoaid.com" className="text-[#5B1B8D] hover:text-[#7B2CBF] underline font-medium">privacy@mezzoaid.com</a>
                    </p>
                    <p className="text-sm">For privacy inquiries, data requests, and GDPR/NDPR compliance</p>
                  </div>

                  <div>
                    <p className="font-semibold text-black dark:text-white mb-1">General Support</p>
                    <p className="text-sm">
                      Email: <a href="mailto:support@mezzoaid.com" className="text-[#5B1B8D] hover:text-[#7B2CBF] underline font-medium">support@mezzoaid.com</a>
                    </p>
                    <p className="text-sm">For general questions and technical support</p>
                  </div>

                  <div>
                    <p className="font-semibold text-black dark:text-white mb-1">Mailing Address</p>
                    <p className="text-sm">15 Wole Ariyo Street</p>
                    <p className="text-sm">Lekki Phase 1, Lagos</p>
                    <p className="text-sm">Nigeria</p>
                  </div>

                  <div>
                    <p className="font-semibold text-black dark:text-white mb-1">Phone</p>
                    <p className="text-sm">+234 (0) 123 456 7890</p>
                    <p className="text-sm text-xs">Available Monday - Friday, 9:00 AM - 5:00 PM WAT</p>
                  </div>

                  <div>
                    <p className="font-semibold text-black dark:text-white mb-1">Response Time</p>
                    <p className="text-sm">We aim to respond to all privacy inquiries within 2-3 business days</p>
                    <p className="text-sm">Formal data requests will be processed within 30 days as required by law</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 border border-[#5B1B8D]/30 rounded-lg">
                <p className="font-semibold text-black dark:text-white mb-2">Data Protection Authority</p>
                <p className="text-sm text-[#6B6B6B] dark:text-[#c8cbd0]">
                  If you have concerns about how we handle your personal information and our response doesn't satisfy you, you have the right to lodge a complaint with:
                </p>
                <p className="mt-3 text-sm text-black dark:text-white font-medium">
                  Nigeria Data Protection Commission (NDPC)
                </p>
                <p className="text-sm text-[#6B6B6B] dark:text-[#c8cbd0]">
                  Website: <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-[#5B1B8D] hover:text-[#7B2CBF] underline">ndpc.gov.ng</a>
                </p>
              </div>
            </section>

            {/* Footer Navigation */}
            <div className="pt-8 border-t border-stroke dark:border-strokedark">
              <div className="flex flex-wrap gap-4 text-sm mb-4">
                <Link href="/terms" className="text-[#5B1B8D] hover:text-[#7B2CBF] underline font-medium">
                  Terms of Service
                </Link>
                <span className="text-[#6B6B6B] dark:text-[#c8cbd0]">•</span>
                <Link href="/contact" className="text-[#5B1B8D] hover:text-[#7B2CBF] underline font-medium">
                  Contact Us
                </Link>
                <span className="text-[#6B6B6B] dark:text-[#c8cbd0]">•</span>
                <Link href="/blog" className="text-[#5B1B8D] hover:text-[#7B2CBF] underline font-medium">
                  Blog
                </Link>
                <span className="text-[#6B6B6B] dark:text-[#c8cbd0]">•</span>
                <Link href="/experts" className="text-[#5B1B8D] hover:text-[#7B2CBF] underline font-medium">
                  Meet Our Experts
                </Link>
                <span className="text-[#6B6B6B] dark:text-[#c8cbd0]">•</span>
                <Link href="/" className="text-[#5B1B8D] hover:text-[#7B2CBF] underline font-medium">
                  Back to Home
                </Link>
              </div>
              <p className="text-sm text-[#6B6B6B] dark:text-[#c8cbd0]">
                © {new Date().getFullYear()} Mezzo Aid. All rights reserved. Empowering African entrepreneurs to build fundable businesses.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}