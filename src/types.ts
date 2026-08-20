export type Language = "en" | "km";

export interface TranslationContent {
  nav: {
    howItWorks: string;
    demo: string;
    whySastra: string;
    joinEarlyAccess: string;
  };
  hero: {
    statusBadge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    description: string;
    watchDemo: string;
    joinEarlyAccess: string;
    gradeTarget: string;
    floatingCard1Title: string;
    floatingCard1Sub: string;
    floatingCard2Title: string;
    floatingCard2Sub: string;
    phoneScreenTitle: string;
    phoneScreenTagline: string;
    phoneScreenGetStarted: string;
    phoneScreenGoogle: string;
  };
  demo: {
    sectionLabel: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    description: string;
    conceptNote: string;
    duration: string;
    homeworkCardTag: string;
    homeworkCardTitle: string;
    homeworkCardSubtitle: string;
    videoCaption: string;
    playVideo: string;
    closeModal: string;
  };
  howItWorks: {
    sectionLabel: string;
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      iconType: "bolt" | "khmer" | "sparkle" | "check";
    }>;
  };
  chatPreview: {
    sectionLabel: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    conceptNote: string;
    chatTitle: string;
    chatStatus: string;
    studentMessage: string;
    initialResponse: string;
    replyPrompt: string;
    option1: string;
    option2: string;
    option1Response: string;
    option2Response: string;
    tryAgain: string;
  };
  whySastra: {
    sectionLabel: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cards: Array<{
      title: string;
      description: string;
      iconType: "khmer" | "arrow" | "home";
    }>;
  };
  mvpStatus: {
    sectionLabel: string;
    titleLine1: string;
    titleLine2: string;
    focusCardTitle: string;
    focusItems: string[];
    inDevCardTitle: string;
    inDevItems: string[];
  };
  earlyAccess: {
    sectionLabel: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    description: string;
    inputPlaceholder: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
    privacyNote: string;
  };
  footer: {
    brandDescription: string;
    links: {
      howItWorks: string;
      demo: string;
      whySastra: string;
      privacy: string;
      contact: string;
    };
    copyright: string;
  };
  videoModal: {
    title: string;
    subtitle: string;
    lessonTitle: string;
    lessonGrade: string;
    explanation1: string;
    explanation2: string;
    formula: string;
    result: string;
    close: string;
  };
}
