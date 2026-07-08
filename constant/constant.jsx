import { Clock, Rocket, Headset, Smile } from "lucide-react";
import { Globe, ShoppingCart, File, Blocks, Wrench, CloudUpload, Gauge, Palette } from "lucide-react";
import { Scissors, Zap, Smartphone, Shield } from "lucide-react";
import { ClipboardCheck, FileText, PenTool, CodeXml, MonitorCheck, Send } from "lucide-react";
import { Phone, MessageSquare, MapPin, MapPinned } from "lucide-react";
import { IoLogoInstagram, IoLogoFacebook , IoLogoLinkedin, IoLogoDribbble } from "react-icons/io5";

import porto1 from "../assets/porto1.png";
import porto2 from "../assets/porto2.mp4";
import porto3 from "../assets/porto3.mp4";
import porto4 from "../assets/porto4.mp4";

 export const navItems = [
   { label: "Home", href: "#home" },
   { label: "Services", href: "#services" },
   { label: "WhyChooseUs", href: "#whychooseus" },
   { label: "Portofolio", href: "#portofolio" },
   { label: "Process", href: "#process" },
   { label: "Contact", href: "#contact" },
 ];

 export const statItems = [
   { logo: <Rocket size={35} />, header: "30+", desc: "Projects Completed", text: "Berbagai jenis website berhasil kami selesaikan." },
   { logo: <Smile size={35} />, header: "98%", desc: "Client Satisfaction", text: "Kepuasan klien adalah prioritas kami." },
   { logo: <Clock size={35} />, header: "2+", desc: "Years Experience", text: "Pengalaman membangun website profesional." },
   { logo: <Headset size={35} />, header: "", desc: "Support After Launch", text: "Kami tetap siap membantu bahkan setelah website selesai." },
 ]

 export const serviceItems = [
   { logo: Globe, title: "Business Website", text: "Website perusahaan yang profesional untuk meningkatkan kredibilitas bisnis Anda." },
   { logo: ShoppingCart, title: "E-Commerce Website", text: "Toko online dengan fitur lengkap, aman, dan mudah dikelola." },
   { logo: File, title: "Landing Page", text: "Halaman khusus yang dirancang untuk meningkatkan konversi dan menarik lebih banyak pelanggan." },
   { logo: Blocks, title: "Saas Website", text: "Website yang dapat membantu dan mengoptimalkan bisnis Anda." },
   { logo: Wrench, title: "Website Maintainance", text: "Perawatan rutin, pembaruan sistem, dan dukungan teknis agar website tetap aman dan stabil." },
   { logo: CloudUpload, title: "Website Deployment", text: "Website siap online dengan proses deployment yang cepat, aman, dan minim kendala." },
   { logo: Gauge, title: "Website Optimization", text: "Optimasi kecepatan, performa, dan SEO agar website bekerja lebih maksimal." },
   { logo: Palette, title: "UI/UX Design", text: "Desain antarmuka yang modern, responsif, dan nyaman digunakan untuk meningkatkan pengalaman pengguna." },
]

export const whyChooseUsItems = [
   { logo: Scissors, title: "Clean Design", text: "Design modern dan elegan yang mencerminkan identitas brand Anda." },
   { logo: Zap, title: "Fast Performance", text: "Website cepat diakses memberikan pengalaman terbaik bagi pengunjung dan pengguna." },
   { logo: Smartphone, title: "Fully Responsive", text: "Tampilan sempurna di semua perangkat, dekstop, tablet, mobile." },
   { logo: Shield, title: "Reliable Support", text: "Support responsif dan siap membantu kapan pun Anda butuhkan." },
]

export const processItems = [
   { logo: ClipboardCheck, number: "01", title: "Discussion", text: "Kita membahas kebutuhan, tujuan, dan detail proyek." },
   { logo: FileText, number: "02", title: "Planning", text: "Menyusun rencana kerja dan strategi yang tepat." },
   { logo: PenTool, number: "03", title: "Design", text: "Membuat design modern yang sesuai dengan brand Anda." },
   { logo: CodeXml, number: "04", title: "Development", text: "Mengembangkan website dengan teknologi terbaik." },
   { logo: MonitorCheck, number: "05", title: "Testing", text: "Pengujian menyeluruh untuk memastikan kualitas." },
   { logo: Send, number: "06", title: "Launch", text: "Website siap online dan siap digunakan." },
]

export const contactItems = [
   { logo: Phone, text: "+62 877-3683-0775" },
   { logo: MessageSquare, text: "alihuang154@gmail.com" },
   { logo: MapPin, text: "Medan, Indonesia" },
   { logo: MapPinned, text: "Mon-Sat. 08.00 - 21.00" },
]

export const iconFooter = [
   { icon: IoLogoFacebook },
   { icon: IoLogoInstagram },
   { icon: IoLogoLinkedin },
   { icon: IoLogoDribbble },
]

export const portofolioItems = [
   { file: porto2, name: "Profit Scope App", category: "Saas Website", link: "https://github.com/BluesZ154/profit-scope-app" },
   { file: porto3, name: "VirtualR", category: "Business Website", link: "https://github.com/BluesZ154/VirtualR-Landing-Page" },
   { file: porto4, name: "Sell Tracker", category: "Saas Website", link: "https://github.com/BluesZ154/Sell-Tracker-App" },
]