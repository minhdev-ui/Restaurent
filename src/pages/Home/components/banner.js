import style from './banner.module.scss';
import banner from "../../../components/images/banner.webp";
const Banner = () => {
  return (
    <div>
      <div className={style.bannerImg}>
        <img src={banner} />
      </div>
      <div className={style.bannerInner}>
        <h3>WIDE OPTIONS OF CHOICE</h3>
        <h1>Delicious Receipes</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim.
        </p>
        <a href='#' className={style.btnLink}>
            <button>CHECK OUR MENU</button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
