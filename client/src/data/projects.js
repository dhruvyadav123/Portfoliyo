const projects = [
  {
    id: 1,
    title: 'SafeMarg',
    subtitle: 'Online Flight Booking & Travel Platform',
    description:
      'A live travel-booking platform designed to help customers search and compare affordable domestic and international flights through a fast, secure booking journey.',
    highlights: [
      'Supports flight discovery and fare comparison across leading airlines for domestic and international routes.',
      'Provides secure online payments and instant e-ticket confirmation for a smoother end-to-end booking experience.',
      'Includes web check-in assistance, flexible refund support, travel deals, and dedicated customer-service journeys.',
    ],
    tech: ['Flight Search', 'Fare Comparison', 'Secure Payments', 'E-Tickets', 'Refund Flow', 'Responsive UI'],
    tags: ['Live', 'Travel', 'Booking'],
    live: 'https://www.safemarg.com/',
    badge: 'SM',
  },
  {
    id: 2,
    title: 'CallBee',
    subtitle: 'Live Chat, Audio/Video Call & Host Platform',
    description:
      'A production communication platform connecting users with hosts through paid chat, audio calls, video calls, and live sessions.',
    highlights: [
      'Built backend workflows for users, hosts, agents, and admins, including OTP login, KYC, host availability, coin packages, withdrawals, reports, and support tickets.',
      'Implemented real-time chat and call-status handling with Socket.io, plus Agora/WebRTC channel, token, and UID-based joining flows.',
      'Integrated React Native screens with APIs for login, nearby hosts, chat, calls, wallet, profile, permissions, and notifications.',
    ],
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Agora/WebRTC', 'Razorpay', 'AWS S3'],
    tags: ['Production', 'Realtime', 'Mobile'],
    badge: 'CB',
  },
  {
    id: 3,
    title: 'TamTam Krishi Store',
    subtitle: 'Agriculture E-Commerce Platform',
    description:
      'A mobile-first agriculture marketplace for seeds, fertilizers, tools, and farm supplies with complete product, order, and payment journeys.',
    highlights: [
      'Developed category-based product discovery and responsive listing flows for desktop and mobile users.',
      'Implemented admin, vendor, and customer roles with product management, inventory updates, order tracking, and dashboards.',
      'Integrated payment and order-status APIs and supported production debugging with Vercel, Render, and MongoDB Atlas.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Payments', 'Vercel/Render'],
    tags: ['E-Commerce', 'RBAC', 'Responsive'],
    live: 'https://tamtamkrishistore.com/',
    badge: 'TK',
  },
  {
    id: 4,
    title: 'TokenTraid',
    subtitle: 'Cryptocurrency Investment Marketplace',
    description:
      'A secure digital-token marketplace where users can browse investment listings, review details, and manage investment-related account activity.',
    highlights: [
      'Built investor and admin journeys with secure JWT authentication and role-based access.',
      'Implemented wallet balance updates, deposits, withdrawals, and transaction-history modules.',
      'Integrated REST APIs for dashboards, token-listing review, payment actions, and admin monitoring.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Wallet', 'Payments'],
    tags: ['Marketplace', 'Fintech', 'Full Stack'],
    live: 'https://tokentraid.com/marketplace',
    badge: 'TT',
  },
];

export const projectCountLabel = `${projects.length}`;

export default projects;
