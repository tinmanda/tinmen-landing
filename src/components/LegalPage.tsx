import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface Section {
  title: string;
  body: string;
}

const TERMS_SECTIONS: Section[] = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the Tinmen application (\"App\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, do not use the App. Tinmen reserves the right to modify these Terms at any time, and your continued use of the App constitutes acceptance of any changes.",
  },
  {
    title: "2. Description of Service",
    body: "Tinmen is a platform that connects you with home chefs in your area. The App enables you to browse food listings, place orders, communicate with chefs, and track deliveries. Tinmen acts as an intermediary platform and is not responsible for the preparation of food items.",
  },
  {
    title: "3. Eligibility",
    body: "To use the App, you must: (a) be at least 18 years of age; (b) have a valid phone number; (c) have the legal capacity to enter into a binding agreement. By registering, you represent and warrant that you meet all eligibility requirements.",
  },
  {
    title: "4. Account Registration",
    body: "You must register for an account using your phone number and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You agree to notify Tinmen immediately of any unauthorized use of your account.",
  },
  {
    title: "5. Orders and Payments",
    body: "By placing an order through the App, you agree to pay the listed price plus any applicable delivery fees and taxes. Prices are set by individual chefs and may change without notice. Tinmen does not process payments directly — payments are made peer-to-peer between you and the chef using the payment method specified by the chef (such as UPI or bank transfer). Tinmen tracks orders and payments via an internal ledger for record-keeping purposes. Refunds are handled directly between you and the chef.",
  },
  {
    title: "6. Referral Program",
    body: "Tinmen may offer a referral program that provides discounts or rewards to users who refer new customers. Referral codes are unique to each user. Referral rewards are subject to the terms and conditions of the program, which may vary by region. Tinmen reserves the right to modify or discontinue the referral program at any time. Abuse of the referral system, including creating multiple accounts or using fraudulent referral codes, may result in account suspension.",
  },
  {
    title: "7. User Conduct",
    body: "You agree to: (a) use the App only for lawful purposes; (b) communicate respectfully with chefs, delivery partners, and other users; (c) provide accurate delivery addresses and contact information; (d) be available to receive deliveries at the specified location; (e) not misuse the rating or review system.",
  },
  {
    title: "8. Prohibited Conduct",
    body: "You agree not to: (a) use the App for any unlawful purpose; (b) impersonate any person or entity; (c) tamper with or manipulate the App; (d) harass, threaten, or harm other users; (e) share your account credentials with others; (f) use automated systems to interact with the App; (g) engage in fraudulent activity regarding orders or payments.",
  },
  {
    title: "9. Termination",
    body: "Tinmen may suspend or terminate your account at any time, with or without cause, including for violation of these Terms. You may delete your account at any time through the App's account settings. Upon termination, your right to use the App ceases immediately.",
  },
  {
    title: "10. Limitation of Liability",
    body: "To the maximum extent permitted by law, Tinmen shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App. Tinmen is not responsible for the quality, safety, or legality of food items prepared by chefs on the platform.",
  },
  {
    title: "11. Disclaimer of Warranties",
    body: "The App is provided \"as is\" and \"as available\" without warranties of any kind, either express or implied. Tinmen does not warrant that the App will be uninterrupted, error-free, or secure.",
  },
  {
    title: "12. Indemnification",
    body: "You agree to indemnify and hold harmless Tinmen, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the App or violation of these Terms.",
  },
  {
    title: "13. Governing Law",
    body: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.",
  },
  {
    title: "14. Contact Us",
    body: "If you have any questions about these Terms, please contact us at support@tinmen.ai.",
  },
];

