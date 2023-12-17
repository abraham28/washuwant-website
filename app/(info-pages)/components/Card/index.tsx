import React from "react";
import { Button } from "react-bootstrap";
import styles from "./Card.module.scss";
import Image from "next/image";

interface CardProps {
  title: string;
  price: string;
  inclusions: Inclusion[];
  noAction?: boolean;
  imageSrc?: string;
}

type Inclusion =
  | {
      excluded?: boolean;
      name: string;
    }
  | string;

const Card: React.FC<CardProps> = ({
  title,
  price,
  inclusions,
  noAction = false,
  imageSrc,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.priceAndName}>
        {imageSrc && (
          <Image
            width={100}
            height={0}
            className={styles.freeHandWashIcon3564Thumb}
            alt="Full Package Photo"
            src={imageSrc}
          />
        )}

        <div className={styles.fullPackageParent}>
          <b className={styles.packageName}>{title}</b>
          <b className={styles.b}>{price}</b>
        </div>
      </div>
      <div className={styles.inclusionList}>
        {inclusions.map((inclusion, key) => {
          const isString = typeof inclusion == "string";

          return (
            <div className={styles.listItem} key={key}>
              <div className={styles.checkIcon}>
                <b className={styles.fullPackage}>
                  {isString || !inclusion.excluded ? "✔" : <>&times;</>}
                </b>
              </div>
              <b className={styles.fullPackage}>
                {isString ? inclusion : inclusion.name}
              </b>
            </div>
          );
        })}
        {noAction ? (
          <></>
        ) : (
          <div className={styles.listItem}>
            <Button>Avail Service</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
