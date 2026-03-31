import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  X as XIcon,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const socials = [
  {
    icon: Github,
    href: "https://github.com/abiaza4",
    label: "GitHub",
    color: "hover:text-foreground",
  },
  {
    icon: Linkedin,
    href: "https://share.google/qDsKnI8a03QX41OPZ",
    label: "LinkedIn",
    color: "hover:text-foreground",
  },
  {
    icon: XIcon,
    href: "https://x.com/AwariAbiaza",
    label: "X",
    color: "hover:text-foreground",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abiazaawari@gmail.com",
    href: "mailto:abiazaawari@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone 1",
    value: "+211 922 257 944",
    href: "tel:+211922257944",
  },
  {
    icon: Phone,
    label: "Phone 2",
    value: "+250 791 902 058",
    href: "tel:+250791902058",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kigali, Rwanda (Remote Available)",
    href: null,
  },
];

const faqs = [
  {
    question: "What are your rates?",
    answer:
      "My rates vary depending on project scope and complexity. I offer competitive pricing for quality work. Let's discuss your project to get a accurate quote.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes! I'm fully remote and have experience working with clients across different time zones. I use modern communication tools to ensure smooth collaboration.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines depend on project complexity. A simple website takes 2-4 weeks, while complex web applications can take 2-6 months. I'll provide a detailed timeline after our initial consultation.",
  },
  {
    question: "Do you offer maintenance after project completion?",
    answer:
      "Yes, I offer ongoing maintenance packages to keep your application running smoothly. This includes bug fixes, security updates, and feature enhancements.",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success("Message sent successfully!", {
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto px-2">
            Have a project in mind or just want to chat? Feel free to reach out!
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-border">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                  <MessageSquare className="text-primary" size={20} />
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:space-y-0">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                      <Input
                        {...register("name")}
                        id="name"
                        placeholder="Your name"
                        className={`bg-background text-sm sm:text-base ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs sm:text-sm flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                      <Input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className={`bg-background text-sm sm:text-base ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs sm:text-sm flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm sm:text-base">Subject</Label>
                    <Input
                      {...register("subject")}
                      id="subject"
                      placeholder="Project inquiry"
                      className={`bg-background text-sm sm:text-base ${errors.subject ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs sm:text-sm flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                    <Textarea
                      {...register("message")}
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className={`bg-background resize-none text-sm sm:text-base ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs sm:text-sm flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <Card className="border-border">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h2>
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href || undefined}
                      className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors ${!item.href ? "cursor-default" : ""}`}
                    >
                      <div className="p-2 sm:p-3 rounded-lg bg-primary/20 shrink-0">
                        <item.icon className="text-primary" size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium text-sm sm:text-base break-all">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Follow Me</h2>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {socials.map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 md:p-4 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground ${social.color} transition-all duration-300`}
                    >
                      <social.icon size={20} />
                      <span className="text-xs sm:text-sm font-medium">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                  <div className="relative shrink-0">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary"></div>
                    <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary animate-ping opacity-75"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">Currently Available</h3>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">
                  I'm open to new projects and opportunities. Whether you need a
                  full-stack developer or have a quick question, feel free to
                  reach out!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/30 transition-colors"
              >
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold mb-2 text-base sm:text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
