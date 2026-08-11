// ─── SERVICE DETAIL DATA ─────────────────────────────────────────────────────
const serviceData = {

  // ── BASIC ──────────────────────────────────────────────────────────────────
  "color-print": {
    name: "Color Print", category: "Basic Services", categorySlug: "basic",
    icon: "🎨", tag: "Most Popular",
    desc: "High-resolution color printing for documents, photos, presentations, and design work. Using our Konica Minolta 4070 digital press, we deliver sharp, vibrant prints that accurately reproduce your colors.",
    features: ["All paper sizes — A4, A3, A5, Legal", "Up to 70 pages per minute", "Premium photo-grade paper available", "Glossy & matte paper options", "Bulk order discounts", "Same-day service available"],
    turnaround: "10–30 minutes", startingPrice: "₹5/page",
    images: ["🎨","🖨️","📄","✨"],
    related: ["photocopy","printout","lamination","photo-print"]
  },
  "photocopy": {
    name: "Photocopy", category: "Basic Services", categorySlug: "basic",
    icon: "📑", tag: "Quick Service",
    desc: "Fast, accurate photocopies for documents, books, certificates, and more. Single-sided or double-sided in any quantity.",
    features: ["A4, A3 & legal size", "Single & double-sided", "Enlarge or reduce options", "Bulk quantity available", "Instant service", "Clear crisp output"],
    turnaround: "Instant", startingPrice: "₹1/page",
    images: ["📑","📄","📋","🗂️"],
    related: ["color-print","printout","scanning","lamination"]
  },
  "printout": {
    name: "Printout", category: "Basic Services", categorySlug: "basic",
    icon: "🖨️", tag: "Everyday Service",
    desc: "B&W and color printouts in all standard sizes. Bring your file on a USB, email it to us, or share via WhatsApp.",
    features: ["B&W & color options", "A4, A3, A5, legal sizes", "USB, email & WhatsApp accepted", "Same-day service", "Bulk discounts", "Photo paper available"],
    turnaround: "5–15 minutes", startingPrice: "₹2/page",
    images: ["🖨️","📄","📋","🗃️"],
    related: ["color-print","photocopy","scanning","lamination"]
  },
  "lamination": {
    name: "Lamination", category: "Basic Services", categorySlug: "basic",
    icon: "🛡️", tag: "Protective Finish",
    desc: "Protective lamination for certificates, ID cards, menus, photos and important documents. Gloss & matte finish available.",
    features: ["Gloss & matte finish", "A4, A5 & ID card sizes", "Tear & water resistant", "Same-day service", "Bulk orders welcome", "Premium quality film"],
    turnaround: "15–30 minutes", startingPrice: "₹15/sheet",
    images: ["🛡️","🪪","📄","✨"],
    related: ["color-print","id-card","visiting-card","scanning"]
  },
  "form-photo-print": {
    name: "Online Form Photo Print", category: "Basic Services", categorySlug: "basic",
    icon: "🖼️", tag: "Government Forms",
    desc: "Exact size photos for Aadhaar, PAN, passport, admit cards and all government forms. Proper background and dimensions as per specifications.",
    features: ["Aadhaar & PAN card size", "Passport size (35x45mm)", "White & coloured backgrounds", "Printed in sets of 6 or 8", "Same-day service", "Digital copy also provided"],
    turnaround: "10 minutes", startingPrice: "₹20/set",
    images: ["🖼️","📸","🪪","📋"],
    related: ["passport-size-photo","aadhaar-update","pan-card","scanning"]
  },
  "passport-size-photo": {
    name: "Passport Size Photo", category: "Basic Services", categorySlug: "basic",
    icon: "📸", tag: "Instant Click & Print",
    desc: "Professional passport and ID-size photo clicking and printing on the spot. Proper lighting, background, and dimensions guaranteed.",
    features: ["Studio-quality lighting", "White & blue backgrounds", "Multiple sizes available", "Printed in sets", "Digital copy on request", "Same-day service"],
    turnaround: "10 minutes", startingPrice: "₹30/set of 8",
    images: ["📸","🖼️","🪪","✨"],
    related: ["form-photo-print","aadhaar-update","pan-card","passport-assistance"]
  },
  "scanning": {
    name: "Scanning", category: "Basic Services", categorySlug: "basic",
    icon: "🖨️", tag: "Digital Copy",
    desc: "High-quality document and photo scanning, saved to PDF or JPG. Share via WhatsApp, email or get on USB.",
    features: ["High resolution scanning", "PDF & image output", "WhatsApp / email delivery", "A4 & A3 documents", "Color & B&W scanning", "Multi-page PDF support"],
    turnaround: "5–10 minutes", startingPrice: "₹5/page",
    images: ["🖨️","📄","📋","💾"],
    related: ["photocopy","color-print","pdf-editing","document-typing"]
  },

  // ── COMPUTER ───────────────────────────────────────────────────────────────
  "aadhaar-update": {
    name: "Aadhaar Update Assistance", category: "Computer Services", categorySlug: "computer",
    icon: "📋", tag: "Govt. Specialist",
    desc: "Complete assistance for Aadhaar card updates — name correction, address change, mobile number linking, date of birth update, and new enrollment.",
    features: ["Name & address correction", "Mobile number linking", "Date of birth update", "New enrollment assistance", "Biometric update guidance", "Document preparation help"],
    turnaround: "15–30 minutes", startingPrice: "₹100/service",
    images: ["📋","🪪","🏛️","📝"],
    related: ["pan-card","passport-assistance","form-photo-print","govt-form-submission"]
  },
  "pan-card": {
    name: "PAN Card Services", category: "Computer Services", categorySlug: "computer",
    icon: "🪪", tag: "Tax ID",
    desc: "New PAN card applications and corrections handled start to finish. We prepare your form, upload documents, and track the application for you.",
    features: ["New PAN application", "Lost PAN card reprint", "Name/DOB correction", "Document preparation", "Application tracking", "Physical & e-PAN both"],
    turnaround: "30–45 minutes", startingPrice: "₹150/application",
    images: ["🪪","📋","🏛️","📝"],
    related: ["aadhaar-update","passport-assistance","form-photo-print","govt-form-submission"]
  },
  "pc-repair": {
    name: "PC Repair", category: "Computer Services", categorySlug: "computer",
    icon: "💻", tag: "Same-Day",
    desc: "Complete desktop computer diagnosis and repair — hardware faults, slow performance, boot issues, display problems and more.",
    features: ["Free initial diagnosis", "Hardware fault detection", "RAM & storage upgrade", "Power supply repair", "Display & port issues", "Same-day service for most issues"],
    turnaround: "Same day – 2 days", startingPrice: "₹299/visit",
    images: ["💻","🔧","⚙️","🖥️"],
    related: ["laptop-repair","virus-removal","windows-installation","software-installation"]
  },
  "laptop-repair": {
    name: "Laptop Repair", category: "Computer Services", categorySlug: "computer",
    icon: "🔧", tag: "Expert Service",
    desc: "Expert laptop repair covering screens, keyboards, batteries, charging ports, hinges and more. All brands serviced.",
    features: ["Screen replacement", "Keyboard & touchpad repair", "Battery replacement", "Charging port fix", "Hinge & body repair", "All brands supported"],
    turnaround: "Same day – 3 days", startingPrice: "₹349/visit",
    images: ["🔧","💻","⚙️","🖥️"],
    related: ["pc-repair","virus-removal","windows-installation","software-installation"]
  },
  "virus-removal": {
    name: "Virus Removal", category: "Computer Services", categorySlug: "computer",
    icon: "🦠", tag: "Deep Clean",
    desc: "Complete malware and virus removal with system performance optimization. We clean your PC, install protection and tune up performance.",
    features: ["Full system scan", "Malware & spyware removal", "Antivirus installation", "Startup optimization", "Performance tuning", "Data safety assured"],
    turnaround: "2–4 hours", startingPrice: "₹250/service",
    images: ["🦠","💻","🛡️","⚙️"],
    related: ["pc-repair","laptop-repair","windows-installation","software-installation"]
  },
  "windows-installation": {
    name: "Windows Installation", category: "Computer Services", categorySlug: "computer",
    icon: "🪟", tag: "Licensed",
    desc: "Fresh Windows OS installation with all drivers, updates and essential software. Data backup included before formatting.",
    features: ["Windows 10 & 11 available", "All drivers installed", "Data backup before format", "Essential software setup", "Activation included", "Performance optimized"],
    turnaround: "2–4 hours", startingPrice: "₹400/install",
    images: ["🪟","💻","⚙️","✅"],
    related: ["ms-office-installation","software-installation","virus-removal","pc-repair"]
  },
  "ms-office-installation": {
    name: "MS Office Installation", category: "Computer Services", categorySlug: "computer",
    icon: "📊", tag: "Licensed",
    desc: "Licensed Microsoft Office installation and activation — Word, Excel, PowerPoint, Outlook and more.",
    features: ["MS Office 2019 / 2021", "Full activation included", "Word, Excel, PowerPoint", "Outlook & Teams setup", "All editions available", "Tutorial on request"],
    turnaround: "30–60 minutes", startingPrice: "₹300/install",
    images: ["📊","💻","📝","✅"],
    related: ["windows-installation","software-installation","pc-repair","laptop-repair"]
  },
  "software-installation": {
    name: "Software Installation", category: "Computer Services", categorySlug: "computer",
    icon: "💿", tag: "Any Software",
    desc: "Installation of any licensed software on your laptop or desktop. Bring your license key or we'll help you source it.",
    features: ["Any licensed software", "Driver installation", "Compatibility check", "Configuration & setup", "All brands supported", "Home visit available"],
    turnaround: "30–90 minutes", startingPrice: "₹100/software",
    images: ["💿","💻","⚙️","✅"],
    related: ["windows-installation","ms-office-installation","pc-repair","virus-removal"]
  },
  "printer-setup": {
    name: "Printer Setup", category: "Computer Services", categorySlug: "computer",
    icon: "🖨️", tag: "Network Ready",
    desc: "Complete printer installation, driver setup, and network/WiFi configuration for home and office printers.",
    features: ["All brands supported", "USB & WiFi setup", "Driver installation", "Test print included", "Network printer config", "Mobile print setup"],
    turnaround: "30–60 minutes", startingPrice: "₹150/setup",
    images: ["🖨️","💻","🔧","✅"],
    related: ["software-installation","pc-repair","laptop-repair","scanning"]
  },
  "resume-creation": {
    name: "Resume Creation", category: "Computer Services", categorySlug: "computer",
    icon: "📄", tag: "Job-Ready",
    desc: "Professional, ATS-friendly resume design and writing. Modern templates that help you stand out and get shortlisted.",
    features: ["Professional templates", "ATS-friendly format", "Custom content writing", "PDF & Word output", "LinkedIn summary help", "Same-day delivery"],
    turnaround: "1–2 hours", startingPrice: "₹200/resume",
    images: ["📄","✅","📝","💼"],
    related: ["document-typing","pdf-editing","image-editing","data-entry"]
  },
  "document-typing": {
    name: "Document Typing", category: "Computer Services", categorySlug: "computer",
    icon: "⌨️", tag: "Accurate & Fast",
    desc: "Fast, accurate typing services for letters, reports, applications and official documents in Hindi & English.",
    features: ["Hindi & English typing", "Government letter format", "Application drafting", "Formatted documents", "PDF & Word output", "Same-day service"],
    turnaround: "30 min – 2 hours", startingPrice: "₹10/page",
    images: ["⌨️","📝","📄","✅"],
    related: ["resume-creation","pdf-editing","scanning","data-entry"]
  },
  "passport-assistance": {
    name: "Passport Assistance", category: "Computer Services", categorySlug: "computer",
    icon: "🛂", tag: "Step-by-Step Help",
    desc: "Complete guidance for new passport applications, renewal, and Tatkal — from form filling to appointment booking.",
    features: ["New application help", "Tatkal & renewal both", "Document checklist", "Online form filling", "Appointment booking", "Status tracking"],
    turnaround: "1–2 hours", startingPrice: "₹250/application",
    images: ["🛂","📋","🏛️","✅"],
    related: ["pan-card","aadhaar-update","form-photo-print","govt-form-submission"]
  },
  "online-bill-payment": {
    name: "Online Bill Payment", category: "Computer Services", categorySlug: "computer",
    icon: "💳", tag: "Quick Pay",
    desc: "Electricity, water, gas, mobile recharge and other utility bill payments — done quickly and reliably.",
    features: ["Electricity bill payment", "Water & gas bills", "Mobile recharge", "DTH recharge", "Insurance premium", "Instant confirmation"],
    turnaround: "5–10 minutes", startingPrice: "₹20/transaction",
    images: ["💳","📱","⚡","✅"],
    related: ["railway-ticket-booking","flight-booking","internet-browsing","email-creation"]
  },
  "railway-ticket-booking": {
    name: "Railway Ticket Booking", category: "Computer Services", categorySlug: "computer",
    icon: "🚆", tag: "IRCTC Expert",
    desc: "Hassle-free train ticket booking on IRCTC. Tatkal, general, and sleeper class — all managed for you.",
    features: ["All train classes", "Tatkal booking", "IRCTC account help", "PNR confirmation", "Cancellation support", "Group bookings"],
    turnaround: "15–20 minutes", startingPrice: "₹40/ticket",
    images: ["🚆","🎫","✅","📱"],
    related: ["flight-booking","online-bill-payment","govt-form-submission","internet-browsing"]
  },
  "flight-booking": {
    name: "Flight Booking", category: "Computer Services", categorySlug: "computer",
    icon: "✈️", tag: "Best Fares",
    desc: "Domestic flight ticket booking assistance at the best available fares. All airlines covered.",
    features: ["All domestic airlines", "Best fare comparison", "Seat selection help", "Booking confirmation", "Cancellation guidance", "Group bookings welcome"],
    turnaround: "20–30 minutes", startingPrice: "₹100/ticket",
    images: ["✈️","🎫","📱","✅"],
    related: ["railway-ticket-booking","online-bill-payment","internet-browsing","passport-assistance"]
  },
  "govt-form-submission": {
    name: "Govt. Form Submission", category: "Computer Services", categorySlug: "computer",
    icon: "🏛️", tag: "Specialist",
    desc: "End-to-end help submitting forms on any official government portal — income certificate, caste certificate, RTI, and more.",
    features: ["All government portals", "Document upload help", "Form verification", "Application tracking", "Hindi & English forms", "Receipt & printout"],
    turnaround: "30–60 minutes", startingPrice: "₹80/submission",
    images: ["🏛️","📋","✅","🖨️"],
    related: ["aadhaar-update","pan-card","passport-assistance","form-photo-print"]
  },
  "email-creation": {
    name: "Email Creation", category: "Computer Services", categorySlug: "computer",
    icon: "📧", tag: "Easy Setup",
    desc: "New Gmail or other email account setup with basic usage training — perfect for first-time users.",
    features: ["Gmail & Outlook setup", "Profile setup included", "Password management tips", "Basic email training", "Mobile app setup", "Recovery options configured"],
    turnaround: "20–30 minutes", startingPrice: "₹50/account",
    images: ["📧","📱","✅","💻"],
    related: ["internet-browsing","document-typing","software-installation","data-entry"]
  },
  "pdf-editing": {
    name: "PDF Editing", category: "Computer Services", categorySlug: "computer",
    icon: "🧩", tag: "File Management",
    desc: "Merge, split, compress, convert or edit PDF files quickly and accurately.",
    features: ["Merge multiple PDFs", "Split large PDFs", "Compress file size", "PDF to Word/Excel", "Image to PDF", "Password protection"],
    turnaround: "10–20 minutes", startingPrice: "₹20/file",
    images: ["🧩","📄","✅","💾"],
    related: ["document-typing","image-editing","scanning","data-entry"]
  },
  "image-editing": {
    name: "Image Editing", category: "Computer Services", categorySlug: "computer",
    icon: "🖌️", tag: "Photo Touch-up",
    desc: "Photo retouching, background removal, resizing, and basic editing for personal and professional use.",
    features: ["Background removal", "Photo enhancement", "Resizing & cropping", "Brightness & color fix", "Watermark addition", "WhatsApp / print size"],
    turnaround: "15–30 minutes", startingPrice: "₹40/image",
    images: ["🖌️","📸","✅","🎨"],
    related: ["pdf-editing","document-typing","resume-creation","form-photo-print"]
  },
  "data-entry": {
    name: "Data Entry", category: "Computer Services", categorySlug: "computer",
    icon: "🗃️", tag: "Bulk Orders",
    desc: "Accurate, fast data entry for businesses, schools and individuals — Excel, Word or any format.",
    features: ["Excel & Word data entry", "Form data digitization", "High accuracy assured", "Bulk orders welcome", "Confidential handling", "Quick turnaround"],
    turnaround: "Depends on volume", startingPrice: "₹5/100 entries",
    images: ["🗃️","📊","✅","💻"],
    related: ["document-typing","pdf-editing","resume-creation","scanning"]
  },
  "internet-browsing": {
    name: "Internet Browsing", category: "Computer Services", categorySlug: "computer",
    icon: "🌐", tag: "Assisted Access",
    desc: "Assisted internet access for research, job applications, form submissions and file downloads.",
    features: ["Fast broadband access", "Printing from browser", "Form submission help", "File download & save", "Video calling guidance", "Private & safe"],
    turnaround: "Per requirement", startingPrice: "₹10/15 min",
    images: ["🌐","💻","✅","📱"],
    related: ["email-creation","online-bill-payment","railway-ticket-booking","govt-form-submission"]
  },

  // ── VISITING CARDS ─────────────────────────────────────────────────────────
  "visiting-card": {
    name: "Visiting Card", category: "Visiting Cards", categorySlug: "visiting-cards",
    icon: "📇", tag: "Best Seller",
    desc: "Standard visiting cards with sharp print on quality card stock. Ideal for everyday business networking.",
    features: ["Standard 3.5×2 inch size", "90 GSM – 350 GSM options", "Color & B&W available", "Minimum 100 cards", "Ready in 1–2 hours", "Bulk discounts"],
    turnaround: "1–2 hours", startingPrice: "₹199/100 cards",
    images: ["📇","🎨","✅","📦"],
    related: ["sbs-visiting-card","gloss-visiting-card","matt-finish-visiting-card","velvet-visiting-card"]
  },
  "sbs-visiting-card": {
    name: "SBS Visiting Card", category: "Visiting Cards", categorySlug: "visiting-cards",
    icon: "🃏", tag: "Premium Board",
    desc: "Solid Bleach Sulfate board visiting cards — ultra-white, bright and crisp. Perfect for clean, modern designs.",
    features: ["SBS premium board", "Pure white surface", "Ultra-crisp print", "Matte & gloss finish", "Custom sizes available", "Upto 700 GSM"],
    turnaround: "2–4 hours", startingPrice: "₹299/100 cards",
    images: ["🃏","📇","✅","🎨"],
    related: ["visiting-card","gloss-visiting-card","matt-finish-visiting-card","premium-visiting-card"]
  },
  "gloss-visiting-card": {
    name: "Gloss Visiting Card", category: "Visiting Cards", categorySlug: "visiting-cards",
    icon: "✨", tag: "High Shine",
    desc: "High-gloss laminated visiting cards for a sleek, vibrant, professional look. Colors pop beautifully.",
    features: ["High-gloss UV lamination", "Vibrant color reproduction", "Scratch resistant", "Standard & custom sizes", "Double-sided printing", "Upto 400 GSM"],
    turnaround: "2–4 hours", startingPrice: "₹299/100 cards",
    images: ["✨","📇","🎨","✅"],
    related: ["matt-finish-visiting-card","sbs-visiting-card","velvet-visiting-card","uv-visiting-card"]
  },
  "matt-finish-visiting-card": {
    name: "Matt Finish Visiting Card", category: "Visiting Cards", categorySlug: "visiting-cards",
    icon: "🎨", tag: "Elegant Look",
    desc: "Soft matte laminated visiting cards — understated, premium, and professional. Perfect for a subtle yet impactful impression.",
    features: ["Soft-touch matte lamination", "No glare finish", "Smooth writing surface", "Elegant & minimal look", "Double-sided available", "Upto 400 GSM"],
    turnaround: "2–4 hours", startingPrice: "₹299/100 cards",
    images: ["🎨","📇","✅","🖐️"],
    related: ["gloss-visiting-card","velvet-visiting-card","uv-visiting-card","premium-visiting-card"]
  },
  "velvet-visiting-card": {
    name: "Velvet Visiting Card", category: "Visiting Cards", categorySlug: "visiting-cards",
    icon: "🖐️", tag: "Luxury Feel",
    desc: "Soft-touch velvet laminated visiting cards with a velvety texture — a premium, memorable first impression.",
    features: ["Velvet soft-touch finish", "Ultra-premium feel", "Smudge resistant", "Upto 600 GSM", "Spot UV option available", "Gold/silver foil add-on"],
    turnaround: "Same day – next day", startingPrice: "₹499/100 cards",
    images: ["🖐️","📇","⭐","✅"],
    related: ["premium-visiting-card","uv-visiting-card","gold-silver-foil-card","mgi-visiting-card"]
  },
  "premium-visiting-card": {
    name: "Premium Visiting Card", category: "Visiting Cards", categorySlug: "visiting-cards",
    icon: "⭐", tag: "Top Quality",
    desc: "Extra-thick 700 GSM premium visiting cards with your choice of finish — the card that makes people hold on to it.",
    features: ["700 GSM thick stock", "Matte / gloss / velvet finish", "Double-sided printing", "Custom size options", "UV spot option", "Minimum 50 cards"],
    turnaround: "Same day – next day", startingPrice: "₹699/100 cards",
    images: ["⭐","📇","🖐️","✅"],
    related: ["velvet-visiting-card","uv-visiting-card","gold-silver-foil-card","mgi-visiting-card"]
  },
  "uv-visiting-card": {
    name: "UV Visiting Card", category: "Visiting Cards", categorySlug: "visiting-cards",
    icon: "💫", tag: "Spot UV",
    desc: "Spot UV coating adds a raised glossy effect on selected areas of your card — logo, name, or design elements.",
    features: ["Spot UV on any area", "Raised gloss texture", "Matte base + UV pop", "Logo & name highlight", "Custom UV masking", "Upto 600 GSM base"],
    turnaround: "Next day", startingPrice: "₹799/100 cards",
    images: ["💫","📇","⭐","✅"],
    related: ["gold-silver-foil-card","mgi-visiting-card","premium-visiting-card","velvet-visiting-card"]
  },
  "gold-silver-foil-card": {
    name: "Gold / Silver Foil Card", category: "Visiting Cards", categorySlug: "visiting-cards",
    icon: "🥇", tag: "Luxury Foil",
    desc: "Metallic gold or silver foil stamping on your visiting card — logo, name or borders. Maximum luxury appeal.",
    features: ["Real gold / silver foil", "Hot stamping process", "Any design element", "Matt or gloss base", "Upto 600 GSM", "Minimum 50 cards"],
    turnaround: "1–2 days", startingPrice: "₹999/100 cards",
    images: ["🥇","📇","⭐","✨"],
    related: ["mgi-visiting-card","uv-visiting-card","velvet-visiting-card","premium-visiting-card"]
  },
  "mgi-visiting-card": {
    name: "MGI Visiting Card", category: "Visiting Cards", categorySlug: "visiting-cards",
    icon: "🔮", tag: "Ultra Premium",
    desc: "MGI Jetvarnish digital 3D raised UV effect — the most premium visiting card you can offer. Tactile, stunning, unforgettable.",
    features: ["MGI Jetvarnish 3D UV", "Digital raised texture", "Photorealistic detail", "Any design possible", "Ultra-premium look & feel", "Minimum 25 cards"],
    turnaround: "1–2 days", startingPrice: "₹1499/100 cards",
    images: ["🔮","📇","⭐","🥇"],
    related: ["gold-silver-foil-card","uv-visiting-card","velvet-visiting-card","premium-visiting-card"]
  },

  // ── LETTERHEADS ────────────────────────────────────────────────────────────
  "do-paper-letterhead": {
    name: "DO Paper Letterhead", category: "Letterheads", categorySlug: "letterhead",
    icon: "📰", tag: "Standard",
    desc: "Classic DO paper letterhead — lightweight, clean, and ideal for general office correspondence. Printed sharp on standard paper.",
    features: ["Standard office paper", "A4 & A3 sizes", "Full color printing", "Custom header & footer", "Bulk order discounts", "Same-day available"],
    turnaround: "2–4 hours", startingPrice: "₹3/sheet",
    images: ["📰","📝","📄","✅"],
    related: ["bond-paper-letterhead","matt-finish-letterhead","gold-silver-leaf-letterhead","maplitho-letterhead"]
  },
  "bond-paper-letterhead": {
    name: "Bond Paper Letterhead", category: "Letterheads", categorySlug: "letterhead",
    icon: "📜", tag: "Premium Paper",
    desc: "Crisp bond paper letterhead for official and professional correspondence. Naturally white with a smooth texture.",
    features: ["100–120 GSM bond paper", "Smooth premium texture", "High ink absorption", "A4 & legal sizes", "Color & B&W options", "Bulk printing available"],
    turnaround: "2–4 hours", startingPrice: "₹5/sheet",
    images: ["📜","📝","📄","✅"],
    related: ["do-paper-letterhead","matt-finish-letterhead","maplitho-letterhead","gold-silver-leaf-letterhead"]
  },
  "matt-finish-letterhead": {
    name: "Matt Finish Letterhead", category: "Letterheads", categorySlug: "letterhead",
    icon: "🖊️", tag: "Elegant & Modern",
    desc: "Matte coated paper letterhead — sophisticated, glare-free finish that looks highly professional. Upto 170 GSM.",
    features: ["Matte coated paper", "Upto 170 GSM", "No glare surface", "Premium color output", "A4 & A3 sizes", "Minimum 100 sheets"],
    turnaround: "Same day – next day", startingPrice: "₹8/sheet",
    images: ["🖊️","📝","📄","✅"],
    related: ["bond-paper-letterhead","gold-silver-leaf-letterhead","maplitho-letterhead","do-paper-letterhead"]
  },
  "gold-silver-leaf-letterhead": {
    name: "Gold / Silver Leaf Letterhead", category: "Letterheads", categorySlug: "letterhead",
    icon: "🥇", tag: "Premium Foil",
    desc: "Premium foil-stamped letterhead with gold or silver leaf on your logo, header or border. Corporate luxury at its finest.",
    features: ["Gold or silver leaf foil", "Hot stamping process", "Premium base paper", "Upto 170 GSM", "Custom design support", "Minimum 50 sheets"],
    turnaround: "1–2 days", startingPrice: "₹25/sheet",
    images: ["🥇","📝","✨","📄"],
    related: ["matt-finish-letterhead","maplitho-letterhead","bond-paper-letterhead","do-paper-letterhead"]
  },
  "maplitho-letterhead": {
    name: "Maplitho Letterhead", category: "Letterheads", categorySlug: "letterhead",
    icon: "✨", tag: "Natural Finish",
    desc: "Maplitho uncoated paper letterhead — a classic, natural look with excellent ink absorption and a warm feel.",
    features: ["Maplitho uncoated paper", "Natural warm texture", "Excellent ink absorption", "Upto 170 GSM", "A4 & A3 sizes", "Eco-friendly option"],
    turnaround: "2–4 hours", startingPrice: "₹6/sheet",
    images: ["✨","📝","📄","✅"],
    related: ["bond-paper-letterhead","matt-finish-letterhead","do-paper-letterhead","gold-silver-leaf-letterhead"]
  },

  // ── STICKERS ───────────────────────────────────────────────────────────────
  "gum-sheet-sticker": {
    name: "Gum Sheet Sticker", category: "Stickers & Labels", categorySlug: "stickers",
    icon: "🏷️", tag: "Standard",
    desc: "Standard adhesive gum sheet stickers in any size or shape. Ideal for product labeling, event stickers, and general use.",
    features: ["Any size available", "Custom shapes", "Full color printing", "Permanent adhesive", "Bulk orders", "Same-day printing"],
    turnaround: "1–3 hours", startingPrice: "₹3/sticker",
    images: ["🏷️","📦","🎨","✅"],
    related: ["vinyl-sheet-sticker","water-bottle-label","packaging-label","uv-sticker"]
  },
  "vinyl-sheet-sticker": {
    name: "Vinyl Sheet Sticker", category: "Stickers & Labels", categorySlug: "stickers",
    icon: "🎞️", tag: "Weatherproof",
    desc: "Durable vinyl stickers for outdoor and indoor use — vehicles, walls, glass, helmets, and products.",
    features: ["Weatherproof & UV resistant", "Indoor & outdoor use", "Vehicle-safe adhesive", "Gloss & matte options", "Custom cut shapes", "Long-lasting print"],
    turnaround: "Same day", startingPrice: "₹10/sticker",
    images: ["🎞️","🏷️","🎨","✅"],
    related: ["gum-sheet-sticker","uv-sticker","gold-silver-leaf-sticker","water-bottle-label"]
  },
  "water-bottle-label": {
    name: "Water Bottle Label", category: "Stickers & Labels", categorySlug: "stickers",
    icon: "💧", tag: "Waterproof",
    desc: "Custom waterproof labels for water bottles and packaged drinks. Perfect for events, weddings, and branding.",
    features: ["100% waterproof", "Custom dimensions", "Gloss laminated finish", "Full color printing", "Minimum 50 pieces", "Wedding & event packs"],
    turnaround: "Same day – next day", startingPrice: "₹8/label",
    images: ["💧","🏷️","🎨","✅"],
    related: ["packaging-label","gum-sheet-sticker","vinyl-sheet-sticker","uv-sticker"]
  },
  "packaging-label": {
    name: "Packaging Label", category: "Stickers & Labels", categorySlug: "stickers",
    icon: "📦", tag: "Product Labels",
    desc: "Custom packaging labels for products, boxes, jars and bags. Professional finish that elevates your brand.",
    features: ["Custom size & shape", "Full color printing", "Barcode compatible", "Die-cut options", "Gloss & matte finish", "Bulk pricing available"],
    turnaround: "Same day – next day", startingPrice: "₹5/label",
    images: ["📦","🏷️","🎨","✅"],
    related: ["water-bottle-label","gum-sheet-sticker","vinyl-sheet-sticker","gold-silver-leaf-sticker"]
  },
  "gold-silver-leaf-sticker": {
    name: "Gold / Silver Leaf Sticker", category: "Stickers & Labels", categorySlug: "stickers",
    icon: "🥇", tag: "Premium Foil",
    desc: "Metallic gold or silver foil stickers — premium gifting, packaging, and product branding.",
    features: ["Gold & silver foil", "Custom sizes", "Die-cut shapes", "Premium adhesive", "Gift & product use", "Minimum 25 pieces"],
    turnaround: "1–2 days", startingPrice: "₹15/sticker",
    images: ["🥇","🏷️","✨","🎁"],
    related: ["uv-sticker","vinyl-sheet-sticker","packaging-label","water-bottle-label"]
  },
  "uv-sticker": {
    name: "UV Sticker", category: "Stickers & Labels", categorySlug: "stickers",
    icon: "💫", tag: "High Gloss",
    desc: "UV coated stickers with a raised glossy finish — vibrant, eye-catching, and premium-looking.",
    features: ["Spot UV coating", "Raised gloss effect", "Scratch resistant", "Indoor & outdoor", "Custom sizes & shapes", "Minimum 50 pieces"],
    turnaround: "Same day – next day", startingPrice: "₹12/sticker",
    images: ["💫","🏷️","✨","✅"],
    related: ["gold-silver-leaf-sticker","vinyl-sheet-sticker","gum-sheet-sticker","packaging-label"]
  },

  // ── LARGE FORMAT ───────────────────────────────────────────────────────────
  "flex-printing": {
    name: "Flex Printing", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "🏳️", tag: "Most Popular",
    desc: "High-quality flex banner printing for shops, events, and promotions. Weather-resistant, UV-resistant inks.",
    features: ["Any custom size", "UV resistant inks", "Indoor & outdoor grade", "Eyelets & hemming", "Same-day for standard sizes", "Bulk order pricing"],
    turnaround: "2–4 hours", startingPrice: "₹25/sq.ft",
    images: ["🏳️","🪧","🎨","✅"],
    related: ["vinyl-printing","sun-board-printing","roll-up-standee","canopy"]
  },
  "vinyl-printing": {
    name: "Vinyl Printing", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "🎞️", tag: "Premium Quality",
    desc: "Premium vinyl printing for vehicle graphics, wall art, shop fronts, and signage. Long-lasting and weatherproof.",
    features: ["Self-adhesive vinyl", "Vehicle-grade available", "Indoor & outdoor", "Weatherproof inks", "Custom cut shapes", "High resolution output"],
    turnaround: "Same day – next day", startingPrice: "₹35/sq.ft",
    images: ["🎞️","🪧","🎨","✅"],
    related: ["flex-printing","one-vision-printing","sun-board-printing","3d-letter-board"]
  },
  "one-vision-printing": {
    name: "One Vision Printing", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "👁️", tag: "Window Graphics",
    desc: "Perforated one-way vision film — print on glass while maintaining visibility from inside.",
    features: ["One-way see-through", "For glass & windows", "Full color print", "Outdoor UV resistant", "Any size available", "Professional finish"],
    turnaround: "Next day", startingPrice: "₹55/sq.ft",
    images: ["👁️","🪧","🏪","✅"],
    related: ["vinyl-printing","flex-printing","sun-board-printing","acrylic-letter-board"]
  },
  "3d-letter-board": {
    name: "3D Letter Board", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "🔤", tag: "Eye-Catching",
    desc: "Three-dimensional raised letter signage boards for shops, offices, and corporate spaces. Bold and professional.",
    features: ["Raised 3D effect", "Custom font & design", "Indoor & outdoor", "Multiple materials", "Color options", "Installation support"],
    turnaround: "2–4 days", startingPrice: "₹150/sq.ft",
    images: ["🔤","🏪","✅","⭐"],
    related: ["acrylic-letter-board","glow-shine-board","neo-board","sun-board-printing"]
  },
  "acrylic-letter-board": {
    name: "Acrylic Letter Board", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "🔲", tag: "Premium Signage",
    desc: "Sleek acrylic letter boards for offices and reception areas — modern, professional, and long-lasting.",
    features: ["Premium acrylic material", "Custom text & logo", "LED backlit available", "Various colors", "Wall mount included", "Professional finish"],
    turnaround: "2–4 days", startingPrice: "₹200/sq.ft",
    images: ["🔲","🏪","✅","⭐"],
    related: ["3d-letter-board","glow-shine-board","neo-board","acrylic-name-plate"]
  },
  "glow-shine-board": {
    name: "Glow Shine Board", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "💡", tag: "Night Visible",
    desc: "Backlit glow sign boards for maximum visibility at night — perfect for shops and businesses.",
    features: ["LED backlit illumination", "Visible at night", "Indoor & outdoor", "Waterproof design", "Energy efficient LEDs", "Custom sizes"],
    turnaround: "3–5 days", startingPrice: "₹250/sq.ft",
    images: ["💡","🏪","⭐","✅"],
    related: ["3d-letter-board","acrylic-letter-board","neo-board","road-signage-board"]
  },
  "road-signage-board": {
    name: "Road Signage Board", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "🛣️", tag: "Directional",
    desc: "Durable outdoor road and directional signage boards — reflective or standard, as per requirements.",
    features: ["Heavy-duty material", "Reflective options", "Weather resistant", "Standard & custom sizes", "Post-mount available", "Long lifespan"],
    turnaround: "3–5 days", startingPrice: "₹180/sq.ft",
    images: ["🛣️","🪧","✅","⭐"],
    related: ["glow-shine-board","sun-board-printing","flex-printing","neo-board"]
  },
  "retro-printing": {
    name: "Retro Printing", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "🌅", tag: "Vintage Style",
    desc: "Vintage-style retro prints for wall décor, restaurant themes, and brand aesthetics.",
    features: ["Retro color palettes", "Distressed effect", "Canvas & vinyl options", "Custom sizes", "Framing available", "Unique one-off prints"],
    turnaround: "Same day – next day", startingPrice: "₹40/sq.ft",
    images: ["🌅","🖼️","🎨","✅"],
    related: ["sun-board-printing","flex-printing","vinyl-printing","neo-board"]
  },
  "sun-board-printing": {
    name: "Sun Board Printing", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "☀️", tag: "Lightweight",
    desc: "Lightweight PVC sun board prints — perfect for indoor signage, real estate boards, and event displays.",
    features: ["Lightweight material", "Indoor & semi-outdoor", "Full color UV print", "Multiple thickness", "Easy wall mounting", "Same-day printing"],
    turnaround: "2–4 hours", startingPrice: "₹30/sq.ft",
    images: ["☀️","🪧","🎨","✅"],
    related: ["flex-printing","neo-board","road-signage-board","3d-letter-board"]
  },
  "neo-board": {
    name: "Neo Board", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "🌟", tag: "Premium Display",
    desc: "Premium neo board display signage for high-end businesses and corporate environments.",
    features: ["Premium neo material", "High definition print", "Rigid & durable", "Custom sizes", "Professional mounting", "Long life span"],
    turnaround: "2–3 days", startingPrice: "₹200/sq.ft",
    images: ["🌟","🪧","⭐","✅"],
    related: ["acrylic-letter-board","glow-shine-board","3d-letter-board","sun-board-printing"]
  },
  "clipon-board": {
    name: "Clip-on Board", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "📋", tag: "Easy Update",
    desc: "Clip-on snap frame display boards — update your content anytime without replacing the frame.",
    features: ["Snap-open aluminium frame", "Easy poster change", "A4 to A0 sizes", "Portrait & landscape", "Wall mount included", "Silver & black frames"],
    turnaround: "Same day – next day", startingPrice: "₹350/board",
    images: ["📋","🪧","✅","⭐"],
    related: ["roll-up-standee","sun-board-printing","flex-printing","neo-board"]
  },
  "canopy": {
    name: "Canopy", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "⛺", tag: "Event Essential",
    desc: "Branded promotional canopies for outdoor events, exhibitions, and stalls. Weather-resistant and fully branded.",
    features: ["Custom printed canopy", "Waterproof fabric", "Quick setup frame", "3x3m to 6x6m sizes", "Full color print", "Carry bag included"],
    turnaround: "3–5 days", startingPrice: "₹4999 onwards",
    images: ["⛺","🏪","🎨","✅"],
    related: ["roll-up-standee","flex-printing","vinyl-printing","clipon-board"]
  },
  "roll-up-standee": {
    name: "Roll Up Standee", category: "Large Format & Signage", categorySlug: "large-format",
    icon: "📣", tag: "Portable",
    desc: "Portable retractable standees for events, promotions, and office displays — setup in seconds.",
    features: ["Retractable mechanism", "Premium print quality", "Aluminium base", "Carry bag included", "85cm & 100cm wide", "Same-day printing"],
    turnaround: "Same day – next day", startingPrice: "₹999/standee",
    images: ["📣","🪧","🎨","✅"],
    related: ["canopy","clipon-board","flex-printing","sun-board-printing"]
  },

  // ── BOOKS & BOOKLETS ───────────────────────────────────────────────────────
  "brochure": {
    name: "Brochure", category: "Books & Booklets", categorySlug: "books",
    icon: "📰", tag: "Marketing Must",
    desc: "Professionally designed and printed tri-fold and bi-fold brochures for marketing, promotions, and business.",
    features: ["Tri-fold & bi-fold", "A4 & A5 sizes", "170 GSM paper", "Matte & gloss finish", "Double-sided printing", "Bulk discounts"],
    turnaround: "Same day – next day", startingPrice: "₹10/piece",
    images: ["📰","📄","🎨","✅"],
    related: ["leaflet","pamphlet","product-catalogue","certificate"]
  },
  "product-catalogue": {
    name: "Product Catalogue", category: "Books & Booklets", categorySlug: "books",
    icon: "📖", tag: "Business Essential",
    desc: "Professionally printed product catalogues for B2B and retail businesses — multi-page with premium binding.",
    features: ["Multi-page format", "Saddle stitch binding", "Cover & inner pages", "Full color printing", "Custom page count", "Bulk pricing"],
    turnaround: "1–3 days", startingPrice: "₹50/catalogue",
    images: ["📖","📰","🎨","✅"],
    related: ["brochure","diary-printing","magazine-printing","note-pad"]
  },
  "diary-printing": {
    name: "Diary Printing", category: "Books & Booklets", categorySlug: "books",
    icon: "📓", tag: "Corporate Gift",
    desc: "Custom branded diaries for corporate gifting, new year promotions, and personal use.",
    features: ["Custom cover design", "Your logo & branding", "Date-stamped pages", "Multiple sizes", "Hardcover available", "Bulk corporate orders"],
    turnaround: "3–7 days", startingPrice: "₹150/diary",
    images: ["📓","📖","🎨","✅"],
    related: ["note-pad","product-catalogue","magazine-printing","certificate"]
  },
  "magazine-printing": {
    name: "Magazine Printing", category: "Books & Booklets", categorySlug: "books",
    icon: "📰", tag: "Multi-Page",
    desc: "Multi-page magazine printing with professional saddle-stitch or perfect binding for schools and organizations.",
    features: ["Any page count", "Saddle stitch & perfect binding", "Cover & inner print", "Full color inside", "A4 & A5 sizes", "School & org editions"],
    turnaround: "2–5 days", startingPrice: "₹80/copy",
    images: ["📰","📖","🎨","✅"],
    related: ["product-catalogue","brochure","diary-printing","note-pad"]
  },
  "note-pad": {
    name: "Note Pad", category: "Books & Booklets", categorySlug: "books",
    icon: "📝", tag: "Branded",
    desc: "Custom branded notepads for offices, promotions and gifting. Your logo on every page.",
    features: ["Custom cover design", "Your logo every page", "50 or 100 sheets", "A5 & A4 sizes", "Cardboard backing", "Bulk order pricing"],
    turnaround: "Same day – next day", startingPrice: "₹50/pad",
    images: ["📝","📖","🎨","✅"],
    related: ["diary-printing","brochure","leaflet","pamphlet"]
  },
  "leaflet": {
    name: "Leaflet", category: "Books & Booklets", categorySlug: "books",
    icon: "📃", tag: "Quick Info",
    desc: "Single-sheet leaflets for quick information distribution — elections, promotions, and awareness drives.",
    features: ["Single sheet", "A4, A5, A6 sizes", "Full color print", "Both sides option", "Fast turnaround", "Bulk quantity"],
    turnaround: "1–2 hours", startingPrice: "₹2/piece",
    images: ["📃","📰","🎨","✅"],
    related: ["pamphlet","brochure","note-pad","certificate"]
  },
  "pamphlet": {
    name: "Pamphlet", category: "Books & Booklets", categorySlug: "books",
    icon: "📄", tag: "Upto 170 GSM",
    desc: "Eye-catching pamphlets on quality paper up to 170 GSM — bold colors, crisp print for all promotions.",
    features: ["Upto 170 GSM paper", "Full color printing", "A4, A5, A6 sizes", "Single & double-sided", "Matte & gloss finish", "Bulk pricing"],
    turnaround: "1–3 hours", startingPrice: "₹3/piece",
    images: ["📄","📰","🎨","✅"],
    related: ["leaflet","brochure","note-pad","certificate"]
  },
  "certificate": {
    name: "Certificate Printing", category: "Books & Booklets", categorySlug: "books",
    icon: "🎓", tag: "Premium Stock",
    desc: "Premium certificate printing on quality paper stock for academic, corporate, and event recognitions.",
    features: ["Premium certificate paper", "Gold foil option", "Custom templates", "A4 size standard", "Full color print", "Lamination available"],
    turnaround: "Same day", startingPrice: "₹20/certificate",
    images: ["🎓","📄","✅","⭐"],
    related: ["brochure","pamphlet","leaflet","product-catalogue"]
  },

  // ── GIFTING ────────────────────────────────────────────────────────────────
  "trophy": {
    name: "Trophy", category: "Gifting & Merchandise", categorySlug: "gifting",
    icon: "🏆", tag: "Award",
    desc: "Custom printed and engraved trophies for awards ceremonies, sports events, and recognition programs.",
    features: ["Custom engraving", "Multiple materials", "Standard & custom sizes", "Name & logo printing", "Bulk order pricing", "Same-day for stock items"],
    turnaround: "1–3 days", startingPrice: "₹299 onwards",
    images: ["🏆","🎖️","⭐","✅"],
    related: ["memento","medal","mug-printing","customised-clock"]
  },
  "memento": {
    name: "Memento", category: "Gifting & Merchandise", categorySlug: "gifting",
    icon: "🎖️", tag: "Farewell Gift",
    desc: "Personalized mementos for farewell, retirement, achievements, and corporate gifting.",
    features: ["Custom design & text", "Photo printing", "Multiple materials", "Acrylic & wood options", "Engraving available", "Gift packaging"],
    turnaround: "1–3 days", startingPrice: "₹399 onwards",
    images: ["🎖️","🏆","🎁","✅"],
    related: ["trophy","medal","customised-clock","customised-bag"]
  },
  "medal": {
    name: "Medal", category: "Gifting & Merchandise", categorySlug: "gifting",
    icon: "🥇", tag: "Sports & Events",
    desc: "Custom medals for sports competitions, school events, and corporate recognition programs.",
    features: ["Gold, silver, bronze finish", "Custom logo printing", "Ribbon included", "Multiple sizes", "Engraving available", "Bulk order pricing"],
    turnaround: "2–4 days", startingPrice: "₹99 onwards",
    images: ["🥇","🏆","🎗️","✅"],
    related: ["trophy","memento","id-card","lanyards"]
  },
  "t-shirt-printing": {
    name: "T-Shirt Printing", category: "Gifting & Merchandise", categorySlug: "gifting",
    icon: "👕", tag: "Custom Print",
    desc: "Custom logo and design printing on t-shirts for events, teams, promotions and corporate gifting.",
    features: ["Full color printing", "All sizes available", "DTF printing technology", "Minimum 5 pieces", "Any design accepted", "Bulk order discounts"],
    turnaround: "Same day – 2 days", startingPrice: "₹299/shirt",
    images: ["👕","🎨","✅","🎁"],
    related: ["mug-printing","pen-printing","customised-bag","dtf-printing"]
  },
  "mug-printing": {
    name: "Mug Printing", category: "Gifting & Merchandise", categorySlug: "gifting",
    icon: "☕", tag: "Perfect Gift",
    desc: "Personalized photo and logo mugs — sublimation printed for a vibrant, permanent finish.",
    features: ["Sublimation printing", "Dishwasher safe print", "White ceramic mugs", "Custom photo or logo", "Single or bulk orders", "Gift wrapping available"],
    turnaround: "Same day", startingPrice: "₹199/mug",
    images: ["☕","🎁","🎨","✅"],
    related: ["t-shirt-printing","customised-clock","pen-printing","trophy"]
  },
  "pen-printing": {
    name: "Pen Printing", category: "Gifting & Merchandise", categorySlug: "gifting",
    icon: "🖊️", tag: "Corporate Gift",
    desc: "Branded pens with logo and name printing — ideal for corporate gifting, events, and promotions.",
    features: ["Logo & name printing", "Multiple pen styles", "Minimum 50 pens", "Bulk discounts", "Gift packaging available", "Fast turnaround"],
    turnaround: "1–3 days", startingPrice: "₹25/pen",
    images: ["🖊️","🎁","🎨","✅"],
    related: ["mug-printing","t-shirt-printing","customised-bag","note-pad"]
  },
  "customised-clock": {
    name: "Customised Clock", category: "Gifting & Merchandise", categorySlug: "gifting",
    icon: "🕐", tag: "Photo Gift",
    desc: "Photo clocks with your custom image or design — a great personal and corporate gift.",
    features: ["Your photo or design", "Multiple frame styles", "AA battery included", "Gift box available", "Wall mount ready", "Single orders accepted"],
    turnaround: "Same day – next day", startingPrice: "₹399/clock",
    images: ["🕐","🎁","🎨","✅"],
    related: ["mug-printing","memento","trophy","customised-bag"]
  },
  "customised-bag": {
    name: "Customised Bag", category: "Gifting & Merchandise", categorySlug: "gifting",
    icon: "👜", tag: "Brand Promo",
    desc: "Custom branded bags with logo printing for corporate promotions, events, and gifting.",
    features: ["Logo & design printing", "Multiple bag types", "Non-woven & cotton", "Minimum 50 pieces", "Bulk pricing", "Event & corporate orders"],
    turnaround: "2–4 days", startingPrice: "₹99/bag",
    images: ["👜","🎁","🎨","✅"],
    related: ["t-shirt-printing","pen-printing","mug-printing","note-pad"]
  },

  // ── OFFICE STATIONERY ──────────────────────────────────────────────────────
  "office-register": {
    name: "Office Register", category: "Office Stationery & Forms", categorySlug: "stationery",
    icon: "📒", tag: "Custom",
    desc: "Custom office registers for attendance, accounts, visitor records and more.",
    features: ["Custom page design", "Any number of pages", "Hard & soft cover", "Ruled & custom lines", "Your logo on cover", "Bulk order pricing"],
    turnaround: "1–3 days", startingPrice: "₹150/register",
    images: ["📒","📋","🗂️","✅"],
    related: ["bill-book","form-printing","banking-stationery","passbook"]
  },
  "office-stationery": {
    name: "Office Stationery", category: "Office Stationery & Forms", categorySlug: "stationery",
    icon: "🗂️", tag: "Complete Set",
    desc: "Complete office stationery printing — pads, forms, files, letterheads, and more in one place.",
    features: ["Complete stationery set", "Letterhead & envelopes", "Custom forms & pads", "Your branding", "Bulk corporate orders", "Consistent design"],
    turnaround: "1–3 days", startingPrice: "Custom quote",
    images: ["🗂️","📋","📝","✅"],
    related: ["office-register","bill-book","envelope","form-printing"]
  },
  "envelope": {
    name: "Envelope Printing", category: "Office Stationery & Forms", categorySlug: "stationery",
    icon: "✉️", tag: "Branded",
    desc: "Branded envelopes in all sizes — DL, C5, C4 — with your logo and return address.",
    features: ["All standard sizes", "Logo & address print", "Color & B&W options", "Window envelopes", "Self-seal & gum options", "Bulk order pricing"],
    turnaround: "Same day – next day", startingPrice: "₹5/envelope",
    images: ["✉️","📋","📝","✅"],
    related: ["office-stationery","bill-book","form-printing","office-register"]
  },
  "bill-book": {
    name: "Bill Book", category: "Office Stationery & Forms", categorySlug: "stationery",
    icon: "📋", tag: "Custom NCR",
    desc: "Custom bill books in single and multi-copy (NCR) formats — your logo, GST number, and fields.",
    features: ["Single & NCR copies", "Your logo & GST no.", "Custom fields", "Booklet format", "50 or 100 bills/book", "Bulk order pricing"],
    turnaround: "Same day – next day", startingPrice: "₹80/book",
    images: ["📋","📝","✅","🗂️"],
    related: ["office-register","form-printing","banking-stationery","envelope"]
  },
  "form-printing": {
    name: "Form Printing", category: "Office Stationery & Forms", categorySlug: "stationery",
    icon: "📝", tag: "Custom",
    desc: "Custom forms for schools, offices, hospitals, and organizations — any format or size.",
    features: ["Custom design", "Any size & format", "Single & NCR copies", "Bulk printing", "Quick turnaround", "Your branding"],
    turnaround: "Same day – next day", startingPrice: "₹2/form",
    images: ["📝","📋","✅","🗂️"],
    related: ["bill-book","office-register","banking-stationery","envelope"]
  },
  "banking-stationery": {
    name: "Banking Stationery Forms", category: "Office Stationery & Forms", categorySlug: "stationery",
    icon: "🏦", tag: "Financial",
    desc: "Banking and financial stationery forms printed to specification — deposit slips, withdrawal forms, and more.",
    features: ["Deposit & withdrawal slips", "Custom bank formats", "NCR multi-copy", "Security printing", "Bulk order pricing", "Confidential handling"],
    turnaround: "1–3 days", startingPrice: "₹3/form",
    images: ["🏦","📋","✅","🗂️"],
    related: ["passbook","bill-book","form-printing","office-register"]
  },
  "passbook": {
    name: "Passbook", category: "Office Stationery & Forms", categorySlug: "stationery",
    icon: "📔", tag: "Financial",
    desc: "Custom passbooks for banks, cooperative societies, and financial institutions.",
    features: ["Custom design & format", "Durable cover", "Stitched binding", "Custom page count", "Security features", "Bulk order pricing"],
    turnaround: "2–4 days", startingPrice: "₹30/passbook",
    images: ["📔","🏦","✅","📋"],
    related: ["banking-stationery","bill-book","office-register","form-printing"]
  },

  // ── ID CARDS ───────────────────────────────────────────────────────────────
  "id-card": {
    name: "ID Card", category: "ID Cards & Name Plates", categorySlug: "id-cards",
    icon: "🪪", tag: "PVC & Paper",
    desc: "Durable laminated PVC and paper ID cards for schools, offices, and corporate events.",
    features: ["PVC & paper options", "Full color printing", "Laminated finish", "Lanyard hole", "Both sides printing", "Bulk school/office orders"],
    turnaround: "Same day", startingPrice: "₹40/card",
    images: ["🪪","📇","✅","🏷️"],
    related: ["lanyards","acrylic-id-card","acrylic-name-plate","metal-badge"]
  },
  "lanyards": {
    name: "Lanyards", category: "ID Cards & Name Plates", categorySlug: "id-cards",
    icon: "🎗️", tag: "Event & Office",
    desc: "Custom printed lanyards for ID cards, events, and corporate use. Any color, any text.",
    features: ["Full color sublimation", "Any text or logo", "Multiple widths", "Safety break clasp", "Bulk order pricing", "Fast delivery"],
    turnaround: "2–4 days", startingPrice: "₹35/lanyard",
    images: ["🎗️","🪪","✅","🎨"],
    related: ["id-card","acrylic-id-card","metal-badge","acrylic-name-plate"]
  },
  "acrylic-id-card": {
    name: "Acrylic ID Card", category: "ID Cards & Name Plates", categorySlug: "id-cards",
    icon: "🔲", tag: "Premium",
    desc: "Crystal-clear premium acrylic ID cards — modern, durable, and impressive.",
    features: ["Clear acrylic material", "UV printed design", "Durable & scratch resistant", "Lanyard hole", "Both sides printing", "Minimum 10 cards"],
    turnaround: "1–2 days", startingPrice: "₹150/card",
    images: ["🔲","🪪","⭐","✅"],
    related: ["id-card","acrylic-name-plate","metal-badge","lanyards"]
  },
  "acrylic-name-plate": {
    name: "Acrylic Name Plate", category: "ID Cards & Name Plates", categorySlug: "id-cards",
    icon: "🏷️", tag: "Desk & Door",
    desc: "Elegant acrylic name plates for desks, office doors, and reception areas.",
    features: ["Premium acrylic", "UV printed text & logo", "Desk & wall mount", "Multiple sizes", "Color options", "Single orders accepted"],
    turnaround: "1–2 days", startingPrice: "₹299/plate",
    images: ["🏷️","🔲","⭐","✅"],
    related: ["acrylic-id-card","metal-badge","id-card","3d-letter-board"]
  },
  "metal-badge": {
    name: "Metal Badge", category: "ID Cards & Name Plates", categorySlug: "id-cards",
    icon: "🏅", tag: "Corporate",
    desc: "Engraved metal badges for corporate employees, formal events, and professional identification.",
    features: ["Stainless steel finish", "Laser engraving", "Pin or magnet back", "Custom sizes", "Gold & silver finish", "Bulk order pricing"],
    turnaround: "2–4 days", startingPrice: "₹199/badge",
    images: ["🏅","🪪","⭐","✅"],
    related: ["id-card","acrylic-name-plate","lanyards","acrylic-id-card"]
  },

  // ── WEDDING CARDS ──────────────────────────────────────────────────────────
  "digital-wedding-card": {
    name: "Digital Wedding Card", category: "Wedding & Invitation Cards", categorySlug: "wedding",
    icon: "💻", tag: "WhatsApp Ready",
    desc: "Beautiful shareable digital wedding invitations — custom designed and delivered as PDF or video for WhatsApp sharing.",
    features: ["Custom design", "PDF & video formats", "WhatsApp shareable", "Hindi & English text", "Quick 24hr delivery", "Unlimited sharing"],
    turnaround: "Same day – next day", startingPrice: "₹499/design",
    images: ["💻","💌","🎨","✅"],
    related: ["traditional-wedding-card","invitation-card","thank-you-card","brochure"]
  },
  "invitation-card": {
    name: "Invitation Card", category: "Wedding & Invitation Cards", categorySlug: "wedding",
    icon: "💌", tag: "All Occasions",
    desc: "Custom printed invitation cards for weddings, birthdays, corporate events, and all special occasions.",
    features: ["Custom design", "Multiple paper options", "Folded & flat formats", "Matte & gloss finish", "Bulk order pricing", "Envelope matching"],
    turnaround: "Same day – next day", startingPrice: "₹15/card",
    images: ["💌","📇","🎨","✅"],
    related: ["traditional-wedding-card","digital-wedding-card","thank-you-card","certificate"]
  },
  "traditional-wedding-card": {
    name: "Traditional Wedding Card", category: "Wedding & Invitation Cards", categorySlug: "wedding",
    icon: "📿", tag: "Classic Design",
    desc: "Classic traditional wedding invitation cards with premium paper and beautiful traditional designs.",
    features: ["Traditional design patterns", "Premium card stock", "Hindi & English text", "Envelope included", "Minimum 50 cards", "Custom fold options"],
    turnaround: "1–2 days", startingPrice: "₹25/card",
    images: ["📿","💌","🎨","✅"],
    related: ["invitation-card","digital-wedding-card","thank-you-card","gold-silver-foil-card"]
  },
  "thank-you-card": {
    name: "Thank You Card", category: "Wedding & Invitation Cards", categorySlug: "wedding",
    icon: "💛", tag: "Elegant",
    desc: "Elegant thank-you cards for weddings, events and corporate appreciation — printed beautifully.",
    features: ["Custom message", "Premium card stock", "Multiple sizes", "Matte & gloss finish", "Envelope available", "Bulk order pricing"],
    turnaround: "Same day – next day", startingPrice: "₹10/card",
    images: ["💛","💌","🎨","✅"],
    related: ["invitation-card","traditional-wedding-card","digital-wedding-card","certificate"]
  },

  // ── DTF ────────────────────────────────────────────────────────────────────
  "dtf-printing": {
    name: "DTF Printing", category: "DTF & UV DTF Printing", categorySlug: "dtf",
    icon: "🌈", tag: "Any Fabric",
    desc: "Direct-to-Film transfer printing on t-shirts, hoodies, caps, and any fabric — vibrant, durable, no minimum order.",
    features: ["All fabric types", "Full color printing", "No minimum order", "Durable wash-fast", "Custom sizes", "Same-day for simple designs"],
    turnaround: "Same day – next day", startingPrice: "₹99/transfer",
    images: ["🌈","👕","🎨","✅"],
    related: ["uv-dtf-printing","t-shirt-printing","mug-printing","customised-bag"]
  },
  "uv-dtf-printing": {
    name: "UV DTF Printing", category: "DTF & UV DTF Printing", categorySlug: "dtf",
    icon: "✨", tag: "Any Surface",
    desc: "UV DTF transfer printing on glass, acrylic, metal, plastic, wood and more — crystal clear with raised 3D texture.",
    features: ["Any hard surface", "Glass, acrylic, metal, plastic", "Raised 3D texture", "UV cured permanent finish", "Custom sizes", "Minimum 1 piece"],
    turnaround: "Same day – next day", startingPrice: "₹199/transfer",
    images: ["✨","🌈","🔲","✅"],
    related: ["dtf-printing","t-shirt-printing","mug-printing","uv-visiting-card"]
  }
};

