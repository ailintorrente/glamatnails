import { forwardRef } from "react";

const BenefitCard = forwardRef(({ icon: Icon, title, text, style }, ref) => {
  return (
    <div ref={ref} className="benefit-card">
      <div className="benefit-card-inner">
        <Icon className="benefit-icon" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
});

export default BenefitCard;
