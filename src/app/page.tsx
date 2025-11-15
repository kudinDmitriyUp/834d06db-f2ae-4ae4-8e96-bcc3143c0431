"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BookOpen, Crown, GraduationCap, HelpCircle, Linkedin, Mail, MessageCircle, Plane, PenTool, Sparkles, Star, TrendingUp, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="grid"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Achievements", id: "metrics" },
            { name: "Skills", id: "features" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Alessandro Noya"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Alessandro Noya"
          description="High school junior at Torrey Pines pursuing pilot license, volleyball excellence, and chess mastery. Born in Rio, raised in Rome, now thriving in San Diego."
          tag="Multi-talented Achiever"
          tagIcon={Star}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763226234822-kgtoifag.jpg"
          imageAlt="Alessandro Noya - student, pilot, athlete, chess player"
          buttons={[
            { text: "View Achievements", href: "metrics" },
            { text: "Contact Me", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="At Torrey Pines High School, I balance academics with my passions for aviation, athletics, and strategic thinking. My journey from Rio de Janeiro to Rome to San Diego has shaped my diverse perspective and drive for excellence."
          metrics={[
            { icon: GraduationCap, label: "Academic Excellence", value: "3.8+" },
            { icon: Plane, label: "Pilot Training", value: "80%" },
            { icon: Trophy, label: "Volleyball Wins", value: "25+" },
            { icon: Crown, label: "Chess Rating", value: "1800+" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="My Passions & Skills"
          description="A diverse range of interests and achievements that define who I am"
          tag="Excellence Areas"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            { title: "Academic Excellence", icon: GraduationCap },
            { title: "Aviation Training", icon: Plane },
            { title: "Volleyball Mastery", icon: Trophy },
            { title: "Chess Strategy", icon: Crown },
            { title: "Leadership", icon: Users }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Achievements & Progress"
          description="Key milestones in my academic, athletic, and personal development journey"
          tag="My Stats"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "3.8",
              title: "GPA",
              description: "Maintaining high academic standards at Torrey Pines High School",
              icon: BookOpen
            },
            {
              id: "2",
              value: "80",
              title: "percent",
              description: "Progress toward private pilot license certification",
              icon: Plane
            },
            {
              id: "3",
              value: "25",
              title: "matches",
              description: "Volleyball victories as key team player this season",
              icon: Trophy
            },
            {
              id: "4",
              value: "1800",
              title: "rating",
              description: "Chess rating showcasing strategic thinking abilities",
              icon: Crown
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Others Say"
          description="Feedback from teachers, coaches, and mentors who have witnessed my growth"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "AP History Teacher, Torrey Pines High School",
              testimonial: "Alessandro consistently demonstrates exceptional analytical skills and leadership in class discussions. His multicultural background brings unique perspectives to our historical analyses.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763226239146-hvlgq80j.jpg",
              imageAlt: "Sarah Johnson, AP History Teacher"
            },
            {
              id: "2",
              name: "Coach Mike Rodriguez",
              role: "Varsity Volleyball Coach",
              testimonial: "Alessandro's dedication to volleyball is outstanding. He's not just a skilled player but a team leader who motivates others to perform at their best level.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763226239738-ab7nve1w.jpg",
              imageAlt: "Coach Mike Rodriguez, Volleyball Coach"
            },
            {
              id: "3",
              name: "Master Chen Wei",
              role: "Chess Club Mentor",
              testimonial: "Rarely have I seen such strategic thinking ability in someone so young. Alessandro approaches chess with the maturity and foresight of a seasoned player.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763226240441-3adyogir.jpg",
              imageAlt: "Master Chen Wei, Chess Mentor"
            },
            {
              id: "4",
              name: "Captain Lisa Thompson",
              role: "Flight Instructor, San Diego Aviation",
              testimonial: "Alessandro shows remarkable composure and precision in flight training. His attention to detail and safety consciousness are impressive for a student pilot.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763226240965-waeiu433.jpg",
              imageAlt: "Captain Lisa Thompson, Flight Instructor"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Common questions about my background, achievements, and future plans"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your main academic interests?",
              content: "I'm particularly passionate about history, mathematics, and aviation sciences. My multicultural background has given me a deep appreciation for global perspectives in learning."
            },
            {
              id: "2",
              title: "How do you balance all your activities?",
              content: "Time management and prioritization are key. I maintain a structured schedule that allows me to excel academically while pursuing my passions for volleyball, chess, and aviation."
            },
            {
              id: "3",
              title: "What are your future college plans?",
              content: "I'm considering universities with strong aviation programs and excellent volleyball teams. My goal is to continue developing both my academic and athletic abilities."
            },
            {
              id: "4",
              title: "How has living in different countries influenced you?",
              content: "Growing up in Rio de Janeiro, Rome, and now San Diego has given me adaptability, cultural awareness, and a global mindset that enriches everything I do."
            },
            {
              id: "5",
              title: "What's your ultimate aviation goal?",
              content: "I aspire to become a commercial airline pilot. The precision, responsibility, and technical expertise required in aviation perfectly match my interests and abilities."
            },
            {
              id: "6",
              title: "How did you become interested in chess?",
              content: "I discovered chess in Rome and was immediately drawn to its strategic complexity. It's taught me patience, forward-thinking, and the ability to analyze complex situations."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="My Journey Blog"
          description="Insights from my experiences in academics, athletics, and aviation"
          tag="Blog Posts"
          tagIcon={PenTool}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              category: "Student Life",
              title: "Balancing Excellence: My High School Journey",
              excerpt: "How I manage academics, athletics, and aviation training while maintaining a social life at Torrey Pines High School.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763226241734-4nahe7vd.jpg",
              imageAlt: "High school student life",
              authorName: "Alessandro Noya",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763226234822-kgtoifag.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Aviation",
              title: "First Solo Flight: Lessons from the Sky",
              excerpt: "Reflections on my first solo flight experience and what aviation training has taught me about discipline and precision.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763226242282-bx7ivubo.jpg",
              imageAlt: "Aviation pilot training",
              authorName: "Alessandro Noya",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763226234822-kgtoifag.jpg",
              date: "08 Jan 2025"
            },
            {
              id: "3",
              category: "Sports",
              title: "Volleyball Leadership: More Than Just Wins",
              excerpt: "How volleyball has shaped my leadership skills and taught me the importance of teamwork and perseverance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763226243029-3u10tun0.jpg",
              imageAlt: "Volleyball training",
              authorName: "Alessandro Noya",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763226234822-kgtoifag.jpg",
              date: "02 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="I'd love to connect with fellow students, mentors, or anyone interested in my journey. Whether it's about academics, volleyball, chess, or aviation - let's talk!"
          buttonText="Send Message"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "subject", type: "text", placeholder: "Subject", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about yourself and what you'd like to discuss...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Alessandro Noya"
          copyrightText="© 2025 Alessandro Noya - High School Student & Multi-talented Achiever"
          columns={[
            {
              title: "About",
              items: [
                { label: "My Story", href: "about" },
                { label: "Achievements", href: "metrics" },
                { label: "Skills", href: "features" }
              ]
            },
            {
              title: "Activities",
              items: [
                { label: "Academics", href: "about" },
                { label: "Aviation", href: "metrics" },
                { label: "Volleyball", href: "testimonials" },
                { label: "Chess", href: "features" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact", href: "contact" },
                { label: "Blog", href: "blog" },
                { label: "FAQ", href: "faq" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Mail,
              href: "mailto:alessandro@example.com",
              ariaLabel: "Email Alessandro"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/alessandro-noya",
              ariaLabel: "LinkedIn Profile"
            },
            {
              icon: Mail,
              href: "https://instagram.com/alessandro_noya",
              ariaLabel: "Instagram Profile"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}