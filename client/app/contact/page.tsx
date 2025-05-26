"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description:
          "We've received your message and will get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Have questions or feedback? We'd love to hear from you. Our team
              is here to help you with anything you need.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="billing">
                          Billing Question
                        </SelectItem>
                        <SelectItem value="partnership">
                          Partnership Opportunity
                        </SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-hero-gradient hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email Us</h3>
                        <p className="text-muted-foreground mb-1">
                          For general inquiries:
                        </p>
                        <a
                          href="mailto:info@edulearn.com"
                          className="text-primary hover:underline"
                        >
                          info@edulearn.com
                        </a>
                        <p className="text-muted-foreground mt-2 mb-1">
                          For support:
                        </p>
                        <a
                          href="mailto:support@edulearn.com"
                          className="text-primary hover:underline"
                        >
                          support@edulearn.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Call Us</h3>
                        <p className="text-muted-foreground mb-1">
                          Customer Support:
                        </p>
                        <a
                          href="tel:+18001234567"
                          className="text-primary hover:underline"
                        >
                          +1 (800) 123-4567
                        </a>
                        <p className="text-muted-foreground mt-2 mb-1">
                          Business Inquiries:
                        </p>
                        <a
                          href="tel:+18009876543"
                          className="text-primary hover:underline"
                        >
                          +1 (800) 987-6543
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Map Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968173775!2d-122.40058672393326!3d37.78778771469066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0xcfd61a4390d5b313!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1684269378398!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EduLearn Headquarters Location"
                ></iframe>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem
                    value="item-1"
                    className="border rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      How do I enroll in a course?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      Enrolling in a course is easy! Simply browse our course
                      catalog, select the course you're interested in, and click
                      the "Enroll Now" button. If you don't have an account yet,
                      you'll be prompted to create one before completing your
                      enrollment.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      What payment methods do you accept?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      We accept all major credit cards (Visa, Mastercard,
                      American Express, Discover), PayPal, and Apple Pay. For
                      certain courses, we also offer payment plans to help make
                      education more accessible.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      Can I get a refund if I'm not satisfied with a course?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      Yes, we offer a 30-day money-back guarantee for most of
                      our courses. If you're not completely satisfied with your
                      purchase, you can request a refund within 30 days of
                      enrollment. Some specialized courses may have different
                      refund policies, which will be clearly stated on the
                      course page.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="border rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      How long do I have access to a course after enrolling?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      Once you enroll in a course, you have lifetime access to
                      the course materials. This means you can learn at your own
                      pace and revisit the content whenever you need a
                      refresher.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-5"
                    className="border rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      Do you offer certificates upon course completion?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      Yes, we provide certificates of completion for all our
                      courses. These certificates can be added to your resume or
                      LinkedIn profile to showcase your new skills to potential
                      employers.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="text-center mt-10">
                  <p className="text-muted-foreground mb-4">
                    Still have questions? We're here to help!
                  </p>
                  <Link href="/faq">
                    <Button variant="outline">View All FAQs</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
              <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
              <div className="absolute bottom-[20%] right-[30%] w-[300px] h-[300px] bg-primary/30 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Learning Experience?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Join our community of learners and start your journey to
                mastering new skills today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/courses">
                  <Button className="bg-hero-gradient hover:opacity-90 px-8 py-6 text-lg">
                    Browse Courses
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Create Free Account
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Contact;
