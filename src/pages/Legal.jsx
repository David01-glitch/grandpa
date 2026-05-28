import Section from '../components/Section'
import { contact } from '../data/site'

const content = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'At Grandpa\'s Workshop, your privacy matters. We collect only the minimum information required to run our blog, newsletter, and contact form — namely, the email address you provide and basic analytics data via Google Analytics.',
      'We never sell or rent your personal information. Newsletter subscribers can unsubscribe with a single click at any time. Contact form submissions are stored only as long as needed to reply.',
      'Cookies are used to remember your preferences (such as cookie consent) and to power anonymous traffic analytics. You can disable cookies in your browser without losing access to the site.',
      'If you have any questions about this policy, please reach out to ' + contact.email + '.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    body: [
      'By using Grandpa\'s Workshop you agree to these terms. All content is provided for educational and entertainment purposes. Always follow proper safety procedures when working with power tools, sharp objects, or finishing chemicals.',
      'Grandpa\'s Workshop is not liable for injuries, damages, or losses resulting from the use of any information or project found on this site. Work within your skill level and consult a professional when in doubt.',
      'All articles, images, and tutorials are copyrighted. You may share links to our work, but please do not republish full articles without written permission.',
      'These terms may be updated periodically. Continued use of the site constitutes acceptance of any changes.',
    ],
  },
  refund: {
    title: 'Refund Policy',
    body: [
      'Most content on Grandpa\'s Workshop is provided free of charge. For any paid digital products, courses, or workshop tickets, we offer a 14-day refund window from the date of purchase.',
      'To request a refund, email ' + contact.email + ' with your order details and a brief reason for the request. Refunds are issued to the original payment method within 5–10 business days.',
      'Physical workshop tickets are refundable up to 7 days before the event. After that, we can transfer your seat to another date or another person.',
      'We want every reader to feel cared for. If something isn\'t right, write to us — we\'ll make it right.',
    ],
  },
}

export default function Legal({ which }) {
  const c = content[which]
  return (
    <Section eyebrow="Legal" title={c.title}>
      <div className="max-w-3xl mx-auto space-y-4 text-charcoal/85">
        {c.body.map((p, i) => <p key={i}>{p}</p>)}
        <p className="text-sm text-charcoal/60 pt-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
      </div>
    </Section>
  )
}
