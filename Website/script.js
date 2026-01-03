const button = document.getElementById('color-changer-btn');
const textElement = document.getElementById('color-text');

const colors = ['#ffffff', '#ffeaa7', '#74b9ff', '#a29bfe', '#fd79a8'];
let colorIndex = 0;

function changeTextColor() {
    const newColor = colors[colorIndex];
    textElement.style.color = newColor;
    colorIndex = (colorIndex + 1) % colors.length;
    console.log(`Banner text color changed to: ${newColor}`);
}

if (button) {
    button.addEventListener('click', changeTextColor);
}

// Mobile Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const dropdowns = document.querySelectorAll('.dropdown');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Handle dropdown clicks on mobile
dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    if (dropbtn) {
        dropbtn.addEventListener('click', (e) => {
            // Only prevent default and toggle on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    }
});

// Handle nested dropdown clicks on mobile
const nestedDropdowns = document.querySelectorAll('.nested-dropdown');
nestedDropdowns.forEach(nestedDropdown => {
    const nestedDropbtn = nestedDropdown.querySelector('.nested-dropbtn');
    if (nestedDropbtn) {
        nestedDropbtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                nestedDropdown.classList.toggle('active');
            }
        });
    }
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!e.target.closest('header') && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Close menu when clicking on regular links (not dropdown buttons)
const regularLinks = navMenu.querySelectorAll('a:not(.dropbtn):not(.nested-dropbtn)');
regularLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
});

// Mobile consultation button handler
const mobileConsultationBtn = document.getElementById('mobile-consultation-btn');
if (mobileConsultationBtn) {
    mobileConsultationBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Close mobile menu
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
        // Open consultation modal
        const consultationModal = document.getElementById('consultation-modal');
        if (consultationModal) {
            consultationModal.style.display = 'block';
        }
    });
}

