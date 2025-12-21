/**
 * Logo component - Text-based SVG logo
 * Uses "mihishree" in lowercase to match brochure visual branding
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="10"
        y="35"
        fontFamily="'Inter', 'Helvetica', sans-serif"
        fontSize="28"
        fontWeight="600"
        fill="#0057B8"
        letterSpacing="-0.5"
      >
        mihishree
      </text>
      <text
        x="10"
        y="48"
        fontFamily="'Inter', 'Helvetica', sans-serif"
        fontSize="8"
        fontWeight="400"
        fill="#333333"
        letterSpacing="1"
      >
        FACILITY SERVICES
      </text>
    </svg>
  );
}
