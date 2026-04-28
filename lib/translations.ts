import { type Language } from "@/components/language-provider"

export const translations = {
  es: {
    navigation: {
      links: [
        { href: "#inicio", label: "Inicio" },
        { href: "#sobre-mi", label: "Sobre mí" },
        { href: "#formacion", label: "Formación" },
        { href: "#servicios", label: "Servicios" },
        { href: "#filosofia", label: "Mi filosofía" },
        { href: "#contacto", label: "Contacto" },
      ],
      bookConsultation: "Agendar consulta",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      darkMode: "Modo oscuro",
      lightMode: "Modo claro",
      activateDarkMode: "Activar modo oscuro",
      activateLightMode: "Activar modo claro",
      languageSelector: "Seleccionar idioma",
    },
    hero: {
      badge: "Bienvenidos",
      description:
        "Médica con Formación Internacional. Cuidando tu salud con ciencia, empatía y atención personalizada.",
      bookConsultation: "Agendar consulta",
      meetMe: "Conóceme",
      doctorImageAlt: "Dra. Karenn Cañón - Médica General",
    },
    about: {
      badge: "Sobre mí",
      title: "Mi historia y vocación",
      paragraphs: [
        "La medicina llegó a mi vida como una forma natural de expresar mi vocación temprana por ayudar a los demás.",
        "Siempre estuve dispuesta a arriesgar lo propio con tal de obtener la mejor formación, lo que me llevó a migrar a Rusia, donde me gradué como médica. Actualmente resido principalmente en España, con el corazón puesto en mis raíces colombianas y enriquecida por múltiples nacionalidades.",
        "Soy Karenn Cañón Benítez, médica colombiana graduada en Rusia.",
        "Mi compromiso es total: fiel a cada paciente, a la comprensión profunda de su situación y al acompañamiento cercano y humano en su camino hacia una mejor salud.",
      ],
      imageAlt: "Dra. Karenn Cañón en su consultorio",
      values: [
        {
          title: "Empatía",
          description:
            "Cada paciente es único y merece ser escuchado con atención y comprensión.",
        },
        {
          title: "Ciencia",
          description:
            "Decisiones basadas en evidencia científica actualizada y mejores prácticas.",
        },
        {
          title: "Cercanía",
          description:
            "Relación médico-paciente basada en confianza y comunicación abierta.",
        },
      ],
    },
    education: {
      badge: "Formación académica",
      title: "Preparación continua para cuidarte mejor",
      studiesTitle: "Estudios",
      languagesTitle: "Idiomas",
      certificationsTitle: "Certificaciones y cursos",
      languageList: [
        { language: "Español", level: "Nativo" },
        { language: "Ruso", level: "Nativo profesional" },
        { language: "Inglés", level: "Competencia intermedia en el trabajo" },
        { language: "Alemán", level: "Competencia básica" },
      ],
      educationItems: [
        {
          year: "2019 - 2025",
          title: "Medicina General",
          institution: "Federación de Rusia, Universidad Estatal de Bélgorod.",
          description: "Médico - Лечебное дело",
        },
        {
          year: "2024-2025",
          title: "Diplomado en Bioestadística y Análisis de Datos en Salud.",
          institution: "Federación de Rusia, Universidad Estatal de Bélgorod.",
          description: "Estadística - Стадистик",
        },
        {
          year: "2023",
          title: "Certificado de Especialista en Enfermería",
          institution: "Federación de Rusia, Universidad Estatal de Bélgorod.",
          description: "Enfermería - Сестринское дело",
        },
      ],
      certifications: [
        [
          "Certificado de sueroterapia clínica en medicina estética y antienvejecimiento con vitamina C.",
          "Centro BioCare - Bogotá, Colombia",
          "2026",
        ],
        [
          "Simposios internacional en enfermedades reumáticas (Artritis Reumatoide)",
          "Bogotá - Colombia",
          "2023 - 2024 - 2025",
        ],
        [
          "V Simposio Del Grupo De Interés En Psiquiatría.",
          "Bogotá, Colombia",
          "2025",
        ],
        [
          "Participación activa en simposios de interés general, durante los años.",
          "2023 - 2026",
        ],
        ["Ruta de Diversidad, Inclusión y entorno laboral saludable.", "Platzi", "2026"],
        ["Certificado en curso de Salud y bienestar en el mundo actual.", "Platzi", "2026"],
        [
          "Curso de Habilidades blandas para el desarrollo profesional, Inteligencia Emocional, Inteligencia Emocional para líderes, Inteligencia Emocional para servicio al cliente. Curso de primeros auxilios psicológicos para líderes.",
          "Platzi",
          "2026",
        ],
      ],
    },
    services: {
      badge: "Servicios",
      title: "Mi práctica clínica",
      description:
        "Como médico general, te ofrezco una atención médica integral, combinando mi experiencia clínica con un enfoque cercano y personalizado para cuidar tu salud.",
      items: [
        {
          title: "Consulta médica general",
          description:
            "Valoración integral del paciente, orientada al diagnóstico, tratamiento y resolución de problemas de salud frecuentes, con un enfoque cercano y personalizado.",
        },
        {
          title: "Medicina preventiva y promoción de la salud",
          description:
            "Evaluación de factores de riesgo y orientación en hábitos saludables para prevenir enfermedades y mejorar la calidad de vida a largo plazo.",
        },
        {
          title: "Telemedicina",
          description:
            "Atención médica online segura y accesible, ideal para consultas, orientación clínica y seguimiento sin necesidad de desplazamientos.",
        },
        {
          title: "Seguimiento y control de enfermedades",
          description:
            "Acompañamiento continuo en patologías agudas y crónicas, con ajuste de tratamientos y monitoreo de la evolución clínica.",
        },
        {
          title: "Chequeo médico integral",
          description:
            "Evaluación completa del estado de salud mediante historia clínica, exploración física y estudios complementarios, enfocada en la detección temprana.",
        },
        {
          title: "Evaluación inicial en salud mental",
          description:
            "Valoración médica de síntomas como ansiedad, estrés o alteraciones del estado de ánimo, con orientación inicial y derivación oportuna si se requiere.",
        },
      ],
    },
    philosophy: {
      badge: "Mi filosofía",
      title: "Un espacio dedicado a ti",
      paragraphs: [
        "Soy fiel creyente de una medicina basada en la comunicación y en el valor de la escucha.",
        "Entiendo que cada persona tiene una historia única, que merece ser comprendida con una mirada que vaya más allá de los síntomas. Por eso, mi enfoque profesional se centra en crear espacios donde puedas expresarte con tranquilidad y sentirte realmente acompañado.",
        "Quiero comprender lo que vives, lo que sientes y lo que necesitas. No eres una enfermedad.",
        "Para mí, esto es darle sentido a la medicina.",
      ],
      quote:
        '"El secreto del cuidado del paciente está en interesarse verdaderamente por él."',
      quoteAuthor: "Francis Weld Peabody",
      chatImageAlt: "Chat de WhatsApp",
      features: [
        {
          title: "Tiempo dedicado",
          description: "Cada consulta dura entre 45-60 minutos. Sin prisas, sin interrupciones.",
        },
        {
          title: "Escucha activa",
          description:
            "Empezamos conversando sobre cómo te sientes, tus preocupaciones y objetivos de salud.",
        },
        {
          title: "Decisiones compartidas",
          description: "Juntos definimos el mejor plan de acción. Tu opinión siempre cuenta.",
        },
        {
          title: "Explicaciones claras",
          description: "Te explico todo en términos sencillos. Sin jerga médica innecesaria.",
        },
      ],
    },
    contact: {
      badge: "Contacto",
      title: "Agenda tu consulta",
      description: "Estoy aquí para ayudarte. Contáctame para agendar una cita o resolver tus dudas.",
      successTitle: "¡Mensaje enviado!",
      successDescription: "Me pondré en contacto contigo pronto.",
      submitSending: "Enviando...",
      submitRequest: "Enviar solicitud",
      sendError: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
      detailsTitle: "Información de contacto",
      followMe: "Sígueme",
      labels: {
        fullName: "Nombre completo",
        phone: "Teléfono",
        email: "Correo electrónico",
        reason: "Motivo de consulta",
        message: "Mensaje (opcional)",
      },
      placeholders: {
        fullName: "Tu nombre",
        phone: "Tu teléfono",
        email: "tu@email.com",
        reason: "Ej: Consulta general, seguimiento, etc.",
        message: "Cuéntame más sobre tu situación...",
      },
      contactInfoLabels: {
        phone: "Teléfono",
        whatsapp: "WhatsApp",
        email: "Correo",
      },
      socialAria: {
        instagram: "Instagram",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      brandDescription:
        "Médica con Formación Internacional comprometida con tu salud. Brindando atención médica de calidad con calidez humana.",
      navigationTitle: "Navegación",
      contactTitle: "Contacto",
      rightsReserved: "Todos los derechos reservados.",
      madeWith: "Hecho con",
      forPatients: "para mis pacientes",
    },
  },
  en: {
    navigation: {
      links: [
        { href: "#inicio", label: "Home" },
        { href: "#sobre-mi", label: "About me" },
        { href: "#formacion", label: "Education" },
        { href: "#servicios", label: "Services" },
        { href: "#filosofia", label: "My philosophy" },
        { href: "#contacto", label: "Contact" },
      ],
      bookConsultation: "Book consultation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      darkMode: "Dark mode",
      lightMode: "Light mode",
      activateDarkMode: "Enable dark mode",
      activateLightMode: "Enable light mode",
      languageSelector: "Select language",
    },
    hero: {
      badge: "Welcome",
      description:
        "Physician with international training. Caring for your health with science, empathy, and personalized care.",
      bookConsultation: "Book consultation",
      meetMe: "Get to know me",
      doctorImageAlt: "Dr. Karenn Cañón - General Practitioner",
    },
    about: {
      badge: "About me",
      title: "My story and vocation",
      paragraphs: [
        "Medicine came into my life as a natural way to express my early calling to help others.",
        "I have always been willing to take risks to pursue the best education, which led me to move to Russia, where I graduated as a physician. I currently live mainly in Spain, with my heart rooted in my Colombian origins and enriched by multiple nationalities.",
        "I am Karenn Cañón Benítez, a Colombian physician graduated in Russia.",
        "My commitment is absolute: loyal to each patient, to deeply understanding their situation, and to providing close, human support on their path toward better health.",
      ],
      imageAlt: "Dr. Karenn Cañón in her office",
      values: [
        {
          title: "Empathy",
          description:
            "Every patient is unique and deserves to be heard with attention and understanding.",
        },
        {
          title: "Science",
          description:
            "Decisions based on up-to-date scientific evidence and best practices.",
        },
        {
          title: "Closeness",
          description:
            "A doctor-patient relationship based on trust and open communication.",
        },
      ],
    },
    education: {
      badge: "Academic background",
      title: "Continuous training to care for you better",
      studiesTitle: "Studies",
      languagesTitle: "Languages",
      certificationsTitle: "Certifications and courses",
      languageList: [
        { language: "Spanish", level: "Native" },
        { language: "Russian", level: "Professional native" },
        { language: "English", level: "Intermediate professional proficiency" },
        { language: "German", level: "Basic proficiency" },
      ],
      educationItems: [
        {
          year: "2019 - 2025",
          title: "General Medicine",
          institution: "Russian Federation, Belgorod State University.",
          description: "Physician - Лечебное дело",
        },
        {
          year: "2024-2025",
          title: "Diploma in Biostatistics and Health Data Analysis",
          institution: "Russian Federation, Belgorod State University.",
          description: "Statistics - Стадистик",
        },
        {
          year: "2023",
          title: "Nursing Specialist Certificate",
          institution: "Russian Federation, Belgorod State University.",
          description: "Nursing - Сестринское дело",
        },
      ],
      certifications: [
        [
          "Certificate in clinical serum therapy in aesthetic and anti-aging medicine with vitamin C.",
          "Centro BioCare - Bogotá, Colombia",
          "2026",
        ],
        [
          "International symposiums on rheumatic diseases (Rheumatoid Arthritis)",
          "Bogotá - Colombia",
          "2023 - 2024 - 2025",
        ],
        [
          "5th Symposium of the Psychiatry Interest Group.",
          "Bogotá, Colombia",
          "2025",
        ],
        ["Active participation in general-interest symposiums.", "2023 - 2026"],
        ["Diversity, inclusion, and healthy workplace pathway.", "Platzi", "2026"],
        ["Course certificate in health and wellness in today's world.", "Platzi", "2026"],
        [
          "Soft skills for professional development, Emotional Intelligence, Emotional Intelligence for leaders, Emotional Intelligence for customer service, and Psychological first aid for leaders.",
          "Platzi",
          "2026",
        ],
      ],
    },
    services: {
      badge: "Services",
      title: "My clinical practice",
      description:
        "As a general practitioner, I offer comprehensive medical care, combining clinical experience with a close and personalized approach to protect your health.",
      items: [
        {
          title: "General medical consultation",
          description:
            "Comprehensive patient assessment focused on diagnosis, treatment, and resolution of common health concerns, with a close and personalized approach.",
        },
        {
          title: "Preventive medicine and health promotion",
          description:
            "Risk factor assessment and guidance on healthy habits to prevent disease and improve long-term quality of life.",
        },
        {
          title: "Telemedicine",
          description:
            "Secure and accessible online medical care, ideal for consultations, clinical guidance, and follow-up without travel.",
        },
        {
          title: "Disease follow-up and monitoring",
          description:
            "Continuous support for acute and chronic conditions, including treatment adjustments and clinical progress monitoring.",
        },
        {
          title: "Comprehensive medical check-up",
          description:
            "Complete health evaluation through medical history, physical examination, and complementary studies focused on early detection.",
        },
        {
          title: "Initial mental health assessment",
          description:
            "Medical evaluation of symptoms such as anxiety, stress, or mood changes, with initial guidance and timely referral when needed.",
        },
      ],
    },
    philosophy: {
      badge: "My philosophy",
      title: "A space dedicated to you",
      paragraphs: [
        "I strongly believe in medicine grounded in communication and the value of listening.",
        "I understand that every person has a unique story that deserves to be understood beyond symptoms. That is why my professional approach focuses on creating spaces where you can express yourself calmly and feel truly supported.",
        "I want to understand what you are living, feeling, and needing. You are not a disease.",
        "For me, this is what gives medicine meaning.",
      ],
      quote: '"The secret of the care of the patient is in caring for the patient."',
      quoteAuthor: "Francis Weld Peabody",
      chatImageAlt: "WhatsApp chat",
      features: [
        {
          title: "Dedicated time",
          description:
            "Each consultation lasts between 45-60 minutes. No rush, no interruptions.",
        },
        {
          title: "Active listening",
          description:
            "We begin by talking about how you feel, your concerns, and your health goals.",
        },
        {
          title: "Shared decisions",
          description: "Together we define the best action plan. Your opinion always matters.",
        },
        {
          title: "Clear explanations",
          description: "I explain everything in simple terms, without unnecessary medical jargon.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Book your consultation",
      description:
        "I am here to help you. Contact me to schedule an appointment or resolve your questions.",
      successTitle: "Message sent!",
      successDescription: "I will get in touch with you soon.",
      submitSending: "Sending...",
      submitRequest: "Send request",
      sendError: "There was an error sending your message. Please try again.",
      detailsTitle: "Contact information",
      followMe: "Follow me",
      labels: {
        fullName: "Full name",
        phone: "Phone",
        email: "Email",
        reason: "Reason for consultation",
        message: "Message (optional)",
      },
      placeholders: {
        fullName: "Your name",
        phone: "Your phone",
        email: "you@email.com",
        reason: "Ex: General consultation, follow-up, etc.",
        message: "Tell me more about your situation...",
      },
      contactInfoLabels: {
        phone: "Phone",
        whatsapp: "WhatsApp",
        email: "Email",
      },
      socialAria: {
        instagram: "Instagram",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      brandDescription:
        "Physician with international training committed to your health. Providing high-quality medical care with warmth and empathy.",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      rightsReserved: "All rights reserved.",
      madeWith: "Made with",
      forPatients: "for my patients",
    },
  },
  ru: {
    navigation: {
      links: [
        { href: "#inicio", label: "Главная" },
        { href: "#sobre-mi", label: "Обо мне" },
        { href: "#formacion", label: "Образование" },
        { href: "#servicios", label: "Услуги" },
        { href: "#filosofia", label: "Моя философия" },
        { href: "#contacto", label: "Контакты" },
      ],
      bookConsultation: "Записаться на консультацию",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      darkMode: "Темный режим",
      lightMode: "Светлый режим",
      activateDarkMode: "Включить темный режим",
      activateLightMode: "Включить светлый режим",
      languageSelector: "Выбрать язык",
    },
    hero: {
      badge: "Добро пожаловать",
      description:
        "Врач с международной подготовкой. Забочусь о вашем здоровье с опорой на науку, эмпатию и персонализированный подход.",
      bookConsultation: "Записаться на консультацию",
      meetMe: "Познакомиться со мной",
      doctorImageAlt: "Др. Каренн Каньон - врач общей практики",
    },
    about: {
      badge: "Обо мне",
      title: "Моя история и призвание",
      paragraphs: [
        "Медицина вошла в мою жизнь как естественный способ выразить мое раннее призвание помогать людям.",
        "Я всегда была готова рисковать ради лучшего образования, и это привело меня в Россию, где я получила диплом врача. Сейчас я в основном живу в Испании, сохраняя связь с колумбийскими корнями и обогащаясь опытом разных культур.",
        "Я Каренн Каньон Бенитес, колумбийский врач, получившая образование в России.",
        "Моя преданность абсолютна: каждому пациенту, глубокому пониманию его ситуации и человеческому сопровождению на пути к лучшему здоровью.",
      ],
      imageAlt: "Др. Каренн Каньон в кабинете",
      values: [
        {
          title: "Эмпатия",
          description:
            "Каждый пациент уникален и заслуживает внимательного и понимающего отношения.",
        },
        {
          title: "Наука",
          description:
            "Решения, основанные на актуальных научных данных и лучших практиках.",
        },
        {
          title: "Близость",
          description:
            "Отношения врача и пациента, основанные на доверии и открытом общении.",
        },
      ],
    },
    education: {
      badge: "Академическая подготовка",
      title: "Непрерывное обучение, чтобы заботиться о вас лучше",
      studiesTitle: "Образование",
      languagesTitle: "Языки",
      certificationsTitle: "Сертификаты и курсы",
      languageList: [
        { language: "Испанский", level: "Родной" },
        { language: "Русский", level: "Профессиональный родной" },
        { language: "Английский", level: "Средний рабочий уровень" },
        { language: "Немецкий", level: "Базовый уровень" },
      ],
      educationItems: [
        {
          year: "2019 - 2025",
          title: "Лечебное дело",
          institution: "Российская Федерация, Белгородский государственный университет.",
          description: "Врач - Лечебное дело",
        },
        {
          year: "2024-2025",
          title: "Диплом по биостатистике и анализу данных в здравоохранении",
          institution: "Российская Федерация, Белгородский государственный университет.",
          description: "Статистика - Стадистик",
        },
        {
          year: "2023",
          title: "Сертификат специалиста по сестринскому делу",
          institution: "Российская Федерация, Белгородский государственный университет.",
          description: "Сестринское дело - Сестринское дело",
        },
      ],
      certifications: [
        [
          "Сертификат по клинической сывороточной терапии в эстетической и антивозрастной медицине с витамином C.",
          "Centro BioCare - Богота, Колумбия",
          "2026",
        ],
        [
          "Международные симпозиумы по ревматическим заболеваниям (ревматоидный артрит)",
          "Богота - Колумбия",
          "2023 - 2024 - 2025",
        ],
        [
          "V Симпозиум группы интересов по психиатрии.",
          "Богота, Колумбия",
          "2025",
        ],
        ["Активное участие в симпозиумах общего профиля.", "2023 - 2026"],
        ["Маршрут по разнообразию, инклюзии и здоровой рабочей среде.", "Platzi", "2026"],
        ["Сертификат курса по здоровью и благополучию в современном мире.", "Platzi", "2026"],
        [
          "Курс soft skills для профессионального развития, эмоциональный интеллект, эмоциональный интеллект для лидеров, эмоциональный интеллект для клиентского сервиса, а также психологическая первая помощь для лидеров.",
          "Platzi",
          "2026",
        ],
      ],
    },
    services: {
      badge: "Услуги",
      title: "Моя клиническая практика",
      description:
        "Как врач общей практики, я предлагаю комплексную медицинскую помощь, сочетая клинический опыт с внимательным и персонализированным подходом к вашему здоровью.",
      items: [
        {
          title: "Общая медицинская консультация",
          description:
            "Комплексная оценка состояния пациента, ориентированная на диагностику, лечение и решение частых проблем со здоровьем в персонализированном формате.",
        },
        {
          title: "Профилактическая медицина и укрепление здоровья",
          description:
            "Оценка факторов риска и рекомендации по здоровым привычкам для профилактики заболеваний и улучшения качества жизни в долгосрочной перспективе.",
        },
        {
          title: "Телемедицина",
          description:
            "Безопасная и доступная онлайн-медицина для консультаций, клинических рекомендаций и наблюдения без необходимости поездок.",
        },
        {
          title: "Наблюдение и контроль заболеваний",
          description:
            "Непрерывное сопровождение при острых и хронических состояниях с коррекцией лечения и мониторингом динамики.",
        },
        {
          title: "Комплексный медицинский чек-ап",
          description:
            "Полная оценка здоровья через анамнез, физикальный осмотр и дополнительные исследования с фокусом на раннее выявление.",
        },
        {
          title: "Первичная оценка психического здоровья",
          description:
            "Медицинская оценка симптомов тревоги, стресса или изменений настроения с первичными рекомендациями и своевременным направлением при необходимости.",
        },
      ],
    },
    philosophy: {
      badge: "Моя философия",
      title: "Пространство, посвященное вам",
      paragraphs: [
        "Я глубоко верю в медицину, основанную на общении и ценности внимательного слушания.",
        "Я понимаю, что у каждого человека уникальная история, которую важно видеть шире, чем только симптомы. Поэтому мой профессиональный подход строится на создании пространства, где вы можете спокойно выговориться и почувствовать настоящую поддержку.",
        "Я хочу понять, через что вы проходите, что чувствуете и что вам нужно. Вы - не болезнь.",
        "Для меня именно в этом смысл медицины.",
      ],
      quote: '"Секрет ухода за пациентом заключается в искреннем интересе к пациенту."',
      quoteAuthor: "Francis Weld Peabody",
      chatImageAlt: "Чат в WhatsApp",
      features: [
        {
          title: "Достаточное время",
          description: "Каждая консультация длится 45-60 минут. Без спешки и без перебиваний.",
        },
        {
          title: "Активное слушание",
          description:
            "Мы начинаем с разговора о вашем самочувствии, переживаниях и целях по здоровью.",
        },
        {
          title: "Совместные решения",
          description:
            "Мы вместе определяем лучший план действий. Ваше мнение всегда имеет значение.",
        },
        {
          title: "Понятные объяснения",
          description: "Я объясняю все простыми словами, без лишнего медицинского жаргона.",
        },
      ],
    },
    contact: {
      badge: "Контакты",
      title: "Запишитесь на консультацию",
      description:
        "Я здесь, чтобы помочь вам. Свяжитесь со мной, чтобы записаться на прием или задать вопросы.",
      successTitle: "Сообщение отправлено!",
      successDescription: "Я свяжусь с вами в ближайшее время.",
      submitSending: "Отправка...",
      submitRequest: "Отправить запрос",
      sendError: "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.",
      detailsTitle: "Контактная информация",
      followMe: "Подписывайтесь",
      labels: {
        fullName: "Полное имя",
        phone: "Телефон",
        email: "Электронная почта",
        reason: "Причина обращения",
        message: "Сообщение (необязательно)",
      },
      placeholders: {
        fullName: "Ваше имя",
        phone: "Ваш телефон",
        email: "you@email.com",
        reason: "Напр.: Общая консультация, контроль, и т.д.",
        message: "Расскажите подробнее о вашей ситуации...",
      },
      contactInfoLabels: {
        phone: "Телефон",
        whatsapp: "WhatsApp",
        email: "Эл. почта",
      },
      socialAria: {
        instagram: "Instagram",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      brandDescription:
        "Врач с международной подготовкой, преданная вашему здоровью. Качественная медицинская помощь с человеческим теплом.",
      navigationTitle: "Навигация",
      contactTitle: "Контакты",
      rightsReserved: "Все права защищены.",
      madeWith: "Сделано с",
      forPatients: "для моих пациентов",
    },
  },
} as const

export function getTranslations(language: Language) {
  return translations[language]
}