// ─── RELATED SERVICES HELPER ─────────────────────────────────────────────────
function getRelatedServices(slugs) {
  return slugs.map(s => serviceData[s]).filter(Boolean);
}

// ─── RENDER DETAIL PAGE ──────────────────────────────────────────────────────
function renderServiceDetail() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('s');
  const service = serviceData[slug];

  if (!service) {
    document.getElementById('sdContent').innerHTML = `
      <div style="text-align:center;padding:80px 20px;">
        <div style="font-size:3rem;margin-bottom:16px;">🔍</div>
        <h2 style="margin-bottom:12px;">Service not found</h2>
        <p style="color:#6B7280;margin-bottom:24px;">The service you're looking for doesn't exist.</p>
        <a href="services.html" class="btn-primary">← Back to All Services</a>
      </div>`;
    return;
  }

  // Breadcrumb
  document.getElementById('sdBreadcrumb').innerHTML = `
    <a href="index.html">Home</a>
    <span>/</span>
    <a href="services.html">Services</a>
    <span>/</span>
    <a href="services.html#${service.categorySlug}">${service.category}</a>
    <span>/</span>
    <span class="current">${service.name}</span>`;

  document.getElementById('sdPageTitle').textContent = service.name;
  document.getElementById('sdPageSub').textContent = `${service.category} · Pandit Computers & Printers, Bulandshahr`;
  document.title = `${service.name} | Pandit Computers & Printers`;

  // Images (emoji placeholders)
  const imgHtml = service.images.map((em, i) => `
    <div class="sd-thumb ${i === 0 ? 'sd-thumb-active' : ''}" onclick="sdSetImg(${i})" data-idx="${i}">
      <div class="sd-thumb-inner">${em}</div>
    </div>`).join('');

  const mainEm = service.images[0];

  // Features
  const featHtml = service.features.map(f => `<li>✓ ${f}</li>`).join('');

  // Related cards
  const related = getRelatedServices(service.related);
  const relHtml = related.map(r => `
    <a href="service-detail.html?s=${Object.keys(serviceData).find(k => serviceData[k] === r)}" class="sd-rel-card">
      <div class="sd-rel-icon">${r.icon}</div>
      <div class="sd-rel-name">${r.name}</div>
      <div class="sd-rel-cat">${r.category}</div>
    </a>`).join('');

  document.getElementById('sdContent').innerHTML = `
    <div class="sd-main">
      <!-- Left: Images -->
      <div class="sd-left">
        <div class="sd-main-img" id="sdMainImg">${mainEm}</div>
        <div class="sd-thumbs" id="sdThumbs">${imgHtml}</div>
      </div>

      <!-- Right: Info -->
      <div class="sd-right">
        ${service.tag ? `<div class="sd-tag">${service.tag}</div>` : ''}
        <h1 class="sd-title">${service.name}</h1>
        <div class="sd-meta">
          <span>📂 ${service.category}</span>
          ${service.startingPrice ? `<span>💰 Starting ${service.startingPrice}</span>` : ''}
          ${service.turnaround ? `<span>⏱️ ${service.turnaround}</span>` : ''}
        </div>
        <p class="sd-desc">${service.desc}</p>
        <ul class="sd-features">${featHtml}</ul>
        <div class="sd-actions">
          <a href="contact.html#contact-form?service=${encodeURIComponent(service.name)}"
            class="btn-primary sd-btn-quote">Get a Quote →</a>
          <a href="https://wa.me/918171294045?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}"
            target="_blank" class="sd-btn-wa">💬 WhatsApp Us</a>
        </div>
        <div class="sd-info-row">
          <div>📍 <strong>684/18 Kailashpuri, Bulandshahr</strong></div>
          <div>📞 <strong>+91 81712 94045</strong></div>
        </div>
      </div>
    </div>

    <!-- Related Services -->
    <div class="sd-related">
      <h3 class="sd-related-title">Related Services</h3>
      <div class="sd-related-grid">${relHtml}</div>
    </div>`;
}

function sdSetImg(idx) {
  document.querySelectorAll('.sd-thumb').forEach((t, i) => {
    t.classList.toggle('sd-thumb-active', i === idx);
  });
  const service = serviceData[new URLSearchParams(window.location.search).get('s')];
  if (service) document.getElementById('sdMainImg').textContent = service.images[idx];
}

document.addEventListener('DOMContentLoaded', renderServiceDetail);
