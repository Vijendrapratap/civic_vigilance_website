import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-gray-900 text-gray-100">
            <Navigation />

            <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>

                <div className="space-y-6 text-gray-300">
                    <p className="text-lg">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">1. Introduction</h2>
                        <p className="mb-4">
                            Welcome to Civic Vigilance ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website civicvigilance.com, use our mobile application, or engage with our platform.
                        </p>
                        <p>
                            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">2. Information We Collect</h2>
                        <p className="mb-4">
                            We collect information that you provide directly to us when you register for an account, report an issue, or communicate with us. This may include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or our mobile application.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                            <li><strong>Geo-Location Information:</strong> We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using our mobile application, to provide location-based services. If you wish to change our access or permissions, you may do so in your device's settings.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">3. How We Use Your Information</h2>
                        <p className="mb-4">
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Create and manage your account.</li>
                            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                            <li>Email you regarding your account or order.</li>
                            <li>Enable user-to-user communications.</li>
                            <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                            <li>Increase the efficiency and operation of the Site and our mobile application.</li>
                            <li>Monitor and analyze usage and trends to improve your experience with the Site and our mobile application.</li>
                            <li>Notify you of updates to the Site and our mobile application.</li>
                            <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
                            <li>Perform other business activities as needed.</li>
                            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                            <li>Process payments and refunds.</li>
                            <li>Request feedback and contact you about your use of the Site and our mobile application.</li>
                            <li>Resolve disputes and troubleshoot problems.</li>
                            <li>Respond to product and customer service requests.</li>
                            <li>Send you a newsletter.</li>
                            <li>Solicit support for the Site and our mobile application.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">4. Disclosure of Your Information</h2>
                        <p className="mb-4">
                            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                            <li><strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.</li>
                            <li><strong>Interactions with Other Users:</strong> If you interact with other users of the Site and our mobile application, those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following blogs.</li>
                            <li><strong>Online Postings:</strong> When you post comments, contributions or other content to the Site or our mobile applications, your posts may be viewed by all users and may be publicly distributed outside the Site and our mobile application in perpetuity.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">5. Security of Your Information</h2>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">6. Policy for Children</h2>
                        <p>
                            We do not knowingly solicit information from or market to children under the age of 13. If you become aware that any data we have collected is from children under the age of 13, please contact us using the contact information provided below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">7. Controls for Do-Not-Track Features</h2>
                        <p>
                            Most web browsers and some mobile operating systems and our mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">8. Contact Us</h2>
                        <p className="mb-4">
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p className="font-bold text-white">Civic Vigilance</p>
                            <p>Email: <a href="mailto:contact@civicvigilance.com" className="text-cyan-400 hover:underline">contact@civicvigilance.com</a></p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
            <BackToTop />
        </main>
    );
}
