import { DoctorProfile, ServiceItem, BeforeAfterCase, PatientReview, WhyChooseItem } from '../types';
import cavityBeforeImg from '../assets/images/teeth_cavity_before_1787920138452.jpg';
import cleanAfterImg from '../assets/images/teeth_clean_after_1787920155535.jpg';

export const CLINIC_DATA: DoctorProfile = {
  name: "Dr. Danish Alam",
  qualifications: "BDS | Aligarh Muslim University",
  degree: "BDS",
  degreeCollege: "Aligarh Muslim University",
  degreePeriod: "2001–2006",
  experienceHospital: "MAIDS, Delhi (Maulana Azad Institute of Dental Sciences)",
  experiencePeriod: "2009–2014",
  establishedYear: 2015,
  phone: "8130937598",
  whatsapp: "8130937598",
  email: "Danishalam@123gmail.com",
  address: {
    line1: "A-24, 2nd Floor",
    line2: "Green Park Main Market",
    locality: "Green Park",
    city: "New Delhi",
    pinCode: "110016",
    country: "India",
    full: "A-24, 2nd Floor, Green Park Main Market, Green Park, New Delhi – 110016, India"
  },
  openingHours: {
    days: "Monday – Sunday",
    morning: "10:00 AM – 2:00 PM",
    evening: "5:00 PM – 10:00 PM",
    emergency: "24 Hours (24/7 Emergency Availability)"
  }
};

