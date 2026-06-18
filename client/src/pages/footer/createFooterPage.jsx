import CareersLayout from '../../components/footerLayouts/CareersLayout'
import PressLayout from '../../components/footerLayouts/PressLayout'
import BlogLayout from '../../components/footerLayouts/BlogLayout'
import PartnersLayout from '../../components/footerLayouts/PartnersLayout'
import HelpLayout from '../../components/footerLayouts/HelpLayout'
import SafetyLayout from '../../components/footerLayouts/SafetyLayout'
import CancelLayout from '../../components/footerLayouts/CancelLayout'
import SupportLayout from '../../components/footerLayouts/SupportLayout'
import AccessLayout from '../../components/footerLayouts/AccessLayout'
import { footerPages } from '../../data/footerPagesData'

const layoutBySlug = {
    careers: CareersLayout,
    press: PressLayout,
    blog: BlogLayout,
    partners: PartnersLayout,
    help: HelpLayout,
    safety: SafetyLayout,
    cancel: CancelLayout,
    support: SupportLayout,
    access: AccessLayout,
}

const createFooterPage = (slug) => {
    const Layout = layoutBySlug[slug]
    const Page = () => <Layout page={footerPages[slug]} />
    Page.displayName = `${slug.charAt(0).toUpperCase() + slug.slice(1)}Page`
    return Page
}

export const CareersPage = createFooterPage('careers')
export const PressPage = createFooterPage('press')
export const BlogPage = createFooterPage('blog')
export const PartnersPage = createFooterPage('partners')
export const HelpPage = createFooterPage('help')
export const SafetyPage = createFooterPage('safety')
export const CancelPolicyPage = createFooterPage('cancel')
export const SupportPage = createFooterPage('support')
export const AccessPage = createFooterPage('access')
