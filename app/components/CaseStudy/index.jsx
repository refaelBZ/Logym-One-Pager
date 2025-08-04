'use client'

import { useState, useEffect } from 'react';
import styles from './style.module.scss';

const CaseStudy = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const images = [
    { id: 1, alt: 'מסך הפתיחה של Logym', src: '/images/Logym%20workout.png' },
    { id: 2, alt: 'מעקב אחר אימונים', src: '/images/Logym%20exercise.png' },
    { id: 3, alt: 'התקדמות אישית', src: '/images/Logym%20progress.png' },
    { id: 4, alt: 'Hero Section', src: '/images/Logym%20hero.png' },
    { id: 5, alt: 'Steps Section', src: '/images/Logym%20steps.png' },
    { id: 6, alt: 'One Pager Complete', src: '/images/Logym%20onepager.png' },
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') prevImage();
      if (e.key === 'ArrowLeft') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  if (!isMounted) {
    return (
      <div className={`${styles.container} ${styles.loadingContainer}`}>
        <div>
          <header className={styles.loadingHeader}>
            <div className={styles.loadingTitleBox}></div>
            <div className={styles.loadingSubtitleBox}></div>
          </header>
          
          <section className={styles.loadingSection}>
            <div className={styles.loadingSectionHeader}>
              <div className={styles.loadingYellowLine}></div>
              <div className={styles.loadingSectionTitle}></div>
            </div>
            <div className={styles.loadingTextLines}>
              <div className={styles.loadingTextLine}></div>
              <div className={styles.loadingTextLine}></div>
              <div className={styles.loadingTextLine}></div>
            </div>
            <div className={styles.loadingImageGrid}>
              {[...Array(3)].map((_, i) => (
                <div key={i} className={styles.loadingImageItem}>
                  <div className={styles.loadingImageBox}></div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>From Product to Promise</h1>
        <h2 className={styles.subtitle}>The Logym One-Pager Case Study</h2>
      </header>

      {/* האתגר */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.yellowLine}></div>
          <h2 className={styles.sectionTitle}>האתגר: שריר חזק, ללא במה להציג אותו</h2>
        </div>
        <p className={styles.paragraph}>
          אחרי שפיתחתי את Logym – פלטפורמת SaaS מתקדמת המאפשרת מעקב והתקדמות אמיתית באימוני כושר – נתקלתי בדילמה המוכרת של כל יזם: יש לי מוצר שעובד ושימושי, אבל אין לו סיפור, ובטח שלא דרך לתקשר את הערך שלו ללקוח פוטנציאלי. זה השלב שבו הבנתי שאני צריך לבנות את "כרטיס הביקור" שיגרום לאנשים להבין את הכוח שמאחוריו ולרצות להשתמש בו.
        </p>
        <div className={styles.imageGrid}>
          {[0, 1, 2].map((index) => (
            <div 
              key={index} 
              className={styles.imageItem}
              onClick={() => openLightbox(index)}
            >
              <div className={styles.imageBox}>
                <img 
                  src={images[index].src} 
                  alt={images[index].alt}
                />
              </div>
              <span className={styles.imageCaption}>{images[index].alt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* התהליך */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.yellowLine}></div>
          <h2 className={styles.sectionTitle}>התהליך: תרגום פיצ'רים לסיפור משכנע</h2>
        </div>
        <p className={styles.paragraph}>
          הפתרון שהחלטתי ליצור היה גישה המשלבת אסטרטגיה, מסר ברור וביצוע קפדני.
        </p>

        <div className={styles.subsectionContainer}>
          <h3 className={styles.subsectionTitle}>1. אסטרטגיית קהל ומסר: למי אנחנו מדברים ומה כואב לו?</h3>
          <p className={styles.paragraph}>
            הפיתוי הראשוני היה להגדיר את המוצר כמתאים לכולם, אבל מהר מאוד הבנתי שמיקוד הוא המפתח. במקום לפנות למתאמנים מתחילים או למתקדמים שכבר רואים תוצאות, בחרתי להתמקד בקהל שחווה את התסכול הגדול ביותר: המתאמנים שבאמצע. אלו שיודעים מה הם עושים, אבל נתקעו וזקוקים לפתרון שיעזור להם להתמיד ולראות סוף סוף תוצאות.
          </p>
          <p className={styles.paragraph}>
            מתוך ההבנה הזו, המסר התחדד: במקום לדבר על פיצ'רים כמו "מעקב כושר", התמקדתי בהבטחה המרכזית שהקהל הזה מחפש: לראות תוצאות.
            את המסר הזה בחרתי להדהד בכל מקום בעמוד. כך למשל, כשהצגתי למשתמש את השלבים השונים באפליקציה, השלב השלישי בתהליך הוא לא פעולה טכנית, אלא התוצאה עצמה – "לראות תוצאות". כך המשתמש מקבל את המסר שהתוצאות הן חלק בלתי נפרד מהערך ש-Logym מציעה.
          </p>
        </div>

        <div className={styles.subsectionContainer}>
          <h3 className={styles.subsectionTitle}>2. עיצוב וחווית משתמש (UI/UX): </h3>
          <p className={styles.paragraph}>
            הפילוסופיה שלי בתהליך היתה פשוט לתת למשתמש את הערך, עם קריאה ברורה לפעולה, ובלי להלאות אותו. לכן בחרתי במבנה של One-Pager שמספר את כל הסיפור במקום אחד, בלי לעייף את הגולש. השתמשתי בשפה העיצובית של האפליקציה – רקע כהה ונגיעות צהוב כדי לשדר תחושת פרימיום, דינמיות וכוח, תוך שמירה על פשטות וריווח נדיב כדי שהמסר יישאר חד וברור.
          </p>
        </div>

        <div className={styles.subsectionContainer}>
          <h3 className={styles.subsectionTitle}>3. ביצוע אסטרטגי-ויזואלי:</h3>
          <p className={styles.paragraph}>
            הסטנדרט שלי היה ביצוע ללא פשרות, אבל מעבר לדיוק הטכני, בחרתי כל אלמנט ויזואלי כדי לשרת מטרה אסטרטגית שבנוסף גם תשכנע את הגולש. לדוגמה, כך קיבלתי החלטות איך להציג את הרכיבים הבאים:
          </p>
          <ul className={styles.bulletList}>
            <li>Hero: המטרה של הסרטון הייתה להגחיך את האלטרנטיבה. יצרתי דימוי שמציג את המעבר מהכאוס של מעקב ידני על נייר אל הסדר והיעילות של האפליקציה - מה שללא ספק מדגיש עד כמה Logym היא הפתרון ההגיוני היחיד למי שרוצה לראות התקדמות.</li>
            <li>מבנה השלבים: במקום להציג את שלושת שלבי השימוש באפליקציה בקו ישר ומשעמם, עיצבתי אותם באופן מדורג. הבחירה הזו נועדה להמחיש למשתמש את תחושת הדינמיות, הצמיחה וההתקדמות שהוא עומד לחוות באפליקציה.</li>
          </ul>
          <div className={styles.imageGrid}>
            {[3, 4].map((index) => (
              <div 
                key={index} 
                className={styles.imageItem}
                onClick={() => openLightbox(index)}
              >
                <div className={styles.imageBox}>
                  <img 
                    src={images[index].src} 
                    alt={images[index].alt}
                  />
                </div>
                <span className={styles.imageCaption}>{images[index].alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* התוצאה */}
      <section className={styles.lastSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.yellowLine}></div>
          <h2 className={styles.sectionTitle}>התוצאה: נכס שיווקי שעובד בשבילך</h2>
        </div>
        <div className={styles.resultImageContainer} onClick={() => openLightbox(5)}>
          <div className={styles.resultImageBox}>
            <img 
              src={images[5].src} 
              alt={images[5].alt}
            />
          </div>
          <span className={styles.resultImageCaption}>{images[5].alt}</span>
        </div>
        <p className={styles.paragraph}>
        התוצאה הסופית היא יותר מדף אינטרנט שעושה תצוגת תכלית לאפליקציה. כשראיתי את התוצאה הבנתי שמדובר בנכס אסטרטגי וקריטי לכל מוצר SAAS. במקום להסביר לכל אחד מה הפיצ'רים ואיך המוצר עובד, עכשיו אפשר פשוט לשלוח לו קישור שיספר את הסיפור. משם, הדף עושה את עבודת השכנוע, ומניע את המשתמשים הנכונים לפעולה בצורה זורמת וטבעית.
        </p>
        <p className={styles.paragraph}>
        התהליך הזה מדגים במדויק את הצעת הערך המרכזית שלי ליזמים, בליווי רמת החשיבה, הביצוע והשותפות שאני מביא לכל פרויקט: חבילת 'SaaS Launchpad' - שלוקחת מוצר טכנולוגי ומעניקה לו את הסיפור והוויז'ואל הדרושים לו כדי לכבוש את השוק ולהביא משתמשים.
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a 
            href="https://app.logym.fit/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Visit the App
          </a>
          <span className={styles.separator}>|</span>
          <a 
            href="/" 
            className={styles.footerLink}
          >
            Visit the One-Pager
          </a>
          <span className={styles.separator}>|</span>
          <a 
            href="https://www.linkedin.com/in/refaelbz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            My LinkedIn
          </a>
        </div>
        <p className={styles.footerText}>
          Refael Ben Zikri © 2025
        </p>
      </footer>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className={styles.lightbox}
          onClick={closeLightbox}
        >
          <button 
            className={styles.lightboxCloseBtn}
            onClick={closeLightbox}
            aria-label="סגור"
          >
            ✕
          </button>
          
          <button 
            className={`${styles.lightboxNavBtn} ${styles.prevBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="תמונה קודמת"
          >
            &lt;
          </button>
          
          <div 
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[currentImage].src} 
              alt={images[currentImage].alt}
            />
            <p>{images[currentImage].alt}</p>
          </div>
          
          <button 
            className={`${styles.lightboxNavBtn} ${styles.nextBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="תמונה הבאה"
          >
            &gt;
          </button>
          
          <div className={styles.lightboxCounter}>
            {currentImage + 1} מתוך {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;