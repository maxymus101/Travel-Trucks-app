import Image from "next/image";
import css from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.location}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            placeholder="City"
            className={css.loc_input}
          />
        </label>
      </div>
      <div className={css.filters_wrapper}>
        <p className={css.sub_title}>Filters</p>
        <div className={css.vehicle_eq}>
          <h3 className={css.vehicle_eq_title}>Vehicle equipment</h3>
          <div className={css.decor_splitter}></div>
          <div className={css.eauipment_group}>
            <div className={css.equipment}>
              <div className={css.eq_icon}>
                <Image
                  src="../../public/icons.svg#icon-wind"
                  width={32}
                  height={32}
                  alt="icon-wind"
                />
              </div>
              <div className={css.eq_name}>AC</div>
            </div>
            <div className={css.equipment}>
              <div className={css.eq_icon}>
                <Image
                  src="../../public/icons.svg#icon-diagram"
                  width={32}
                  height={32}
                  alt="icon-diagram"
                />
              </div>
              <div className={css.eq_name}>Automatic</div>
            </div>
            <div className={css.equipment}>
              <div className={css.eq_icon}>
                <Image
                  src="../../public/icons.svg#icon-cup-hot"
                  width={32}
                  height={32}
                  alt="icon-kitchen"
                />
              </div>
              <div className={css.eq_name}>Kitchen</div>
            </div>
            <div className={css.equipment}>
              <div className={css.eq_icon}>
                <Image
                  src="../../public/icons.svg#icon-tv"
                  width={32}
                  height={32}
                  alt="icon-tv"
                />
              </div>
              <div className={css.eq_name}>TV</div>
            </div>
            <div className={css.equipment}>
              <div className={css.eq_icon}>
                <Image
                  src="../../public/icons.svg#icon-shower"
                  width={32}
                  height={32}
                  alt="icon-shower"
                />
              </div>
              <div className={css.eq_name}>Bathroom</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
