import React from "react";
import styles from "./Maps.module.css";

interface HTMLProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Maps: React.FC<HTMLProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <iframe
        className={styles.iframeStyle}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.36862703160926!2d121.04636463255372!3d14.715474541307104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1e7046931e1%3A0x3f7127a292654fdb!2sWash%20U%20Want!5e0!3m2!1sen!2sph!4v1702791061445!5m2!1sen!2sph"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        title="Google Maps to Wash U Want Laundry Service Shop"
      ></iframe>
    </div>
  );
};

export default Maps;
