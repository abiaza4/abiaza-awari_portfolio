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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <MessageSquare className="text-primary" size={24} />
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        {...register("name")}
                        id="name"
                        placeholder="Your name"
                        className={`bg-background ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className={`bg-background ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      {...register("subject")}
                      id="subject"
                      placeholder="Project inquiry"
                      className={`bg-background ${errors.subject ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      {...register("message")}
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      className={`bg-background resize-none ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href || undefined}
                      className={`flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors ${!item.href ? "cursor-default" : ""}`}
                    >
                      <div className="p-3 rounded-lg bg-primary/20">
                        <item.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
                <div className="flex gap-4">
                  {socials.map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground ${social.color} transition-all duration-300`}
                    >
                      <social.icon size={24} />
                      <span className="text-sm font-medium">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-75"></div>
                  </div>
                  <h3 className="text-xl font-bold">Currently Available</h3>
                </div>
                <p className="text-muted-foreground">
                  I'm open to new projects and opportunities. Whether you need a
                  full-stack developer or have a quick question, feel free to
                  reach out!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/30 transition-colors"
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