// Translation functionality
const translations = {
    en: {
        home: "Home",
        aboutUs: "About Us",
        visaServices: "Visa Services",
        countries: "Countries",
        contact: "Contact",
        bannerTitle: "Where Movement Meets Mastery",
        bannerText: "Seamless visa solutions for discerning travelers — Tourism | Business",
        aboutUsHeading: "About Us",
        aboutText1: "Cloudline Travel Architects is a premium travel and documentation consultancy based in Dubai. We design seamless travel experiences for professionals, entrepreneurs, and families — combining precision, discretion, and care.",
        aboutText2: "We are not travel agents. We are Travel Architects. Every journey we handle is built like architecture — precise, beautiful, and built to last.",
        philosophyHeading: "Our Philosophy",
        philosophySubheading: "Freedom, by Design",
        philosophyText1: "At Cloudline, freedom is not just a feeling — it's our promise.\nFreedom from stress, uncertainty, and delays.\nFreedom to move across borders without worry.",
        philosophyText2: "We design systems, processes, and experiences that transform complexity into calm.",
        visionHeading: "Our Vision",
        visionText: "True luxury is not in the destination — it's in the ease of getting there.",
        servicesTitle: "Our Visa Services",
        servicesDesc: "We provide comprehensive visa processing services for destinations around the globe. Our expert team ensures a smooth and hassle-free application process.",
        beginJourney: "Begin Your Journey",
        touristVisa: "Tourist Visa",
        touristDesc: "Curated visa solutions for leisure and exploration",
        businessVisa: "Business Visa",
        businessDesc: "Streamlined services for global professionals",
        countriesTitle: "Around the Globe",
        countriesSubtitle: "We process visas for multiple countries worldwide",
        contactTitle: "Get In Touch",
        contactSubtitle: "We're here to help you with your visa needs",
        whatsapp: "WhatsApp",
        email: "Email",
        instagram: "Instagram",
        footer: "© 2025 Cloudline Travel Architects | Global Visa Services"
    },
    ar: {
        home: "الرئيسية",
        aboutUs: "من نحن",
        visaServices: "خدمات التأشيرات",
        countries: "الدول",
        contact: "اتصل بنا",
        bannerTitle: "حيث تلتقي الحركة بالإتقان",
        bannerText: "حلول تأشيرات سلسة للمسافرين المميزين — السياحة | الأعمال",
        aboutUsHeading: "من نحن",
        aboutText1: "كلاودلاين ترافل أركيتكتس هي شركة استشارات سفر ووثائق فاخرة مقرها دبي. نصمم تجارب سفر سلسة للمهنيين ورجال الأعمال والعائلات — بمزيج من الدقة والسرية والعناية.",
        aboutText2: "نحن لسنا وكلاء سفر. نحن مهندسو السفر. كل رحلة نتعامل معها مبنية مثل العمارة — دقيقة وجميلة ومبنية لتدوم.",
        philosophyHeading: "فلسفتنا",
        philosophySubheading: "الحرية بالتصميم",
        philosophyText1: "في كلاودلاين، الحرية ليست مجرد شعور — إنها وعدنا.\nحرية من الإجهاد وعدم اليقين والتأخير.\nحرية التنقل عبر الحدود دون قلق.",
        philosophyText2: "نصمم الأنظمة والعمليات والتجارب التي تحول التعقيد إلى هدوء.",
        visionHeading: "رؤيتنا",
        visionText: "الرفاهية الحقيقية ليست في الوجهة — بل في سهولة الوصول إليها.",
        servicesTitle: "خدمات التأشيرات لدينا",
        servicesDesc: "نقدم خدمات معالجة تأشيرات شاملة للوجهات حول العالم. يضمن فريقنا الخبير عملية سلسة وخالية من المتاعب.",
        beginJourney: "ابدأ رحلتك",
        touristVisa: "تأشيرة سياحية",
        touristDesc: "حلول تأشيرات منسقة للترفيه والاستكشاف",
        businessVisa: "تأشيرة أعمال",
        businessDesc: "خدمات مبسطة للمهنيين العالميين",
        countriesTitle: "حول العالم",
        countriesSubtitle: "نقوم بمعالجة التأشيرات لعدة دول في جميع أنحاء العالم",
        contactTitle: "تواصل معنا",
        contactSubtitle: "نحن هنا لمساعدتك في احتياجات التأشيرة الخاصة بك",
        whatsapp: "واتساب",
        email: "البريد الإلكتروني",
        instagram: "انستغرام",
        footer: "© 2025 كلاودلاين ترافل أركيتكتس | خدمات التأشيرات العالمية"
    },
    hi: {
        home: "होम",
        aboutUs: "हमारे बारे में",
        visaServices: "वीज़ा सेवाएं",
        countries: "देश",
        contact: "संपर्क करें",
        bannerTitle: "जहां गति मास्टरी से मिलती है",
        bannerText: "समझदार यात्रियों के लिए सहज वीज़ा समाधान — पर्यटन | व्यापार",
        aboutUsHeading: "हमारे बारे में",
        aboutText1: "क्लाउडलाइन ट्रैवल आर्किटेक्ट्स दुबई स्थित एक प्रीमियम यात्रा और दस्तावेज़ परामर्श है। हम पेशेवरों, उद्यमियों और परिवारों के लिए सहज यात्रा अनुभव डिज़ाइन करते हैं — सटीकता, विवेक और देखभाल का संयोजन।",
        aboutText2: "हम ट्रैवल एजेंट नहीं हैं। हम ट्रैवल आर्किटेक्ट हैं। हम जो भी यात्रा संभालते हैं वह वास्तुकला की तरह बनाई जाती है — सटीक, सुंदर और टिकाऊ।",
        philosophyHeading: "हमारा दर्शन",
        philosophySubheading: "डिज़ाइन द्वारा स्वतंत्रता",
        philosophyText1: "क्लाउडलाइन में, स्वतंत्रता केवल एक भावना नहीं है — यह हमारा वादा है।\nतनाव, अनिश्चितता और देरी से स्वतंत्रता।\nबिना चिंता के सीमाओं के पार जाने की स्वतंत्रता।",
        philosophyText2: "हम ऐसी प्रणालियाँ, प्रक्रियाएँ और अनुभव डिज़ाइन करते हैं जो जटिलता को शांति में बदल देते हैं।",
        visionHeading: "हमारी दृष्टि",
        visionText: "सच्ची लक्जरी गंतव्य में नहीं है — यह वहां पहुंचने की आसानी में है।",
        servicesTitle: "हमारी वीज़ा सेवाएं",
        servicesDesc: "हम दुनिया भर के गंतव्यों के लिए व्यापक वीज़ा प्रसंस्करण सेवाएं प्रदान करते हैं। हमारी विशेषज्ञ टीम एक सहज और परेशानी मुक्त आवेदन प्रक्रिया सुनिश्चित करती है।",
        beginJourney: "अपनी यात्रा शुरू करें",
        touristVisa: "पर्यटक वीज़ा",
        touristDesc: "अवकाश और अन्वेषण के लिए क्यूरेटेड वीज़ा समाधान",
        businessVisa: "व्यापार वीज़ा",
        businessDesc: "वैश्विक पेशेवरों के लिए सुव्यवस्थित सेवाएं",
        countriesTitle: "दुनिया भर में",
        countriesSubtitle: "हम दुनिया भर के कई देशों के लिए वीज़ा प्रोसेस करते हैं",
        contactTitle: "संपर्क में रहें",
        contactSubtitle: "हम आपकी वीज़ा आवश्यकताओं में मदद के लिए यहां हैं",
        whatsapp: "व्हाट्सएप",
        email: "ईमेल",
        instagram: "इंस्टाग्राम",
        footer: "© 2025 क्लाउडलाइन ट्रैवल आर्किटेक्ट्स | वैश्विक वीज़ा सेवाएं"
    },
    ml: {
        home: "ഹോം",
        aboutUs: "ഞങ്ങളെക്കുറിച്ച്",
        visaServices: "വിസ സേവനങ്ങൾ",
        countries: "രാജ്യങ്ങൾ",
        contact: "ബന്ധപ്പെടുക",
        bannerTitle: "പ്രസ്ഥാനം വൈദഗ്ദ്ധ്യവുമായി കണ്ടുമുട്ടുന്നിടത്ത്",
        bannerText: "വിവേകമുള്ള യാത്രക്കാർക്കുള്ള സുഗമമായ വിസ പരിഹാരങ്ങൾ — ടൂറിസം | ബിസിനസ്",
        aboutUsHeading: "ഞങ്ങളെക്കുറിച്ച്",
        aboutText1: "ക്ലൗഡ്‌ലൈൻ ട്രാവൽ ആർക്കിടെക്‌റ്റ്‌സ് ദുബായ് ആസ്ഥാനമായി പ്രവർത്തിക്കുന്ന ഒരു പ്രീമിയം യാത്രാ രേഖാ കൺസൾട്ടൻസിയാണ്. പ്രൊഫഷണലുകൾക്കും, സംരംഭകർക്കും, കുടുംബങ്ങൾക്കും വേണ്ടി സുഗമമായ യാത്രാനുഭവങ്ങൾ ഞങ്ങൾ രൂപകല്പന ചെയ്യുന്നു — കൃത്യത, വിവേചനാധികാരം, പരിചരണം എന്നിവ സംയോജിപ്പിച്ച്.",
        aboutText2: "ഞങ്ങൾ ട്രാവൽ ഏജന്റുമാരല്ല. ഞങ്ങൾ ട്രാവൽ ആർക്കിടെക്റ്റുകളാണ്. ഞങ്ങൾ കൈകാര്യം ചെയ്യുന്ന ഓരോ യാത്രയും വാസ്തുവിദ്യ പോലെ നിർമ്മിച്ചിരിക്കുന്നു — കൃത്യവും, മനോഹരവും, ദീർഘനാൾ നിലനിൽക്കാൻ കഴിയുന്നതുമാണ്.",
        philosophyHeading: "ഞങ്ങളുടെ തത്ത്വചിന്ത",
        philosophySubheading: "ഡിസൈൻ വഴി സ്വാതന്ത്ര്യം",
        philosophyText1: "ക്ലൗഡ്‌ലൈനിൽ, സ്വാതന്ത്ര്യം വെറും ഒരു വികാരമല്ല — അതാണ് ഞങ്ങളുടെ വാഗ്ദാനം.\nസമ്മർദ്ദം, അനിശ്ചിതത്വം, കാലതാമസം എന്നിവയിൽ നിന്നുള്ള സ്വാതന്ത്ര്യം.\nആശങ്കയില്ലാതെ അതിർത്തികൾ കടക്കാനുള്ള സ്വാതന്ത്ര്യം.",
        philosophyText2: "സങ്കീർണ്ണതയെ ശാന്തതയാക്കി മാറ്റുന്ന സംവിധാനങ്ങൾ, പ്രക്രിയകൾ, അനുഭവങ്ങൾ എന്നിവ ഞങ്ങൾ രൂപകല്പന ചെയ്യുന്നു.",
        visionHeading: "ഞങ്ങളുടെ കാഴ്ചപ്പാട്",
        visionText: "യഥാർത്ഥ ആഡംബരം ലക്ഷ്യസ്ഥാനത്തല്ല — അവിടെയെത്തുന്നതിന്റെ എളുപ്പത്തിലാണ്.",
        servicesTitle: "ഞങ്ങളുടെ വിസ സേവനങ്ങൾ",
        servicesDesc: "ലോകമെമ്പാടുമുള്ള ലക്ഷ്യസ്ഥാനങ്ങൾക്കായി ഞങ്ങൾ സമഗ്രമായ വിസ പ്രോസസ്സിംഗ് സേവനങ്ങൾ നൽകുന്നു. ഞങ്ങളുടെ വിദഗ്ദ്ധ ടീം സുഗമവും ബുദ്ധിമുട്ടില്ലാത്തതുമായ അപേക്ഷാ പ്രക്രിയ ഉറപ്പാക്കുന്നു.",
        beginJourney: "നിങ്ങളുടെ യാത്ര ആരംഭിക്കുക",
        touristVisa: "ടൂറിസ്റ്റ് വിസ",
        touristDesc: "വിനോദത്തിനും പര്യവേക്ഷണത്തിനുമുള്ള ക്യൂറേറ്റഡ് വിസ പരിഹാരങ്ങൾ",
        businessVisa: "ബിസിനസ് വിസ",
        businessDesc: "ആഗോള പ്രൊഫഷണലുകൾക്കായി സുഗമമാക്കിയ സേവനങ്ങൾ",
        countriesTitle: "ലോകമെമ്പാടും",
        countriesSubtitle: "ലോകമെമ്പാടുമുള്ള ഒന്നിലധികം രാജ്യങ്ങൾക്കായി ഞങ്ങൾ വിസകൾ പ്രോസസ്സ് ചെയ്യുന്നു",
        contactTitle: "ബന്ധപ്പെടുക",
        contactSubtitle: "നിങ്ങളുടെ വിസ ആവശ്യങ്ങളിൽ സഹായിക്കാൻ ഞങ്ങൾ ഇവിടെയുണ്ട്",
        whatsapp: "വാട്സ്ആപ്പ്",
        email: "ഇമെയിൽ",
        instagram: "ഇൻസ്റ്റഗ്രാം",
        footer: "© 2025 ക്ലൗഡ്‌ലൈൻ ട്രാവൽ ആർക്കിടെക്റ്റ്‌സ് | ആഗോള വിസ സേവനങ്ങൾ"
    }
};

