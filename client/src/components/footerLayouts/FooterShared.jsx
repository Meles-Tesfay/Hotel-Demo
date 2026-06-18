import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const usePageScroll = (slug) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])
}

export const BackLink = ({ className = 'text-gray-400 hover:text-gray-700' }) => (
    <Link to="/" className={`inline-flex items-center gap-2 text-sm mb-8 transition-colors ${className}`}>
        <span>←</span> Home
    </Link>
)

export const ContactPanel = ({ block, theme = 'default' }) => {
    const styles = {
        default: 'bg-[#F6F9FC] border-gray-200',
        dark: 'bg-gray-900 text-white border-gray-800',
        orange: 'bg-gradient-to-br from-orange-50 to-pink-50 border-orange-200',
        emerald: 'bg-emerald-50 border-emerald-200',
    }
    return (
        <div className={`p-8 md:p-10 rounded-[2rem] border shadow-lg ${styles[theme] || styles.default}`}>
            <h2 className={`font-playfair text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{block.title}</h2>
            <p className={`leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{block.description}</p>
            <ul className="space-y-2">
                {block.details.map((line) => (
                    <li key={line} className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>• {line}</li>
                ))}
            </ul>
        </div>
    )
}
