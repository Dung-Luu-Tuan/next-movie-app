'use client';

import classes from './SplashScreen.module.css';

const FlagImage = () => (
  <div className={classes.vnSun}>
    <img src="/images/event_304/vn-flag-full.gif" alt="Vietnam Flag" />
  </div>
);

const TankSimu = () => (
  <div className={classes.tankSimu}>
    <img
      src="/images/event_304/bobeo.png"
      alt="Banner on Tank"
      className={classes.bannerOnTank}
    />
    <div className={classes.wheels}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className={classes.fence}></div>
    <div className={classes.fence2}></div>
  </div>
);

const TankWrap = () => (
  <div className={classes.tankWrap}>
    <FlagImage />
    <TankSimu />
    <div className={classes.gate}></div>
    <div className={classes.gate2}></div>
  </div>
);

const TextContent = () => (
  <div className={classes.textContent}>
    Cùng Bobeo Chào Mừng 50 Năm Thống Nhất <br /> Đất Nước 30/04/1975 -
    30/04/2025
  </div>
);

export default function SplashScreen({ fadeOut }: { fadeOut: boolean }) {
  return (
    <div className={`${classes.container} ${fadeOut ? classes.fadeOut : ''}`}>
      <TankWrap />
      <TextContent />
    </div>
  );
}
