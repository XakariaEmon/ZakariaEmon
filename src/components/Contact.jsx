import { useRef, useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const serviceId = "service_s16j8vc";
    const templateId = "template_cj6f56o";
    const publicKey = "fuDM1iXbYJipDGaHR";

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        setSubmitStatus("success");
        setIsSubmitting(false);
        e.target.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        setSubmitStatus("error");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <AnimatedSection id="contact" className="bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's build something amazing together"
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:w-2/5 space-y-6">
            <div className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-content/5">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 text-primary rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-base-content/60 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:jh.emon00@gmail.com"
                      className="text-base font-medium link link-hover link-primary"
                    >
                      jh.emon00@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 text-primary rounded-xl group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-base-content/60 mb-1">
                      Location
                    </h4>
                    <p className="text-base font-medium">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="divider my-6"></div>

              <div>
                <h4 className="text-sm font-semibold text-base-content/60 mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/XakariaEmon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zakariaemon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:jh.emon00@gmail.com"
                    className="btn btn-circle bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5">
            <form
              ref={formRef}
              className="bg-base-100 p-8 lg:p-10 rounded-2xl shadow-lg border border-base-content/5"
              onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    className="input input-bordered w-full focus:input-primary transition-all"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base">
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    className="input input-bordered w-full focus:input-primary transition-all"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base">
                      Subject
                    </span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    className="input input-bordered w-full focus:input-primary transition-all"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base">
                      Message
                    </span>
                  </label>
                  <textarea
                    name="message"
                    className="textarea textarea-bordered h-36 w-full resize-none focus:textarea-primary transition-all leading-relaxed"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="alert alert-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="alert alert-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Oops! Something went wrong. Please try again or email me
                      directly.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full text-base font-semibold hover:scale-[1.02] transition-transform"
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
