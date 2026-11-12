// FRONTEND SAMPLE DATA ONLY — replace with backend / CMS data later.
// No real blog articles, FAQ content or emirate counts are fetched from a
// server yet; these are short original excerpts for the demo frontend.
const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`

export const EMIRATES = [
  { name: 'Abu Dhabi', count: '12,400+ ads', image: img('photo-1512632578888-169bbbc64f33'), links: ['Residential', 'Commercial', 'Rooms For Rent', 'Monthly Short Term', 'Daily Short Term'] },
  { name: 'Ajman', count: '3,100+ ads', image: img('photo-1512453979798-5ea266f8880c'), links: ['Residential', 'Commercial', 'Rooms For Rent', 'Monthly Short Term', 'Daily Short Term'] },
  { name: 'Dubai', count: '48,200+ ads', image: img('photo-1512453979798-5ea266f8880c'), links: ['Residential', 'Commercial', 'Rooms For Rent', 'Monthly Short Term', 'Daily Short Term'] },
  { name: 'Fujairah', count: '1,800+ ads', image: img('photo-1507525428034-b723cf961d3e'), links: ['Residential', 'Commercial', 'Rooms For Rent', 'Monthly Short Term', 'Daily Short Term'] },
  { name: 'Ras al-Khaimah', count: '2,600+ ads', image: img('photo-1506905925346-21bda4d32df4'), links: ['Residential', 'Commercial', 'Rooms For Rent', 'Monthly Short Term', 'Daily Short Term'] },
  { name: 'Sharjah', count: '9,700+ ads', image: img('photo-1449824913935-59a10b8d2000'), links: ['Residential', 'Commercial', 'Rooms For Rent', 'Monthly Short Term', 'Daily Short Term'] },
  { name: 'Umm al-Quwain', count: '900+ ads', image: img('photo-1507525428034-b723cf961d3e'), links: ['Residential', 'Commercial', 'Rooms For Rent', 'Monthly Short Term', 'Daily Short Term'] },
]

export const CATEGORY_META = [
  { name: 'Motors', icon: 'Car', tagline: 'Cars, bikes & parts' },
  { name: 'Property', icon: 'Building2', tagline: 'Rent & buy homes' },
  { name: 'Jobs', icon: 'Briefcase', tagline: 'Careers in the UAE' },
  { name: 'Mobiles & Tablets', icon: 'Smartphone', tagline: 'Phones & tablets' },
  { name: 'Electronics', icon: 'Cpu', tagline: 'Gadgets & devices' },
  { name: 'Furniture & Home Garden', icon: 'Sofa', tagline: 'Home & garden' },
  { name: 'Services', icon: 'Wrench', tagline: 'Experts & repairs' },
  { name: 'Community', icon: 'Users', tagline: 'Classes & groups' },
]

export const BLOG_POSTS = [
  { id: 1, title: "Welcome to Dubaiza: UAE's Fastest Growing Classifieds Marketplace", category: 'Marketplace', readTime: '4 min read', image: img('photo-1512453979798-5ea266f8880c'), excerpt: 'What makes a classifieds marketplace work in the UAE — and how Dubaiza is built around trust, speed and local search.' },
  { id: 2, title: 'How to Sell Faster in UAE (Ultimate Guide)', category: 'Selling', readTime: '6 min read', image: img('photo-1441986300917-64674bd600d8'), excerpt: 'Good photos, honest prices and fast replies: the simple habits that help a listing sell in days, not weeks.' },
  { id: 3, title: 'How to Buy the Best Used Car in UAE – Complete 2026 Guide', category: 'Motors', readTime: '8 min read', image: img('photo-1503376780353-7e6692767b70'), excerpt: 'Check the history, inspect the car in daylight, and know the real market price before you make an offer.' },
  { id: 4, title: 'How to Get a Job in Dubai in 2026 for Pakistanis', category: 'Jobs', readTime: '7 min read', image: img('photo-1521737604893-d14cc237f11d'), excerpt: 'A practical, step-by-step look at CVs, visas, interviews and the roles employers in Dubai are hiring for now.' },
  { id: 5, title: 'Top 10 Things to Buy Used in Dubai & Save Money', category: 'Buying', readTime: '5 min read', image: img('photo-1441986300917-64674bd600d8'), excerpt: 'Furniture, phones and baby gear are often great value second-hand — here is what to check before you buy.' },
  { id: 6, title: 'December 2025 Petrol Prices in the UAE', category: 'Motors', readTime: '3 min read', image: img('photo-1503376780353-7e6692767b70'), excerpt: 'A quick look at the latest monthly fuel prices and what they mean for drivers and sellers.' },
  { id: 7, title: 'Everything You Need to Know About Taxis in Dubai (2025)', category: 'Community', readTime: '5 min read', image: img('photo-1449824913935-59a10b8d2000'), excerpt: 'Fares, apps, airport pickups and the new driverless options — getting around Dubai without a car.' },
  { id: 8, title: 'Popular buildings to buy penthouses in Abu Dhabi', category: 'Property', readTime: '6 min read', image: img('photo-1512917774080-9991f1c4c750'), excerpt: 'Views, amenities and location: what to look for in a penthouse in the capital.' },
  { id: 9, title: 'Understanding Different Steering Wheel Types for Your Car', category: 'Motors', readTime: '4 min read', image: img('photo-1503376780353-7e6692767b70'), excerpt: 'Size, grip and controls all change how a car feels — a simple guide for buyers.' },
  { id: 10, title: 'New vs Used Car – Which One Saves More Money?', category: 'Motors', readTime: '6 min read', image: img('photo-1605559424843-9e4c228bf1c2'), excerpt: 'Depreciation, warranty and running costs compared, so you can decide with real numbers.' },
  { id: 11, title: 'UAE Petrol Prices: Grades, Trends & Money-Saving Tips', category: 'Motors', readTime: '4 min read', image: img('photo-1503376780353-7e6692767b70'), excerpt: 'Which grade your car needs, how prices move month to month, and easy ways to spend less on fuel.' },
  { id: 12, title: 'Defects Liability Period in Real Estate Explained', category: 'Property', readTime: '5 min read', image: img('photo-1600596542815-ffad4c1539a9'), excerpt: 'What the defects liability period covers after handover, and what to report before it ends.' },
  { id: 13, title: 'Dubai Driverless Taxis Launch March 2026', category: 'Community', readTime: '3 min read', image: img('photo-1449824913935-59a10b8d2000'), excerpt: 'Driverless taxis are coming to Dubai — where they will run first and how to use them.' },
  { id: 14, title: 'Dubaiza.com – UAE Ka Sabse Easy Online Marketplace', category: 'Marketplace', readTime: '4 min read', image: img('photo-1512453979798-5ea266f8880c'), excerpt: 'Buying and selling in the UAE, made simple — post an ad, find a buyer, and meet safely.' },
  { id: 15, title: 'How to Sell Your Car in Dubai in 24 Hours: 5 Proven Tips', category: 'Motors', readTime: '5 min read', image: img('photo-1605559424843-9e4c228bf1c2'), excerpt: 'Good photos, a fair price and fast replies: five habits that help a car sell in a day.' },
]

export const FAQS = [
  { q: 'What is Dubaiza?', a: 'Dubaiza is a UAE classifieds marketplace where people can buy and sell cars, homes, phones, furniture, services and more — and find jobs across the Emirates.' },
  { q: 'Is Dubaiza free to use?', a: 'Yes, browsing ads and posting a basic ad is free in this demo. Paid boosts such as Spotlight are shown as demo features until a backend and payments are added.' },
  { q: 'How do I post an ad?', a: 'Create a demo account, tap Post Ad, add a title, category, city, price and description, and publish. Your ad appears locally in this browser only.' },
  { q: 'Is Dubaiza safe?', a: 'Meet sellers in a public place, inspect the item before paying, and never share OTP codes or pay in advance for an item you have not seen.' },
  { q: 'How do I contact a seller?', a: 'Open a listing and use Call or Chat. In this demo, chat stays in this browser tab — a real version needs a backend messaging service.' },
  { q: 'Can I sell my car on Dubaiza?', a: 'Yes. Choose the Motors category, add clear photos, the year, mileage and full specs, and set a realistic price based on similar listings.' },
  { q: 'How do I find a job in Dubai?', a: 'Use the Jobs category, filter by city, and apply with a clear CV. This demo shows sample jobs only — real applications need a backend.' },
  { q: 'What payment methods can I use?', a: 'Payment is arranged directly between buyer and seller in this demo. Always use a safe method and keep proof of payment.' },
  { q: 'Can I edit or delete my ad?', a: 'In a real version, yes — from your profile. In this demo, posted ads live only in this browser tab, so use the same browser to see them.' },
  { q: 'Does Dubaiza cover all Emirates?', a: 'Yes — Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras al-Khaimah and Umm al-Quwain, with a city filter on every search.' },
  { q: 'How do I report a suspicious listing?', a: 'Use the contact options in the footer to report a listing. In a real version, each listing would also have its own report button.' },
  { q: 'Who can I contact for help?', a: 'Email hello@dubaiza.com or call +92-3475076194. The footer has the full contact details.' },
]
