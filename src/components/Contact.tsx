import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);
      console.log("Email would be sent to: sahithyalakku1234@gmail.com");

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📍",
      label: "Location",
      value: "Amaravati, Andhra Pradesh"
    },
    {
      icon: "📧",
      label: "Email",
      value: "sahithyalakku1234@gmail.com"
    },
    {
      icon: "☎️",
      label: "Phone",
      value: "+91 85005088883"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking to hire, collaborate on a project, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const isEmail = info.label === "Email";
                const isPhone = info.label === "Phone";
                const href = isEmail
                  ? `mailto:${info.value}`
                  : isPhone
                  ? `tel:${info.value}`
                  : undefined;

                const content = (
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-blue-100 hover:shadow-md transition-all duration-300">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </div>
                );

                return href ? (
                  <a key={index} href={href} className="block" target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/lakku-sahithya-023802248/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all duration-300"
                  >
                    LinkedIn
                  </Button>
                </a>
                <a
                  href="https://github.com/sahithya-lakku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-deep-purple hover:text-white hover:border-deep-purple transition-all duration-300"
                  >
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="border-gray-200 focus:border-electric-blue focus:ring-electric-blue"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-gray-200 focus:border-electric-blue focus:ring-electric-blue"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="border-gray-200 focus:border-electric-blue focus:ring-electric-blue resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-hero-gradient hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


