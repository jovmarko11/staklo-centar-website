// Ubacuje strukturirane podatke (JSON-LD) u stranu. Posetilac ih ne vidi — čita ih Google.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // "<" se escape-uje da tekst ne bi mogao da zatvori <script> tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
