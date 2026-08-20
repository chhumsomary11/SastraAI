import { Language, TranslationContent } from "./types";

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      howItWorks: "How it works",
      demo: "Demo",
      whySastra: "Why Sastra",
      joinEarlyAccess: "Join early access",
    },
    hero: {
      statusBadge: "MVP in development · Early access opening soon",
      titleLine1: "A patient tutor",
      titleLine2: "for",
      titleLine3: "every question.",
      description:
        "Sastra AI helps Cambodian students understand English math and science homework through clear, step-by-step guidance in Khmer.",
      watchDemo: "Watch the demo",
      joinEarlyAccess: "Join early access",
      gradeTarget: "Made for Cambodian students in Grades 1–12",
      floatingCard1Title: "Ask naturally",
      floatingCard1Sub: "In your own language",
      floatingCard2Title: "Learn the method",
      floatingCard2Sub: "One step at a time",
      phoneScreenTitle: "Sastra AI",
      phoneScreenTagline:
        "Your personal AI study partner\nWhere curiosity meets clarity",
      phoneScreenGetStarted: "Get Started",
      phoneScreenGoogle: "Login with Google",
    },
    demo: {
      sectionLabel: "PRODUCT DEMONSTRATION",
      titleLine1: "See a lesson,",
      titleLine2: "not just an",
      titleLine3: "answer.",
      description:
        "Watch how a student uploads homework, asks in Khmer, and learns through guided explanations.",
      conceptNote:
        "Concept demonstration · The live chatbot is still in development",
      duration: "01:00",
      homeworkCardTag: "ENGLISH HOMEWORK",
      homeworkCardTitle: "Find the area of a rectangle",
      homeworkCardSubtitle: "សូមជួយពន្យល់...",
      videoCaption: "See a lesson, not just an answer.",
      playVideo: "Play demonstration",
      closeModal: "Close video preview",
    },
    howItWorks: {
      sectionLabel: "HOW IT WORKS",
      title: "From stuck to confident—in four simple steps.",
      steps: [
        {
          number: "01",
          title: "Share the question",
          description:
            "Take a photo of English math or science homework, or type it in.",
          iconType: "bolt",
        },
        {
          number: "02",
          title: "Ask in Khmer",
          description: "Use natural Khmer to explain what feels confusing.",
          iconType: "khmer",
        },
        {
          number: "03",
          title: "Learn each step",
          description:
            "Sastra explains the English terms and guides the method clearly.",
          iconType: "sparkle",
        },
        {
          number: "04",
          title: "Practice independently",
          description:
            "Try a similar question and build confidence through practice.",
          iconType: "check",
        },
      ],
    },
    chatPreview: {
      sectionLabel: "GUIDED CHAT PREVIEW",
      titleLine1: "Experience the",
      titleLine2: "learning flow.",
      description:
        "This guided preview follows a prepared lesson so families can safely understand the planned Sastra AI experience.",
      conceptNote:
        "Concept demonstration · The live chatbot is still in development",
      chatTitle: "Sastra AI",
      chatStatus: "Online · Ready to help",
      studentMessage: "Please explain this problem in Khmer.",
      initialResponse:
        "Of course. We need to find the area of a rectangle. First, what information does the question give us?",
      replyPrompt: "CHOOSE A REPLY TO CONTINUE",
      option1: "Length = 8 cm, width = 5 cm",
      option2: "I'm not sure",
      option1Response:
        "Great observation! The formula for the area of a rectangle is: Area = length × width.\n\nSo: 8 cm × 5 cm = 40 cm².\n\nWould you like to try a quick practice question next?",
      option2Response:
        "No worries at all! Look closely at the diagram: the long side is marked 8 cm (length), and the vertical side is 5 cm (width). Now, do you recall the formula for the area of a rectangle?",
      tryAgain: "Reset demonstration flow",
    },
    whySastra: {
      sectionLabel: "WHY SASTRA",
      titleLine1: "Built for understanding—",
      titleLine2: "not shortcut answers.",
      description:
        "Sastra AI helps Cambodian students understand English math and science homework through clear, step-by-step guidance in Khmer.",
      cards: [
        {
          title: "Khmer-first support",
          description:
            "Students can think and ask naturally while learning English subject terms.",
          iconType: "khmer",
        },
        {
          title: "Guided reasoning",
          description:
            "Sastra uses questions, hints and examples before revealing an answer.",
          iconType: "arrow",
        },
        {
          title: "Designed for home",
          description:
            "Friendly support for students and parents when a teacher is not available.",
          iconType: "home",
        },
      ],
    },
    mvpStatus: {
      sectionLabel: "MVP STATUS",
      titleLine1: "What are we",
      titleLine2: "building now?",
      focusCardTitle: "MVP focus",
      focusItems: [
        "Step-by-step tutoring flow",
        "Khmer and English learning support",
        "Math homework guidance",
      ],
      inDevCardTitle: "In development",
      inDevItems: [
        "Homework image recognition",
        "Science lessons and diagrams",
        "Personal learning history",
      ],
    },
    earlyAccess: {
      sectionLabel: "BECOME AN EARLY TESTER",
      titleLine1: "Help us build a better",
      titleLine2: "tutor for Cambodian",
      titleLine3: "students.",
      description:
        "Join for development updates and an invitation when private testing begins.",
      inputPlaceholder: "Enter your email address",
      submitButton: "Join early access",
      submitting: "Saving...",
      successMessage: "Thank you! You're on the early-access list.",
      errorMessage: "Please enter a valid email address.",
      privacyNote:
        "We respect your privacy and will never share your contact details.",
    },
    footer: {
      brandDescription:
        "Sastra AI is a patient, step-by-step AI home tutor built specifically for Cambodian students in Grades 1–12 to master English math and science homework in Khmer.",
      links: {
        howItWorks: "How it works",
        demo: "Demo",
        whySastra: "Why Sastra",
        privacy: "Privacy",
        contact: "Contact",
      },
      copyright: "© 2026 Sastra AI. All rights reserved.",
    },
    videoModal: {
      title: "Sastra AI Lesson Walkthrough",
      subtitle: "Sample Grade 6 Math Homework Demonstration",
      lessonTitle: "Problem: Finding the Area of a Rectangle",
      lessonGrade: "Grade 5–7 English Mathematics Homework",
      explanation1:
        "Step 1: Identify given values (Length = 8 cm, Width = 5 cm)",
      explanation2: "Step 2: Apply the geometric formula in Khmer and English",
      formula: "Area (ផ្ទៃក្រឡា) = Length (បណ្តោយ) × Width (ទទឹង)",
      result: "Calculation: 8 cm × 5 cm = 40 cm²",
      close: "Close",
    },
  },
  km: {
    nav: {
      howItWorks: "របៀបដំណើរការ",
      demo: "ការបង្ហាញ",
      whySastra: "ហេតុអ្វីជ្រើសរើស សាស្ត្រា",
      joinEarlyAccess: "ចុះឈ្មោះដំបូង",
    },
    hero: {
      statusBadge: "MVP កំពុងអភិវឌ្ឍ · នឹងបើកឱ្យសាកល្បងឆាប់ៗ",
      titleLine1: "គ្រូបង្រៀនដ៏អត់ធ្មត់",
      titleLine2: "សម្រាប់",
      titleLine3: "គ្រប់សំណួរទាំងអស់។",
      description:
        "Sastra AI ជួយសិស្សកម្ពុជាឱ្យយល់ច្បាស់ពីកិច្ចការផ្ទះគណិតវិទ្យា និងវិទ្យាសាស្ត្រជាភាសាអង់គ្លេស តាមរយៈការពន្យល់ណែនាំមួយជំហានម្តងៗជាភាសាខ្មែរ។",
      watchDemo: "ទស្សនាការបង្ហាញ",
      joinEarlyAccess: "ចុះឈ្មោះសាកល្បង",
      gradeTarget: "បង្កើតឡើងសម្រាប់សិស្សកម្ពុជាថ្នាក់ទី ១ ដល់ទី ១២",
      floatingCard1Title: "សួរបែបធម្មជាតិ",
      floatingCard1Sub: "ជាភាសារបស់អ្នកផ្ទាល់",
      floatingCard2Title: "យល់ពីវិធីសាស្រ្ត",
      floatingCard2Sub: "មួយជំហានម្តងៗ",
      phoneScreenTitle: "សាស្ត្រា AI",
      phoneScreenTagline:
        "ដៃគូរៀនសូត្រ AI ផ្ទាល់ខ្លួនរបស់អ្នក\nទីដែលការចង់ដឹងជួបនឹងភាពច្បាស់លាស់",
      phoneScreenGetStarted: "ចាប់ផ្តើម",
      phoneScreenGoogle: "ចូលដោយប្រើ Google",
    },
    demo: {
      sectionLabel: "ការបង្ហាញពីផលិតផល",
      titleLine1: "មើលការបង្រៀន,",
      titleLine2: "មិនមែនត្រឹមតែ",
      titleLine3: "ចម្លើយនោះទេ។",
      description:
        "ទស្សនារបៀបដែលសិស្សផ្ញើរូបថតកិច្ចការផ្ទះ សួរជាភាសាខ្មែរ និងរៀនសូត្រតាមរយៈការពន្យល់ណែនាំជាជំហានៗ។",
      conceptNote:
        "ការបង្ហាញគំរូសាកល្បង · Chatbot ផ្ទាល់កំពុងស្ថិតក្នុងការអភិវឌ្ឍន៍",
      duration: "០១:០០",
      homeworkCardTag: "កិច្ចការផ្ទះអង់គ្លេស",
      homeworkCardTitle: "Find the area of a rectangle",
      homeworkCardSubtitle: "សូមជួយពន្យល់...",
      videoCaption: "មើលការបង្រៀន មិនមែនត្រឹមតែចម្លើយ។",
      playVideo: "ចាក់វីដេអូបង្ហាញ",
      closeModal: "បិទការបង្ហាញ",
    },
    howItWorks: {
      sectionLabel: "របៀបដំណើរការ",
      title: "ពីការទាល់គំនិត ទៅជាការជឿជាក់—ត្រឹម ៤ ជំហានងាយៗ។",
      steps: [
        {
          number: "01",
          title: "ផ្ញើសំណួរ",
          description:
            "ថតរូបកិច្ចការផ្ទះគណិត ឬវិទ្យាសាស្ត្រជាភាសាអង់គ្លេស ឬវាយបញ្ចូលសំណួរ។",
          iconType: "bolt",
        },
        {
          number: "02",
          title: "សួរជាភាសាខ្មែរ",
          description:
            "ប្រើប្រាស់ភាសាខ្មែរធម្មតាដើម្បីប្រាប់ពីចំណុចដែលអ្នកមិនទាន់យល់ច្បាស់។",
          iconType: "khmer",
        },
        {
          number: "03",
          title: "រៀនតាមជំហាន",
          description:
            "សាស្ត្រាពន្យល់ពាក្យបច្ចេកទេសអង់គ្លេស និងបង្ហាញវិធីដោះស្រាយយ៉ាងក្បោះក្បាយ។",
          iconType: "sparkle",
        },
        {
          number: "04",
          title: "អនុវត្តដោយខ្លួនឯង",
          description:
            "សាកល្បងដោះស្រាយលំហាត់ស្រដៀងគ្នា ដើម្បីបង្កើនទំនុកចិត្តក្នុងការរៀន។",
          iconType: "check",
        },
      ],
    },
    chatPreview: {
      sectionLabel: "ការសាកល្បងជជែកណែនាំ",
      titleLine1: "សាកល្បងដំណើរការ",
      titleLine2: "រៀនសូត្រផ្ទាល់។",
      description:
        "ការបង្ហាញសាកល្បងនេះអនុវត្តតាមមេរៀនដែលបានរៀបចំទុក ដើម្បីឱ្យអាណាព្យាបាល និងសិស្សយល់ពីបទពិសោធន៍រៀនជាមួយ Sastra AI។",
      conceptNote:
        "ការបង្ហាញគំរូសាកល្បង · Chatbot ផ្ទាល់កំពុងស្ថិតក្នុងការអភិវឌ្ឍន៍",
      chatTitle: "Sastra AI",
      chatStatus: "អនឡាញ · ត្រៀមខ្លួនជួយ",
      studentMessage: "សូមជួយពន្យល់លំហាត់នេះជាភាសាខ្មែរ។",
      initialResponse:
        "ពិតជាបាន! យើងត្រូវរកផ្ទៃក្រឡារបស់ចតុកោណកែង។ ដំបូង តើលំហាត់បានផ្តល់ព័ត៌មានអ្វីខ្លះដល់យើង?",
      replyPrompt: "ជ្រើសរើសចម្លើយដើម្បីបន្ត",
      option1: "បណ្តោយ = 8 cm, ទទឹង = 5 cm",
      option2: "ខ្ញុំមិនទាន់ច្បាស់ទេ",
      option1Response:
        "ការសង្កេតល្អណាស់! រូបមន្តសម្រាប់រកផ្ទៃក្រឡាចតុកោណកែងគឺ៖ ផ្ទៃក្រឡា = បណ្តោយ × ទទឹង។\n\nដូច្នេះ៖ 8 cm × 5 cm = 40 cm²។\n\nតើប្អូនចង់សាកល្បងលំហាត់អនុវត្តបន្ទាប់ទេ?",
      option2Response:
        "មិនអីទេ! សូមមើលរូបភាព៖ ជ្រុងវែងមានប្រវែង 8 cm (បណ្តោយ) ហើយជ្រុងខ្លីមានប្រវែង 5 cm (ទទឹង)។ ឥឡូវ តើប្អូនចាំរូបមន្តរកផ្ទៃក្រឡាដែរឬទេ?",
      tryAgain: "ចាប់ផ្តើមការបង្ហាញឡើងវិញ",
    },
    whySastra: {
      sectionLabel: "ហេតុអ្វីជ្រើសរើស សាស្ត្រា",
      titleLine1: "បង្កើតឡើងដើម្បីការយល់ដឹង—",
      titleLine2: "មិនមែនគ្រាន់តែផ្លូវកាត់យកចម្លើយ។",
      description:
        "Sastra AI ជួយសិស្សកម្ពុជាឱ្យយល់ច្បាស់ពីកិច្ចការផ្ទះគណិតវិទ្យា និងវិទ្យាសាស្ត្រជាភាសាអង់គ្លេស តាមរយៈការពន្យល់ណែនាំមួយជំហានម្តងៗជាភាសាខ្មែរ។",
      cards: [
        {
          title: "ការគាំទ្រជាភាសាខ្មែរចម្បង",
          description:
            "សិស្សអាចគិត និងសួរសំណួរបែបធម្មជាតិ ព្រមទាំងរៀនពាក្យគន្លឹះភាសាអង់គ្លេសក្នុងពេលតែមួយ។",
          iconType: "khmer",
        },
        {
          title: "ការពន្យល់តាមហេតុផល",
          description:
            "សាស្ត្រាប្រើប្រាស់សំណួរបំផុសគំនិត ការណែនាំ និងឧទាហរណ៍ មុនពេលបង្ហាញដំណោះស្រាយចុងក្រោយ។",
          iconType: "arrow",
        },
        {
          title: "រចនាឡើងសម្រាប់គេហដ្ឋាន",
          description:
            "ការគាំទ្រដ៏កក់ក្តៅសម្រាប់សិស្ស និងមាតាបិតា នៅពេលដែលមិនមានលោកគ្រូអ្នកគ្រូនៅក្បែរ។",
          iconType: "home",
        },
      ],
    },
    mvpStatus: {
      sectionLabel: "ស្ថានភាព MVP",
      titleLine1: "តើយើងកំពុង",
      titleLine2: "អភិវឌ្ឍអ្វីខ្លះ?",
      focusCardTitle: "ការផ្តោតសំខាន់នៃ MVP",
      focusItems: [
        "ដំណើរការបង្រៀនមួយជំហានម្តងៗ",
        "ការគាំទ្រការរៀនទ្វេភាសា ខ្មែរ និងអង់គ្លេស",
        "ការណែនាំកិច្ចការផ្ទះគណិតវិទ្យា",
      ],
      inDevCardTitle: "កំពុងស្ថិតក្នុងការអភិវឌ្ឍ",
      inDevItems: [
        "ការសម្គាល់ និងអានរូបថតកិច្ចការផ្ទះ",
        "មេរៀន និងដ្យាក្រាមវិទ្យាសាស្ត្រ",
        "កំណត់ត្រាប្រវត្តិការរៀនផ្ទាល់ខ្លួន",
      ],
    },
    earlyAccess: {
      sectionLabel: "ក្លាយជាអ្នកសាកល្បងដំបូង",
      titleLine1: "ចូលរួមជួយយើងបង្កើតគ្រូបង្រៀន",
      titleLine2: "ដ៏ល្អបំផុតសម្រាប់សិស្ស",
      titleLine3: "កម្ពុជា។",
      description:
        "ចុះឈ្មោះដើម្បីទទួលបានព័ត៌មានថ្មីៗពីការអភិវឌ្ឍ និងការអញ្ជើញសាកល្បងមុនគេបង្អស់។",
      inputPlaceholder: "បញ្ចូលអាសយដ្ឋានអ៊ីមែលរបស់អ្នក",
      submitButton: "ចុះឈ្មោះសាកល្បង",
      submitting: "កំពុងរក្សាទុក...",
      successMessage: "សូមអរគុណ! អ្នកបានចូលក្នុងបញ្ជីសាកល្បងដំបូងហើយ។",
      errorMessage: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ។",
      privacyNote:
        "យើងគោរពភាពឯកជនរបស់អ្នក និងមិនចែកចាយព័ត៌មានទំនាក់ទំនងរបស់អ្នកឡើយ។",
    },
    footer: {
      brandDescription:
        "Sastra AI គឺជាគ្រូបង្រៀន AI ដ៏អត់ធ្មត់ដែលបង្កើតឡើងជាពិសេសសម្រាប់សិស្សកម្ពុជាថ្នាក់ទី ១ ដល់ទី ១២ ដើម្បីយល់កិច្ចការផ្ទះគណិត និងវិទ្យាសាស្ត្រជាភាសាអង់គ្លេស តាមរយៈការពន្យល់ណែនាំជាភាសាខ្មែរ។",
      links: {
        howItWorks: "របៀបដំណើរការ",
        demo: "ការបង្ហាញ",
        whySastra: "ហេតុអ្វីជ្រើសរើស សាស្ត្រា",
        privacy: "គោលការណ៍ឯកជនភាព",
        contact: "ទំនាក់ទំនង",
      },
      copyright: "© ២០២៦ Sastra AI. រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    },
    videoModal: {
      title: "ការបង្ហាញមេរៀនជាមួយ Sastra AI",
      subtitle: "គំរូការដោះស្រាយកិច្ចការផ្ទះគណិតវិទ្យាថ្នាក់ទី ៦",
      lessonTitle: "លំហាត់៖ រកផ្ទៃក្រឡាចតុកោណកែង",
      lessonGrade: "កិច្ចការផ្ទះគណិតវិទ្យាភាសាអង់គ្លេសថ្នាក់ទី ៥–៧",
      explanation1:
        "ជំហានទី ១៖ កំណត់ទិន្នន័យដែលបានផ្តល់ (បណ្តោយ = 8 cm, ទទឹង = 5 cm)",
      explanation2:
        "ជំហានទី ២៖ អនុវត្តរូបមន្តគណិតវិទ្យាជាភាសាខ្មែរ និងអង់គ្លេស",
      formula: "ផ្ទៃក្រឡា (Area) = បណ្តោយ (Length) × ទទឹង (Width)",
      result: "ការគណនា៖ 8 cm × 5 cm = 40 cm²",
      close: "បិទ",
    },
  },
};