export const TRUST_CARDS = [
  {
    id: "experienced-care",
    title: "Experienced Dental Care",
    description: "Professional dental care backed by clinical experience and patient-centred methodology.",
    icon: "Award"
  },
  {
    id: "maids-experience",
    title: "MAIDS Experience",
    description: "Practised at Maulana Azad Institute of Dental Sciences (MAIDS), Delhi from 2009–2014.",
    icon: "Hospital"
  },
  {
    id: "established-2015",
    title: "Since 2015",
    description: "Serving patients in Green Park, New Delhi through a dedicated, ethical dental practice.",
    icon: "Building2"
  },
  {
    id: "emergency-support",
    title: "24/7 Emergency Support",
    description: "Round-the-clock emergency dental availability for acute pain, trauma, and urgent conditions.",
    icon: "ClockAlert"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "toothache",
    title: "Toothache",
    condition: "Acute or throbbing dental pain",
    solution: "Diagnosis and appropriate treatment to identify and address the cause of dental pain.",
    category: "Emergency",
    icon: "Zap",
    urgencyLevel: "priority"
  },
  {
    id: "dental-cavities",
    title: "Dental Cavities",
    condition: "Enamel breakdown & decay",
    solution: "Evaluation and restorative treatment for decayed teeth using composite tooth-coloured fillings.",
    category: "Restorative",
    icon: "Sparkles",
    urgencyLevel: "routine"
  },
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    condition: "Infected nerve pulp & deep pain",
    solution: "Treatment for infected or severely damaged tooth pulp to preserve natural tooth structure.",
    category: "Restorative",
    icon: "Activity",
    urgencyLevel: "priority"
  },
  {
    id: "tooth-extraction",
    title: "Tooth Extraction",
    condition: "Unrestorable or impacted tooth",
    solution: "Professional removal of teeth when extraction is clinically necessary, performed with gentle technique.",
    category: "General",
    icon: "Scissors",
    urgencyLevel: "routine"
  },
  {
    id: "gum-disease",
    title: "Gum Disease",
    condition: "Gingivitis & periodontal inflammation",
    solution: "Assessment and treatment of gum inflammation and periodontal problems to restore oral health.",
    category: "Periodontics",
    icon: "ShieldAlert",
    urgencyLevel: "priority"
  },
  {
    id: "bleeding-gums",
    title: "Bleeding Gums",
    condition: "Bleeding during brushing or eating",
    solution: "Evaluation of possible gum disease and appropriate periodontal care to prevent progression.",
    category: "Periodontics",
    icon: "Droplets",
    urgencyLevel: "priority"
  },
  {
    id: "tooth-sensitivity",
    title: "Tooth Sensitivity",
    condition: "Discomfort with hot/cold temperatures",
    solution: "Assessment and management of sensitivity caused by enamel wear, receding gums, or other dental conditions.",
    category: "General",
    icon: "Flame",
    urgencyLevel: "routine"
  },
  {
    id: "broken-chipped-teeth",
    title: "Broken or Chipped Teeth",
    condition: "Trauma, fractures, or cusp breaks",
    solution: "Restorative solutions including dental bonding, inlays, or crowns to repair damaged teeth.",
    category: "Restorative",
    icon: "ShieldCheck",
    urgencyLevel: "priority"
  },
  {
    id: "missing-teeth",
    title: "Missing Teeth",
    condition: "Gaps from extracted or lost teeth",
    solution: "Discuss suitable tooth-replacement options including dental bridges, crowns, and prosthetics.",
    category: "Restorative",
    icon: "Grid",
    urgencyLevel: "routine"
  },
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning",
    condition: "Calculus, plaque buildup & staining",
    solution: "Professional dental cleaning, ultrasonic scaling, and plaque/tartar management for preventive wellness.",
    category: "General",
    icon: "Sparkle",
    urgencyLevel: "routine"
  },
  {
    id: "bad-breath",
    title: "Bad Breath",
    condition: "Persistent halitosis",
    solution: "Dental evaluation to identify and manage oral causes of persistent bad breath effectively.",
    category: "General",
    icon: "Wind",
    urgencyLevel: "routine"
  },
  {
    id: "wisdom-tooth-problems",
    title: "Wisdom Tooth Problems",
    condition: "Impacted, painful, or misaligned third molars",
    solution: "Assessment and treatment planning for painful, impacted, or problematic wisdom teeth.",
    category: "Emergency",
    icon: "HelpCircle",
    urgencyLevel: "priority"
  },
  {
    id: "crooked-teeth",
    title: "Crooked / Misaligned Teeth",
    condition: "Crowding, spacing, or bite misalignment",
    solution: "Assessment and discussion of appropriate orthodontic treatment options tailored to individual alignment.",
    category: "Cosmetic",
    icon: "Maximize2",
    urgencyLevel: "routine"
  },
  {
    id: "stained-teeth",
    title: "Stained / Discoloured Teeth",
    condition: "Tea/coffee stains or age discolouration",
    solution: "Evaluation and suitable cosmetic dental options for improving tooth appearance and brightness.",
    category: "Cosmetic",
    icon: "Sun",
    urgencyLevel: "routine"
  },
  {
    id: "dental-emergencies",
    title: "Dental Emergencies",
    condition: "Severe trauma, abscess, or unbearable pain",
    solution: "Prompt evaluation for urgent dental problems, with emergency availability 24/7 in Green Park.",
    category: "Emergency",
    icon: "AlertOctagon",
    urgencyLevel: "emergency"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Teeth with Cavity Repair & Aesthetic Restoration",
    category: "Restorative Dentistry",
    description: "Restoration of decayed teeth with cavities using precision composite resin, resulting in completely clean, natural, and clear teeth.",
    beforeLabel: "Teeth with Cavity",
    afterLabel: "Clean and Clear Teeth",
    beforeImage: cavityBeforeImg,
    afterImage: cleanAfterImg,
    timeframe: "Single Visit",
    representativeNote: "Clinical case showing diagnosis of tooth cavity decay treated with composite filling and ultrasonic prophylaxis to achieve clean and clear teeth."
  },
  {
    id: "case-2",
    title: "Tooth Discolouration & Scaling Polish",
    category: "Cosmetic Dentistry",
    description: "Targeted treatment for extrinsic staining and enamel discolouration to enhance natural smile brightness and oral cleanliness.",
    beforeLabel: "Stained Enamel with Plaque",
    afterLabel: "Clean & Bright Enamel",
    beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    timeframe: "2 Visits",
    representativeNote: "Representative case example for enamel stain removal and clinical brightening."
  },
  {
    id: "case-3",
    title: "Chipped Incisor Tooth Repair",
    category: "Aesthetic Restoration",
    description: "Reconstruction of fractured upper central incisor corner restoring natural anatomical edge.",
    beforeLabel: "Chipped Incisal Edge",
    afterLabel: "Restored Anatomical Contour",
    beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    timeframe: "Single Appointment",
    representativeNote: "Representative clinical example of direct composite bonding on fractured anterior incisor."
  },
  {
    id: "case-4",
    title: "Professional Dental Cleaning & Scaling",
    category: "Periodontal Care",
    description: "Ultrasonic scaling and prophylaxis to remove stubborn calculus, tartar, and plaque deposits from gum margins.",
    beforeLabel: "Calculus & Plaque Buildup",
    afterLabel: "Clean and Clear Teeth",
    beforeImage: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    timeframe: "45 Minutes",
    representativeNote: "Representative case illustrating ultrasonic plaque and calculus removal."
  },
  {
    id: "case-5",
    title: "Smile Alignment & Contour Improvement",
    category: "Orthodontic & Restorative",
    description: "Correction of uneven incisal edges and minor misalignment for balanced bite and aesthetics.",
    beforeLabel: "Uneven Contour & Gaps",
    afterLabel: "Aligned & Symmetrical Smile",
    beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    timeframe: "Clinical Course",
    representativeNote: "Representative clinical example of smile contouring and minor orthodontic consultation."
  }
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    rating: 5,
    quote: "Professional care, clear communication and a very comfortable experience. Dr. Danish Alam took the time to explain every step before proceeding with treatment.",
    author: "Verified Patient",
    treatmentType: "Root Canal & Crown",
    date: "Green Park Patient",
    isVerified: true
  },
  {
    id: "rev-2",
    rating: 5,
    quote: "Dr. Danish Alam explained the treatment clearly and made the entire process comfortable. The clinic in Green Park is very clean, hygienic and well-maintained.",
    author: "Verified Patient",
    treatmentType: "Dental Cavity & Filling",
    date: "South Delhi Resident",
    isVerified: true
  },
  {
    id: "rev-3",
    rating: 5,
    quote: "I visited for severe toothache in the evening. The clinical assessment was thorough and accurate. Dr. Danish provided immediate relief with great professionalism.",
    author: "Verified Patient",
    treatmentType: "Emergency Consultation",
    date: "Hauz Khas Resident",
    isVerified: true
  },
  {
    id: "rev-4",
    rating: 5,
    quote: "Got regular scaling and teeth cleaning done. Very gentle approach, no unnecessary procedures suggested, and transparent advice on daily oral care.",
    author: "Verified Patient",
    treatmentType: "Teeth Cleaning & Scaling",
    date: "Safdarjung Resident",
    isVerified: true
  },
  {
    id: "rev-5",
    rating: 5,
    quote: "Courteous consultation and meticulous attention to detail. Having an experienced doctor with MAIDS background in Green Park gives great confidence.",
    author: "Verified Patient",
    treatmentType: "Gum Health Evaluation",
    date: "Green Park Extension",
    isVerified: true
  },
  {
    id: "rev-6",
    rating: 5,
    quote: "Very calm demeanor and genuine patient-first approach. Explained all options for my chipped tooth so I could make an informed choice.",
    author: "Verified Patient",
    treatmentType: "Tooth Repair",
    date: "South Extension Patient",
    isVerified: true
  }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: "exp-prof",
    title: "Experienced Dental Professional",
    description: "Over a decade of dedicated clinical practice diagnosing and treating a broad spectrum of dental conditions.",
    badge: "Clinical Background",
    icon: "Stethoscope"
  },
  {
    id: "amu-degree",
    title: "BDS from Aligarh Muslim University",
    description: "Foundational dental degree (2001–2006) from one of India's premier academic and medical institutions.",
    badge: "Academic Credential",
    icon: "GraduationCap"
  },
  {
    id: "maids-experience",
    title: "MAIDS, Delhi Experience",
    description: "Practical clinical exposure at Maulana Azad Institute of Dental Sciences, Delhi between 2009 and 2014.",
    badge: "Top Institute Practice",
    icon: "Building"
  },
  {
    id: "patient-centred",
    title: "Patient-Centred Care",
    description: "Emphasis on transparent explanations, comfortable treatment protocols, and ethical treatment planning.",
    badge: "Ethical Approach",
    icon: "HeartHandshake"
  },
  {
    id: "hygienic-env",
    title: "Modern & Hygienic Environment",
    description: "Strict sterilization standards and clean clinical protocol following modern medical infection control.",
    badge: "Strict Sterilization",
    icon: "ShieldCheck"
  },
  {
    id: "emergency-24-7",
    title: "24/7 Emergency Availability",
    description: "On-call availability for urgent dental trauma, acute pain relief, and emergency evaluations at all hours.",
    badge: "Round the Clock",
    icon: "ClockAlert"
  }
];
