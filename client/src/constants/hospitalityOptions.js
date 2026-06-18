export const HOSPITALITY_GROUPS = [
    {
        label: 'Dining & Drinks',
        options: ['Fast Food', 'Pasta', 'Pizza', 'Drinks', 'Breakfast', 'Desserts', 'Local Cuisine', 'Bar & Lounge'],
    },
    {
        label: 'Wellness & Spa',
        options: ['Massage', 'Spa Treatment', 'Sauna & Steam', 'Yoga & Fitness', 'Beauty & Salon'],
    },
    {
        label: 'Hotel Services',
        options: ['Room Service', 'Concierge', 'Laundry', 'Airport Transfer', 'Valet Parking'],
    },
    {
        label: 'Experiences',
        options: ['Tours & Activities', 'Live Entertainment', 'Pool & Recreation', 'Conference & Events'],
    },
    {
        label: 'Other',
        options: ['Other'],
    },
]

export const ALL_CATEGORIES = HOSPITALITY_GROUPS.flatMap((g) => g.options)

const DINING = ['Fast Food', 'Pasta', 'Pizza', 'Drinks', 'Breakfast', 'Desserts', 'Local Cuisine', 'Bar & Lounge']
const WELLNESS = ['Massage', 'Spa Treatment', 'Sauna & Steam', 'Yoga & Fitness', 'Beauty & Salon']
const SERVICES = ['Room Service', 'Concierge', 'Laundry', 'Airport Transfer', 'Valet Parking']
const EXPERIENCES = ['Tours & Activities', 'Live Entertainment', 'Pool & Recreation', 'Conference & Events']

const DINING_FEATURES = [
    'Vegetarian', 'Vegan', 'Gluten Free', 'Spicy', 'Chef Special',
    'Outdoor Dining', 'Live Music', 'Kids Menu',
]
const WELLNESS_FEATURES = [
    'Deep Tissue', 'Swedish Massage', 'Hot Stone', 'Aromatherapy',
    'Couples Session', 'In-room Service', '60 min Session', '90 min Session',
    'Certified Therapist', 'Private Suite',
]
const SERVICE_FEATURES = [
    '24/7 Available', 'Same-day Service', 'Express Service',
    'In-room Delivery', 'Hotel Guests Only',
]
const EXPERIENCE_FEATURES = [
    'Guided Tour', 'Group Activity', 'Private Booking',
    'Equipment Included', 'Outdoor', 'Indoor',
]
const GENERAL_FEATURES = [
    'Advance Booking', 'Walk-in Welcome', 'Premium / Luxury',
    'Budget Friendly', 'Guest Discount',
]

export const getFeatureOptions = (category) => {
    if (DINING.includes(category)) return [...DINING_FEATURES, ...GENERAL_FEATURES]
    if (WELLNESS.includes(category)) return [...WELLNESS_FEATURES, ...GENERAL_FEATURES]
    if (SERVICES.includes(category)) return [...SERVICE_FEATURES, ...GENERAL_FEATURES]
    if (EXPERIENCES.includes(category)) return [...EXPERIENCE_FEATURES, ...GENERAL_FEATURES]
    return [...GENERAL_FEATURES, 'Custom Service', 'On-site', 'In-room']
}

export const buildEmptyFeatures = (options) =>
    options.reduce((acc, f) => ({ ...acc, [f]: false }), {})
