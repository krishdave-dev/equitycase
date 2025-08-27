export interface FAQQuestion {
    id: string;
    question: string;
    answer: string;
}

export interface FAQSection {
    id: string;
    section_name: string;
    questions: FAQQuestion[];
}


