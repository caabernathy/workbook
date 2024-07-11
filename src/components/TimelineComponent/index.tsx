import React from 'react';
import { Chrono } from "react-chrono";
import styles from './styles.module.css';
import { timelineItems, TimelineItem } from './timelineData';

const TimelineComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <Chrono
        items={timelineItems}
        mode="VERTICAL"
        cardHeight={200}
        scrollable={{ scrollbar: true }}
        theme={{
          primary: '#3b82f6',
          secondary: '#1e40af',
          cardBgColor: '#ffffff',
          cardForeColor: '#1e293b',
          titleColor: '#1e293b'
        }}
      >
        {timelineItems.map((item: TimelineItem, index: number) => (
          <div key={index}>
            <h3 className={styles.cardTitle}>{item.cardTitle}</h3>
            <h4 className={styles.cardSubtitle}>{item.cardSubtitle}</h4>
            <ul className={styles.cardList}>
              {item.cardDetailedText.map((text, idx) => (
                <li key={idx} className={styles.cardListItem}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </Chrono>
    </div>
  );
};

export default TimelineComponent;