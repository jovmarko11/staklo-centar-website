// Geometrijsko "S" — isti znak kao favicon (app/icon.svg). Boja = currentColor.
export default function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="9 7 14 18" aria-hidden="true">
      <path fill="currentColor" d="M9 7h14v6h-4v-2h-6v3h10v11H9v-6h4v2h6v-3H9z" />
    </svg>
  );
}
