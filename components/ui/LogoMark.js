// Geometrijsko "Č" — isti znak kao favicon (app/icon.svg). Boja = currentColor.
export default function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="9 4 14 23" aria-hidden="true">
      <path fill="currentColor" d="M9 11h14v4H13v8h10v4H9z M11 4h3l2 2.5L18 4h3l-3.5 4.5h-3z" />
    </svg>
  );
}