// Language selector
const languageSelect = document.getElementById('language-select');
if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        translatePage(selectedLang);
    });
}

function translatePage(lang) {
    const t = translations[lang] || translations['en'];
    
    // Navigation
    document.querySelectorAll('.menu a').forEach((link, index) => {
        const keys = ['home', 'aboutUs', 'visaServices', 'countries', 'contact'];
        if (keys[index]) link.textContent = t[keys[index]];
    });
    
    // Banner
    const bannerH1 = document.querySelector('.banner h1');
    const bannerText = document.getElementById('color-text');
    if (bannerH1) bannerH1.textContent = t.bannerTitle;
    if (bannerText) bannerText.textContent = t.bannerText;
    
    // About section
    const aboutHeading = document.querySelector('.about-section .section-heading');
    const aboutIntros = document.querySelectorAll('.about-intro');
    if (aboutHeading) aboutHeading.textContent = t.aboutUsHeading;
    if (aboutIntros[0]) aboutIntros[0].textContent = t.aboutText1;
    if (aboutIntros[1]) aboutIntros[1].textContent = t.aboutText2;
    
    // Philosophy
    const philosophyHeading = document.querySelectorAll('.section-heading')[1];
    const subHeading = document.querySelector('.sub-heading');
    const sectionTexts = document.querySelectorAll('.section-text');
    if (philosophyHeading) philosophyHeading.textContent = t.philosophyHeading;
    if (subHeading) subHeading.textContent = t.philosophySubheading;
    if (sectionTexts[0]) sectionTexts[0].innerHTML = t.philosophyText1.replace(/\\n/g, '<br>');
    if (sectionTexts[1]) sectionTexts[1].textContent = t.philosophyText2;
    
    // Vision
    const visionHeading = document.querySelectorAll('.section-heading')[2];
    const visionText = document.querySelector('.vision-text');
    if (visionHeading) visionHeading.textContent = t.visionHeading;
    if (visionText) visionText.textContent = t.visionText;
    
    // Services
    const servicesTitle = document.querySelector('.services-title');
    const servicesDesc = document.querySelector('.services-description');
    const beginButton = document.getElementById('color-changer-btn');
    if (servicesTitle) servicesTitle.textContent = t.servicesTitle;
    if (servicesDesc) servicesDesc.textContent = t.servicesDesc;
    if (beginButton) beginButton.textContent = t.beginJourney;
    
    // Feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards[0]) {
        featureCards[0].querySelector('h3').textContent = t.touristVisa;
        featureCards[0].querySelector('p').textContent = t.touristDesc;
    }
    if (featureCards[1]) {
        featureCards[1].querySelector('h3').textContent = t.businessVisa;
        featureCards[1].querySelector('p').textContent = t.businessDesc;
    }
    
    // Countries
    const countriesTitle = document.querySelector('.countries-title');
    const countriesSubtitle = document.querySelector('.countries-subtitle');
    if (countriesTitle) countriesTitle.textContent = t.countriesTitle;
    if (countriesSubtitle) countriesSubtitle.textContent = t.countriesSubtitle;
    
    // Contact
    const contactTitle = document.querySelector('.contact-title');
    const contactSubtitle = document.querySelector('.contact-subtitle');
    if (contactTitle) contactTitle.textContent = t.contactTitle;
    if (contactSubtitle) contactSubtitle.textContent = t.contactSubtitle;
    
    const contactOptions = document.querySelectorAll('.contact-option h3');
    if (contactOptions[0]) contactOptions[0].textContent = t.whatsapp;
    if (contactOptions[1]) contactOptions[1].textContent = t.email;
    if (contactOptions[2]) contactOptions[2].textContent = t.instagram;
    
    // Footer
    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = t.footer;
    
    console.log(`Page translated to: ${lang}`);
}

