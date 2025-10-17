import { BarChart2, FileText, LayoutDashboard, Mail, Plus, Sparkles, Users } from "lucide-react";

export const FEATURES = [
    {
        icon: Sparkles,
        title: "AI-Powered Invoicing",
        description: "Paste any text, email, or reeipt, and let our AI generate a professional invoice for you in seconds.",
    },
    {
        icon: BarChart2,
        title: "AI-Powered Dashboard & Analytics",
        description: "Get valuable insights into your invoicing patterns, payment history, and client behavior with our AI-driven analytics.",
    },
    {
        icon: Mail,
        title: "Smart Payment Reminders",
        description: "Automatically send personalized payment reminders to your clients, helping you get paid faster and improve cash flow.",
    },
    {
        icon: FileText,
        title: "Easy Invoice Management",
        description: "Effortlessly create, edit, and manage your invoices with our user-friendly interface."
    }
];

export const TESTIMONIALS = [
    {
        quote: "Invoicely has transformed the way I handle invoicing. The AI-powered features save me so much time and effort.",
        author: "Jane Doe",
        title: "Freelancer",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "The AI dashboard provides insights I never knew I needed. It's like having a financial advisor at my fingertips!",
        author: "John Smith",
        title: "Small Business Owner",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        quote: "Invoicely's smart payment reminders have made a huge difference in my cash flow. I can't recommend it enough!",
        author: "Alice Johnson",
        title: "Graphic Designer",
        avatar: "https://randomuser.me/api/portraits/women/46.jpg"
    }
];

export const FAQS = [
    {
        question: "How does the AI-powered invoicing work?",
        answer: "Simply paste any text, email, or receipt, and our AI will analyze the content to generate a professional invoice automatically."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a free trial so you can test our features before committing."
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can change your plan at any time from your account settings."
    },
    {
        question: "What is your cancellation policy?",
        answer: "We offer a hassle-free cancellation policy. You can cancel your subscription at any time without any penalties."
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "Yes, you can add notes, payment terms, and even attach files to your invoices."
    },
    {
        question: "How does billing work?",
        answer: "Billing is based on a subscription model. You can choose a plan that fits your needs and budget."
    }
];

// navigation items configuration
export const NAVIGATION_MENU = [
    { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "invoices", name: "Invoices", icon: FileText },
    { id: "invoices/new", name: "Create Invoice", icon: Plus },
    { id: "profile", name: "Profile", icon: Users },
];