import "./SectionTitle.css";

const SectionTitle = ({ badge, title, subtitle }) => {
  return (
    <div className="section-title">
      {badge && <span className="section-badge shimmer">{badge}</span>}

      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}

      <div className="section-divider"></div>
    </div>
  );
};

export default SectionTitle;
