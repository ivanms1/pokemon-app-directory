import React, { useMemo } from "react";
import classNames from "classnames";

import styles from "./BaseStats.module.scss";

const getBarColor = (stat: number) => {
  if (stat < 50) {
    return "red";
  }
  if (stat < 100) {
    return "yellow";
  }
  return "green";
};

interface BaseStatsProps {
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

const BaseStats = ({ baseStats }: BaseStatsProps) => {
  const total = useMemo(
    () => Object.values(baseStats).reduce((acc, curr) => acc + curr, 0),
    [baseStats]
  );

  return (
    <div className={styles.BaseStats}>
      <span>Base Stats:</span>
      <div className={styles.Stats}>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>HP: </span>
            <span className={styles.StatNumber}>{baseStats.hp}</span>
          </div>
          <div
            style={{ width: baseStats.hp }}
            className={classNames(
              styles.StatBar,
              styles[getBarColor(baseStats.hp)]
            )}
          />
        </div>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>Attack: </span>
            <span className={styles.StatNumber}>{baseStats.attack}</span>
          </div>
          <div
            style={{ width: baseStats.attack }}
            className={classNames(
              styles.StatBar,
              styles[getBarColor(baseStats.attack)]
            )}
          />
        </div>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>Defense:</span>
            <span className={styles.StatNumber}>{baseStats.defense}</span>
          </div>
          <div
            style={{ width: baseStats.defense }}
            className={classNames(
              styles.StatBar,
              styles[getBarColor(baseStats.defense)]
            )}
          />
        </div>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>Sp Atk: </span>
            <span className={styles.StatNumber}>{baseStats.specialAttack}</span>
          </div>
          <div
            style={{ width: baseStats.specialAttack }}
            className={classNames(
              styles.StatBar,
              styles[getBarColor(baseStats.specialAttack)]
            )}
          />
        </div>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>Sp Def: </span>
            <span className={styles.StatNumber}>
              {baseStats.specialDefense}
            </span>
          </div>
          <div
            style={{ width: baseStats.specialDefense }}
            className={classNames(
              styles.StatBar,
              styles[getBarColor(baseStats.specialDefense)]
            )}
          />
        </div>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>Speed: </span>
            <span className={styles.StatNumber}>{baseStats.speed}</span>
          </div>
          <div
            style={{ width: baseStats.speed }}
            className={classNames(
              styles.StatBar,
              styles[getBarColor(baseStats.speed)]
            )}
          />
        </div>
        <div className={styles.Total}>
          <span>Total: </span>
          <span className={styles.TotalNumber}>{total}</span>
        </div>
      </div>
    </div>
  );
};

export default BaseStats;
