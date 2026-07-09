export const MosqueLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* crescent + star */}
    <path d="M27 6a5 5 0 1 0 5.4 8.3A6.2 6.2 0 0 1 27 6Z" fill="currentColor" />
    <path
      d="m34.5 4.8.5 1.6 1.6.5-1.6.5-.5 1.6-.5-1.6-1.6-.5 1.6-.5.5-1.6Z"
      fill="currentColor"
    />
    {/* archway building */}
    <path
      d="M10 58V34c0-8 4-13 8-16v-3a2 2 0 0 1 4 0v1.4c1.6-.6 3.3-1 5-1.1V13a2 2 0 0 1 4 0v2.3c1.7.1 3.4.5 5 1.1V15a2 2 0 0 1 4 0v3c4 3 8 8 8 16v24H10Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* door arch */}
    <path
      d="M26 58V44a6 6 0 0 1 12 0v14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* small dome accent */}
    <circle cx="32" cy="24" r="2.2" fill="currentColor" />
  </svg>
);

export const SkylineSilhouette: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    viewBox="0 0 620 260"
    preserveAspectRatio="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* mountain */}
    <path
      d="M60 190 130 70l25 28 20-24 30 40 15-18 35 50 15-20 45 64H30Z"
      fill="#232f52"
      opacity="0.55"
    />
    {/* snow cap */}
    <path
      d="M130 70 118 92h10l-6 12h14l-9 14 18-1-8-15h13l-9-14h10Z"
      fill="#3d4a75"
      opacity="0.6"
    />
    {/* city block silhouette */}
    <path
      d="M0 260V150h18V130h14v20h10v-35h16v35h8V110h20v40h10v-20h14v20h8v-55h22v55h10v-25h16v25h6V95h24v75h8v-30h14v30h10V95l10-15 10 15v50h8v-40h18v40h10v-60l14-18 14 18v60h8v-30h16v30h10v-45h20v45h8v-20h12v20h30v-95l16-20 16 20v95h60V95h14v-30h16v30h12v90h60v-45h14v-25h16v25h12v45h48v-70h14v-20h16v20h12v70h40V260Z"
      fill="#1a2444"
    />
    {/* minarets + domes */}
    <g fill="#141c38">
      <rect x="95" y="150" width="6" height="80" />
      <circle cx="98" cy="146" r="7" />
      <rect x="150" y="120" width="8" height="110" />
      <circle cx="154" cy="112" r="10" />
      <path d="M120 230v-40a30 30 0 0 1 60 0v40Z" />
      <rect x="255" y="140" width="6" height="90" />
      <circle cx="258" cy="136" r="6" />
    </g>
  </svg>
);

export const GeometricRosette: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#c9a24b" strokeWidth="1" fill="none" opacity="0.65">
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="100"
          rx="70"
          ry="26"
          transform={`rotate(${i * 15} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="46" />
      <circle cx="100" cy="100" r="4" fill="#c9a24b" />
    </g>
  </svg>
);

export const ArabesqueTile: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="wasil-tile"
        width="56"
        height="56"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M28 2 52 28 28 54 4 28Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle
          cx="28"
          cy="28"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#wasil-tile)" />
  </svg>
);
