export interface DoctorProfile {
  name: string;
  qualifications: string;
  degree: string;
  degreeCollege: string;
  degreePeriod: string;
  experienceHospital: string;
  experiencePeriod: string;
  establishedYear: number;
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    locality: string;
    city: string;
    pinCode: string;
    country: string;
    full: string;
  };
  openingHours: {
    days: string;
    morning: string;
    evening: string;
    emergency: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  condition: string;
  solution: string;
  category: 'General' | 'Restorative' | 'Cosmetic' | 'Periodontics' | 'Emergency';
  icon: string;
  urgencyLevel?: 'routine' | 'priority' | 'emergency';
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage: string;
  afterImage: string;
  timeframe: string;
  representativeNote: string;
}

export interface PatientReview {
  id: string;
  rating: number;
  quote: string;
  author: string;
  treatmentType: string;
  date: string;
  isVerified: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  icon: string;
}

export interface AppointmentFormInput {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  dentalConcern: string;
}
