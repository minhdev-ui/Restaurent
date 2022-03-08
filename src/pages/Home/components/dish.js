import style from "./dish.module.scss";
import cheeseSandwich from "../../../components/images/chese_sandwich.webp";
import springOnion from "../../../components/images/spring_onion.webp";
import meatVegetable from "../../../components/images/meat_vegetable.webp";
import playBtn from "../../../components/images/play_btn.webp";
import breakFast from "../../../components/images/Refesh_Breakfast.jpg";
import awesomeLunch from "../../../components/images/Awesome_Lunch.jpg";
import smoothDinner from "../../../components/images/Smooth_Dinner.jpg";
import richBuffet from "../../../components/images/Rich_Buffet.jpg";
import freshCrispy from "../../../components/images/Fresh_Crispy.jfif";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Dish = () => {
  return (
    <div>
      <div className={style.rateDish}>
        <div className={style.rateDishHeading}>
          <h1>Our Top Rated Dishes</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={style.rateDishRecommend}>
          <div className={style.rateDishRecommend_content}>
            <div className={style.rateDishRecommend_Img}>
              <img src={cheeseSandwich} />
            </div>
            <div>
              <h2 className={style.rateDishRecommend_Title}>
                BREAD FRUIT CHEESE SANDWICH
              </h2>
              <p className={style.rateDishRecommend_desc}>
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct women face higher conduct.
              </p>
            </div>
          </div>
          <div className={style.rateDishRecommend_content}>
            <div className={style.rateDishRecommend_Img}>
              <img src={springOnion} />
            </div>
            <div>
              <h2 className={style.rateDishRecommend_Title}>
                BREAD FRUIT CHEESE SANDWICH
              </h2>
              <p className={style.rateDishRecommend_desc}>
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct women face higher conduct.
              </p>
            </div>
          </div>
          <div className={style.rateDishRecommend_content}>
            <div className={style.rateDishRecommend_Img}>
              <img src={meatVegetable} />
            </div>
            <div>
              <h2 className={style.rateDishRecommend_Title}>
                BREAD FRUIT CHEESE SANDWICH
              </h2>
              <p className={style.rateDishRecommend_desc}>
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct women face higher conduct.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.video_aria}>
        <div className={style.video_aria_inner}>
          <a href="#">
            <img src={playBtn} />
          </a>
          <h3>We Always serve the vaping hot and delicious foods</h3>
          <p>Youtube video will appear in popover</p>
        </div>
      </div>
      <div className={style.feature_aria}>
        <div className={style.feature_aria_inner}>
          <div className={style.feature_aria_content}>
            <div className={style.feature_aria_single}>
              <img src={breakFast} />
              <h4>Refreshing Breakfast</h4>
              <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
            </div>
            <div className={style.feature_aria_single}>
              <img src={awesomeLunch} />
              <h4>Awesome Lunch</h4>
              <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
            </div>
            <div className={style.feature_aria_single}>
              <img src={smoothDinner} />
              <h4>Soothing Dinner</h4>
              <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
            </div>
            <div className={style.feature_aria_single}>
              <img src={richBuffet} />
              <h4>Rich Quality Buffet</h4>
              <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.food_menus}>
        <div className={style.food_menus_title}>
          <h1>Our Featured Food Menus</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={style.food_menus_inner}>
          <div className={style.food_menus_outer}>
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false}>
              <div className={style.food_menus_stage}>
                <div className={style.food_menus_stage_left}>
                  <h2>Fresh & Crispy All the time</h2>
                  <p>
                    Who are in extremely love with eco friendly system. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <button>VIEW FULL MENU</button>
                </div>
                <div className={style.food_menus_stage_right}>
                  <img src={freshCrispy}/>
                </div>
              </div>
              <div className={style.food_menus_stage}>
                <div className={style.food_menus_stage_left}>
                  <h2>Fresh & Crispy All the time</h2>
                  <p>
                    Who are in extremely love with eco friendly system. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <button>VIEW FULL MENU</button>
                </div>
                <div className={style.food_menus_stage_right}>
                  <img src={freshCrispy}/>
                </div>
              </div>
              <div className={style.food_menus_stage}>
                <div className={style.food_menus_stage_left}>
                  <h2>Fresh & Crispy All the time</h2>
                  <p>
                    Who are in extremely love with eco friendly system. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <button>VIEW FULL MENU</button>
                </div>
                <div className={style.food_menus_stage_right}>
                  <img src={freshCrispy}/>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dish;
