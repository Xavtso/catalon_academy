import styles from "./FormFilter.module.scss";

export default function FormFilter() {
  return (
    <form>
      <div className={styles.inputColumn}>
        <label htmlFor="destination">Where</label>
        <input
          type="text"
          id="destination"
          placeholder="Search destination"
          required={true}
        />
      </div>
      <div className={styles.dividingLine} />
      <div className={styles.inputColumn}>
        <label htmlFor="startDate">Start Date</label>
        <select id="startDate" prefix="Select date" required={true}>
          <option>Select date</option>
          <option>today</option>
          <option>tomorrow</option>
          <option>next week</option>
        </select>
      </div>
      <div className={styles.dividingLine} />
      <div className={styles.inputColumn}>
        <label htmlFor="endDate">End Date</label>
        <select id="sendDate" prefix="Select date" required={true}>
          <option>Select date</option>
          <option>today</option>
          <option>tomorrow</option>
          <option>next week</option>
        </select>
      </div>
      <button className={styles.searchBtn}>
        <img
          src="assets/icons/shared/search.svg"
          width="24"
          height="24"
          alt="searchIcon"
        />
      </button>
    </form>
  );
}