const PRIVACY_SECTIONS: Section[] = [
  {
    title: "1. Introduction",
    body: "Tinmen (\"we\", \"our\", or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Tinmen application (\"App\"). Please read this policy carefully. By using the App, you consent to the practices described herein.",
  },
  {
    title: "2. Information We Collect",
    body: "We collect information you provide directly, including: (a) phone number and name during registration; (b) profile information and profile pictures; (c) delivery addresses and saved locations; (d) dietary preferences and allergen information; (e) chat messages with chefs and delivery partners, including images and videos; (f) order history and payment details. We also automatically collect device information (such as app version and platform), push notification tokens, usage data, and location data when you use the App.",
  },
  {
    title: "3. How We Use Your Information",
    body: "We use your information to: (a) create and manage your account; (b) process and fulfill your food orders; (c) facilitate communication between you, chefs, and delivery partners; (d) track orders and payment records via our internal ledger; (e) improve our services and develop new features; (f) send you service-related notifications via push notifications; (g) ensure safety and security of the platform; (h) comply with legal obligations.",
  },
  {
    title: "4. Automated Processing and AI",
    body: "We use artificial intelligence to moderate content shared through in-app chat. Images sent in chat messages may be analyzed by automated systems to classify content (such as food photos, payment confirmations, or delivery confirmations) and to detect inappropriate content. This processing is performed by third-party AI services (Anthropic) on our behalf to maintain platform safety.",
  },
  {
    title: "5. Location Data",
    body: "The App collects your location data to show nearby chefs and food listings, provide delivery tracking, and improve service availability in your area. Location data is collected when the App is in use. You can disable location services through your device settings, but this may limit App functionality.",
  },
  {
    title: "6. Information Sharing",
    body: "We may share your information with: (a) chefs and delivery partners — your name, delivery address, and order details for order fulfillment; (b) service providers who assist in operating the App; (c) law enforcement when required by law or to protect safety; (d) business partners in connection with a merger, acquisition, or sale. We do not sell your personal information to third parties.",
  },
  {
    title: "7. Data Retention",
    body: "We retain your personal information for as long as your account is active or as needed to provide services. After you submit a deletion request, we retain certain data for up to 30 days for processing, after which it is permanently deleted. Some data may be retained longer if required by law or for legitimate business purposes.",
  },
  {
    title: "8. Data Security",
    body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "9. Your Rights",
    body: "You have the right to: (a) access your personal information; (b) correct inaccurate data; (c) delete your account and associated data; (d) object to or restrict certain processing; (e) receive your data in a portable format. To exercise these rights, use the account settings in the App or contact us at support@tinmen.ai.",
  },
  {
    title: "10. Children's Privacy",
    body: "The App is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.",
  },
  {
    title: "11. Third-Party Services",
    body: "The App may use third-party services including Back4App (data storage), Mapbox (mapping and geocoding), Expo (app delivery and push notifications), Cloudinary (image storage and processing), and Anthropic (AI-powered content moderation). These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party services.",
  },
  {
    title: "12. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of material changes through the App or by other means. Your continued use of the App after changes are posted constitutes your acceptance of the revised policy.",
  },
  {
    title: "13. Contact Us",
    body: "If you have questions or concerns about this Privacy Policy or our data practices, please contact us at support@tinmen.ai.",
  },
];

const PAGES = {
  terms: {
    title: "Terms of Service",
    sections: TERMS_SECTIONS,
  },
  privacy: {
    title: "Privacy Policy",
    sections: PRIVACY_SECTIONS,
  },
} as const;

export default function LegalPage({ page }: { page: "terms" | "privacy" }) {
  const reduced = useReducedMotion();
  const { title, sections } = PAGES[page];

  return (
    <div className="min-h-screen bg-warm-50 pt-24 md:pt-28 pb-20 md:pb-28 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <motion.a
          href="#"
          initial={reduced ? false : { opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to home
        </motion.a>

        {/* Title */}
        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-primary tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3 text-sm text-text-tertiary"
        >
          Last updated: February 25, 2026
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={reduced ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 mb-10 h-px bg-warm-300 origin-left"
        />

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
            >
              <h2 className="text-base font-semibold text-text-primary mb-2">
                {section.title}
              </h2>
              <p className="text-[15px] leading-7 text-text-secondary">
                {section.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