// Consultation Modal functionality
const consultationBtn = document.getElementById('consultation-btn');
const consultationModal = document.getElementById('consultation-modal');
const closeConsultation = document.getElementById('closeConsultation');

if (consultationBtn) {
    consultationBtn.addEventListener('click', (e) => {
        e.preventDefault();
        consultationModal.style.display = 'block';
    });
}

if (closeConsultation) {
    closeConsultation.addEventListener('click', () => {
        consultationModal.style.display = 'none';
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === consultationModal) {
        consultationModal.style.display = 'none';
    }
});

// Consultation form submission
const consultationForm = document.getElementById('consultationForm');
if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(consultationForm);
        alert('Thank you for your consultation request! We will contact you shortly.');
        console.log('Consultation form submitted');
        consultationModal.style.display = 'none';
        consultationForm.reset();
    });
}

// Chat button handler
const chatContactBtn = document.getElementById('chatContactBtn');
if (chatContactBtn) {
    chatContactBtn.addEventListener('click', () => {
        // Open WhatsApp as alternative chat method
        window.open('https://wa.me/971557721239', '_blank');
    });
}

// Login Modal functionality (Legacy)
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeModal = document.querySelector('.close-modal');

if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
}

// Google Sign-in buttons (Login)
const googleSignInBtn = document.getElementById('googleSignInBtn');
if (googleSignInBtn) {
    googleSignInBtn.addEventListener('click', () => {
        // This triggers Google's account chooser
        // In production, use Google Identity Services
        window.open('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=https://cloudlineexpress.com&response_type=code&client_id=YOUR_CLIENT_ID&scope=openid%20email%20profile&access_type=offline&state=state_parameter_passthrough_value&prompt=select_account', '_blank', 'width=500,height=600');
        console.log('Google Sign-In clicked - Account chooser opened');
    });
}

