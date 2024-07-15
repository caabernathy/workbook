import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

interface CTAButtonProps {
  label: string;
  to: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ label, to }) => {
  return (
    <div className={styles.buttons}>
      <Link className="button button--primary button--lg" to={to}>
        {label}
      </Link>
    </div>
  );
};

export default CTAButton;
