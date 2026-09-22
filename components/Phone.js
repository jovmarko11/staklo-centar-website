// Broj telefona: link za poziv ako imamo pravi broj, inače običan tekst.
export default function Phone({ phone, className }) {
  if (phone.href) {
    return <a href={phone.href} className={className}>{phone.label}</a>;
  }
  return <span className={className}>{phone.label}</span>;
}