// Google Sign-up button (Signup)
const googleSignUpBtn = document.getElementById('googleSignUpBtn');
if (googleSignUpBtn) {
    googleSignUpBtn.addEventListener('click', () => {
        // This triggers Google's account chooser
        window.open('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=https://cloudlineexpress.com&response_type=code&client_id=YOUR_CLIENT_ID&scope=openid%20email%20profile&access_type=offline&state=state_parameter_passthrough_value&prompt=select_account', '_blank', 'width=500,height=600');
        console.log('Google Sign-Up clicked - Account chooser opened');
    });
}

// Phone Sign-in button (Login)
const phoneSignInBtn = document.getElementById('phoneSignInBtn');
if (phoneSignInBtn) {
    phoneSignInBtn.addEventListener('click', () => {
        const phoneNumber = prompt('Enter your phone number (with country code, e.g., +971557721239):');
        if (phoneNumber) {
            // Simulate OTP sending
            alert(`OTP has been sent to ${phoneNumber}`);
            const otp = prompt('Enter the OTP sent to your phone:');
            if (otp) {
                // In production, verify OTP with backend
                alert(`Verifying OTP: ${otp}\n\nIn production, this would verify with the backend.`);
                console.log('Phone Sign-In - OTP verification attempted');
            }
        }
    });
}

// Phone Registration button (Signup)
const phoneSignUpBtn = document.getElementById('phoneSignUpBtn');
if (phoneSignUpBtn) {
    phoneSignUpBtn.addEventListener('click', () => {
        const phoneNumber = prompt('Enter your phone number (with country code, e.g., +971557721239):');
        if (phoneNumber) {
            // Simulate OTP sending
            alert(`OTP has been sent to ${phoneNumber}`);
            const otp = prompt('Enter the OTP sent to your phone:');
            if (otp) {
                // In production, verify OTP and create account
                const fullName = prompt('Enter your full name:');
                if (fullName) {
                    alert(`Registration successful!\n\nName: ${fullName}\nPhone: ${phoneNumber}\n\nIn production, this would create an account in the backend.`);
                    console.log('Phone Registration completed');
                }
            }
        }
    });
}

// Sign-up form
const signupForm = document.querySelector('.signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;
        
        // In a real implementation, this would send data to backend
        alert(`Sign up functionality would be implemented here.\nEmail: ${email}`);
        console.log('Sign up submitted:', email);
    });
}