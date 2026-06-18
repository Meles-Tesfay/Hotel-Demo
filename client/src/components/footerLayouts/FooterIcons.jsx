import React from 'react';

export const GlobeIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

export const BookOpenIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);

export const HotelIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

export const ScaleIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1" />
        <path d="M18 8h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4" />
        <path d="M12 2v20" />
        <path d="M5 8h14" />
    </svg>
);

export const LightbulbIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
    </svg>
);

export const HandshakeIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

export const PlaneIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7 3.5 8.5l7.5 4.5-4 4-2.5-.5L3 18l3 1.5L7.5 22.5 9.5 21l-.5-2.5 4-4 4.5 7.5z" />
    </svg>
);

export const UtensilsIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <line x1="7" y1="2" x2="7" y2="15" />
        <line x1="3" y1="15" x2="11" y2="15" />
        <line x1="7" y1="15" x2="7" y2="22" />
        <path d="M18 2v13h2a2 2 0 0 0 2-2V2H18z" />
        <line x1="20" y1="15" x2="20" y2="22" />
    </svg>
);

export const GemIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M6 3h12l4 6-10 12L2 9z" />
        <path d="M11 3 8 9l4 12 4-12-3-6" />
        <path d="M2 9h20" />
    </svg>
);

export const LeafIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z" />
        <path d="M9 22v-4h4" />
    </svg>
);

export const BarChartIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
);

export const TargetIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

export const TagIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
);

export const LockIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

export const AccessibilityIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <circle cx="16" cy="4" r="1" />
        <path d="m18 19 1-7-6 1" />
        <path d="m5 8 3-3 5.5 2-2.36 4.72A3 3 0 1 1 8 13.4" />
        <path d="M13.75 16h4.5" />
    </svg>
);

export const EyeIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export const PawIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <circle cx="12" cy="5" r="2" />
        <circle cx="8" cy="7" r="2" />
        <circle cx="16" cy="7" r="2" />
        <circle cx="5" cy="11" r="2" />
        <circle cx="19" cy="11" r="2" />
        <path d="M12 21c3.5 0 6-2.5 6-6.5S15.5 11 12 11s-6 3.5-6 7.5 2.5 6.5 6 6.5z" />
    </svg>
);

export const PhoneIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

export const BriefcaseIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

export const CreditCardIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
);

export const WrenchIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

export const LockKeyholeIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <rect width="18" height="12" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" />
        <path d="M12 17v2" />
    </svg>
);

export const CheckCircleIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

export const ClipboardIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
);

export const ShieldIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

export const HomeIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

export const PalmIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M13 8c0-2.76-2.24-5-5-5S3 5.24 3 8h10z" />
        <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c2.76 0 5 2.24 5 5h-9.5c0-1.34.37-2.58 1-3.86z" />
        <path d="M5.8 22a8 8 0 0 1 2.2-6.5M10.2 22a8 8 0 0 0-2.2-6.5" />
    </svg>
);

export const BuildingIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="16" />
        <line x1="15" y1="22" x2="15" y2="16" />
        <line x1="9" y1="16" x2="15" y2="16" />
        <path d="M8 6h2v2H8V6zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm6-8h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
    </svg>
);

export const CalendarIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

export const ReceiptIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" />
        <path d="M16 8H8" />
        <path d="M16 12H8" />
        <path d="M13 16H8" />
    </svg>
);

export const BellIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
);

export const XIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export const MessageSquareIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

export const MailIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

export const KeyIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current ${className || ''}`} {...props}>
        <circle cx="7.5" cy="15.5" r="5.5" />
        <path d="m21 2-9.6 9.6" />
        <path d="m15.5 7.5 3 3M17.5 5.5l3 3" />
    </svg>
);

const lookupMap = {
    // Emojis for backward compatibility
    '🌍': GlobeIcon,
    '📚': BookOpenIcon,
    '🏨': HotelIcon,
    '⚖️': ScaleIcon,
    '💡': LightbulbIcon,
    '🤝': HandshakeIcon,
    '✈️': PlaneIcon,
    '🍽️': UtensilsIcon,
    '💎': GemIcon,
    '🌿': LeafIcon,
    '📊': BarChartIcon,
    '🎯': TargetIcon,
    '🏷️': TagIcon,
    '🔒': LockIcon,
    '♿': AccessibilityIcon,
    '👁️': EyeIcon,
    '🐕': PawIcon,
    '📞': PhoneIcon,
    '🧳': BriefcaseIcon,
    '💳': CreditCardIcon,
    '🔧': WrenchIcon,
    '🔐': LockKeyholeIcon,
    '✅': CheckCircleIcon,
    '📋': ClipboardIcon,
    '🛡️': ShieldIcon,
    '🏡': HomeIcon,
    '🌴': PalmIcon,
    '🏙️': BuildingIcon,
    '📅': CalendarIcon,
    '🧾': ReceiptIcon,
    '🛎️': BellIcon,
    '❌': XIcon,
    '💬': MessageSquareIcon,

    // String keys for modern usage
    'globe': GlobeIcon,
    'book-open': BookOpenIcon,
    'hotel': HotelIcon,
    'scale': ScaleIcon,
    'lightbulb': LightbulbIcon,
    'handshake': HandshakeIcon,
    'plane': PlaneIcon,
    'utensils': UtensilsIcon,
    'gem': GemIcon,
    'leaf': LeafIcon,
    'bar-chart': BarChartIcon,
    'target': TargetIcon,
    'tag': TagIcon,
    'lock': LockIcon,
    'accessibility': AccessibilityIcon,
    'eye': EyeIcon,
    'paw': PawIcon,
    'phone': PhoneIcon,
    'briefcase': BriefcaseIcon,
    'credit-card': CreditCardIcon,
    'wrench': WrenchIcon,
    'lock-keyhole': LockKeyholeIcon,
    'check-circle': CheckCircleIcon,
    'clipboard': ClipboardIcon,
    'shield': ShieldIcon,
    'home': HomeIcon,
    'palm': PalmIcon,
    'building': BuildingIcon,
    'calendar': CalendarIcon,
    'receipt': ReceiptIcon,
    'bell': BellIcon,
    'x': XIcon,
    'message-square': MessageSquareIcon,
    'mail': MailIcon,
    'key': KeyIcon,
};

export const FooterIcon = ({ name, className, ...props }) => {
    const Comp = lookupMap[name];
    if (!Comp) return null;
    return <Comp className={className} {...props} />;
};


