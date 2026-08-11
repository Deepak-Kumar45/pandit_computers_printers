/* ============================================================
   PANDIT COMPUTERS & PRINTERS — Service Search Index
   Single source of truth for the site search feature.
   Each entry: name, category, page, anchor id, icon, price, keywords
   ============================================================ */

const SERVICE_INDEX = [
  // ── Printing Services ──────────────────────────────────────
  { name: "Color Printing", category: "Printing", page: "printing-services.html", id: "color-printing", icon: "🎨", price: "₹5/page", keywords: "colour color print prints document" },
  { name: "Black & White Printing", category: "Printing", page: "printing-services.html", id: "bw-printing", icon: "⚫", price: "₹2/page", keywords: "b&w bw black white print document" },
  { name: "Photocopy", category: "Printing", page: "printing-services.html", id: "photocopy", icon: "📑", price: "₹1/page", keywords: "xerox copy copies" },
  { name: "Spiral Binding", category: "Printing", page: "printing-services.html", id: "spiral-binding", icon: "📚", price: "₹30/document", keywords: "binding report thesis project" },
  { name: "Lamination", category: "Printing", page: "printing-services.html", id: "lamination", icon: "🛡️", price: "₹15/sheet", keywords: "laminate plastic cover protect" },
  { name: "Photo Printing", category: "Printing", page: "printing-services.html", id: "photo-printing", icon: "🖼️", price: "₹8/photo", keywords: "photograph picture album" },
  { name: "Banner Printing", category: "Printing", page: "printing-services.html", id: "banner-printing", icon: "🪧", price: "₹25/sq.ft", keywords: "banners shop event signage" },
  { name: "Flex Printing", category: "Printing", page: "printing-services.html", id: "flex-printing", icon: "🏳️", price: "₹20/sq.ft", keywords: "flex hoarding backdrop large format" },
  { name: "Vinyl Printing", category: "Printing", page: "printing-services.html", id: "vinyl-printing", icon: "🎞️", price: "₹35/sq.ft", keywords: "vinyl vehicle wall sticker graphics" },
  { name: "Sticker Printing", category: "Printing", page: "printing-services.html", id: "sticker-printing", icon: "🏷️", price: "₹3/sticker", keywords: "stickers labels branding packaging" },
  { name: "ID Card Printing", category: "Printing", page: "printing-services.html", id: "id-card-printing", icon: "🪪", price: "₹40/card", keywords: "id card identity card pvc school office employee" },
  { name: "Certificate Printing", category: "Printing", page: "printing-services.html", id: "certificate-printing", icon: "🎓", price: "₹20/certificate", keywords: "certificate award academic corporate" },
  { name: "Wedding Cards", category: "Printing", page: "printing-services.html", id: "wedding-cards", icon: "💌", price: "₹15/card", keywords: "wedding invitation card marriage shaadi" },
  { name: "Visiting Cards", category: "Printing", page: "printing-services.html", id: "visiting-cards", icon: "📇", price: "₹199/box of 100", keywords: "visiting card business card namecard" },
  { name: "Brochures", category: "Printing", page: "printing-services.html", id: "brochures", icon: "📰", price: "₹10/piece", keywords: "brochure trifold bifold marketing" },
  { name: "Flyers", category: "Printing", page: "printing-services.html", id: "flyers", icon: "📃", price: "₹3/piece", keywords: "flyer pamphlet advertisement promotion" },
  { name: "Posters", category: "Printing", page: "printing-services.html", id: "posters", icon: "🖼️", price: "₹50/poster", keywords: "poster wall display large" },
  { name: "Book Printing", category: "Printing", page: "printing-services.html", id: "book-printing", icon: "📖", price: "₹150/book", keywords: "book booklet print bind" },
  { name: "Custom Printing", category: "Printing", page: "printing-services.html", id: "custom-printing", icon: "✨", price: "Quote on request", keywords: "custom special unique printing job" },

  // ── Computer Services ───────────────────────────────────────
  { name: "Online Form Filling", category: "Computer", page: "computer-services.html", id: "online-form-filling", icon: "📝", price: "₹50/form", keywords: "form fill online application" },
  { name: "Aadhaar Update Assistance", category: "Computer", page: "computer-services.html", id: "aadhaar-update", icon: "📋", price: "₹100/service", keywords: "aadhar aadhaar card update correction address enrollment uidai" },
  { name: "PAN Card Services", category: "Computer", page: "computer-services.html", id: "pan-card", icon: "🪪", price: "₹150/application", keywords: "pan card tax id nsdl" },
  { name: "Resume Creation", category: "Computer", page: "computer-services.html", id: "resume-creation", icon: "📄", price: "₹200/resume", keywords: "resume cv job application biodata" },
  { name: "Document Typing", category: "Computer", page: "computer-services.html", id: "document-typing", icon: "⌨️", price: "₹10/page", keywords: "typing type document letter report" },
  { name: "Scanning", category: "Computer", page: "computer-services.html", id: "scanning", icon: "🖨️", price: "₹5/page", keywords: "scan document pdf scanner" },
  { name: "Passport Size Photo", category: "Computer", page: "computer-services.html", id: "passport-photo", icon: "📸", price: "₹30/set of 8", keywords: "passport photo id photo photograph" },
  { name: "Passport Assistance", category: "Computer", page: "computer-services.html", id: "passport-assistance", icon: "🛂", price: "₹250/application", keywords: "passport application travel visa" },
  { name: "Online Bill Payment", category: "Computer", page: "computer-services.html", id: "bill-payment", icon: "💳", price: "₹20/transaction", keywords: "bill payment electricity water gas mobile recharge" },
  { name: "Railway Ticket Booking", category: "Computer", page: "computer-services.html", id: "railway-booking", icon: "🚆", price: "₹40/ticket", keywords: "train ticket irctc railway booking" },
  { name: "Flight Booking", category: "Computer", page: "computer-services.html", id: "flight-booking", icon: "✈️", price: "₹100/ticket", keywords: "flight airplane air ticket booking" },
  { name: "Bus Ticket Booking", category: "Computer", page: "computer-services.html", id: "bus-booking", icon: "🚌", price: "₹30/ticket", keywords: "bus ticket booking travel" },
  { name: "Government Form Submission", category: "Computer", page: "computer-services.html", id: "govt-form-submission", icon: "🏛️", price: "₹80/submission", keywords: "government form submit portal official" },
  { name: "Email Creation", category: "Computer", page: "computer-services.html", id: "email-creation", icon: "📧", price: "₹50/account", keywords: "email gmail account setup new" },
  { name: "PDF Editing", category: "Computer", page: "computer-services.html", id: "pdf-editing", icon: "🧩", price: "₹20/file", keywords: "pdf edit merge split compress" },
  { name: "Image Editing", category: "Computer", page: "computer-services.html", id: "image-editing", icon: "🖌️", price: "₹40/image", keywords: "photo edit retouch background remove" },
  { name: "Data Entry", category: "Computer", page: "computer-services.html", id: "data-entry", icon: "🗃️", price: "₹5/100 entries", keywords: "data entry typing excel records" },
  { name: "Internet Browsing", category: "Computer", page: "computer-services.html", id: "internet-browsing", icon: "🌐", price: "₹10/15 min", keywords: "internet browsing research download" },
  { name: "Software Installation", category: "Computer", page: "computer-services.html", id: "software-installation", icon: "💿", price: "₹100/software", keywords: "software install app program setup" },
  { name: "Printer Setup", category: "Computer", page: "computer-services.html", id: "printer-setup", icon: "🖨️", price: "₹150/setup", keywords: "printer setup install driver configure" },
  { name: "Computer Repair", category: "Computer", page: "computer-services.html", id: "computer-repair", icon: "💻", price: "₹299/visit", keywords: "computer pc repair fix hardware slow" },
  { name: "Laptop Repair", category: "Computer", page: "computer-services.html", id: "laptop-repair", icon: "🔧", price: "₹349/visit", keywords: "laptop repair fix screen battery keyboard" },
  { name: "Virus Removal", category: "Computer", page: "computer-services.html", id: "virus-removal", icon: "🦠", price: "₹250/service", keywords: "virus malware removal antivirus clean" },
  { name: "Windows Installation", category: "Computer", page: "computer-services.html", id: "windows-installation", icon: "🪟", price: "₹400/install", keywords: "windows os install format reinstall" },
  { name: "MS Office Installation", category: "Computer", page: "computer-services.html", id: "msoffice-installation", icon: "📊", price: "₹300/install", keywords: "ms office word excel powerpoint install activation" },
];
