import CommentCard from "../CommentCard/CommentCard";
import styles from "./CommentsList.module.scss";
import portrait1 from "../../../../images/Testimonials/portrait1.png";
import portrait2 from "../../../../images/Testimonials/portrait2.png";
import portrait3 from "../../../../images/Testimonials/portrait3.png";
import portrait4 from "../../../../images/Testimonials/portrait4.png";
import portrait5 from "../../../../images/Testimonials/portrait5.png";
import portrait6 from "../../../../images/Testimonials/portrait6.png";

function CommentsList() {
  const data1 = [
    {
      imageSrc: portrait1,
      text: '"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus convallis elit."',
      name: "Dana Hale",
      position: "UI/UX Designer, Iniry",
    },
    {
      imageSrc: portrait2,
      text: '"In luctus convallis elit, vitae blandit elit volutpat a. Donec volutpat massa turpis, sed interdum dui aliquam id. Integer imperdiet odio sit amet faucibus auctor."',
      name: "Kyle Camden",
      position: "Front-end Developer, Dontechi",
    },
    {
      imageSrc: portrait3,
      text: '"Donec sodales turpis sollicitudin sodales sodales. Proin blandit congue ante sed scelerisque. Etiam sed metus sapien aenean eu euismod."',
      name: "Travis Elton",
      position: "Sales Manager, Kan-cod",
    },
  ];

  const data2 = [
    {
      imageSrc: portrait4,
      text: '"Aenean eu euismod sapien. Maecenas maximus velit turpis, sit amet sodales felis condimentum interdum. Donec sit amet placerat nunc. Fusce ultricies ex et arcu maximus faucibus. Sed ac rhoncus justo."',
      name: "Monica Scarboro",
      position: "CEO, Sonron",
    },
    {
      imageSrc: portrait5,
      text: '"In eros nunc, sagittis fermentum sagittis nec, porta vitae est. Sed felis nibh, commodo nec vestibulum in, tincidunt sodales lectus. Proin rutrum ut enim nec eleifend. Integer ante diam, imperdiet vel risus non, pretium placerat nisl."',
      name: "Anna Hanney",
      position: "Head of Design, Betatech",
    },
    {
      imageSrc: portrait6,
      text: '"Duis at nisl nulla. Donec quis tortor tellus. Aenean sed turpis vulputate nunc dictum vulputate eu et sem. In dapibus elementum varius. Integer aliquet, ex at lacinia euismod, dolor nibh sodales ex."',
      name: "Megan Roston",
      position: "Copywriter, Openlane",
    },
  ];

  return (
    <section className={styles.cardsList}>
      <div className={styles.cardsColumn}>
        {data1.map((data) => (
          <CommentCard
            imageSrc={data.imageSrc}
            text={data.text}
            name={data.name}
            position={data.position}
          />
        ))}
      </div>
      <div className={styles.cardsColumn2}>
        {data2.map((data) => (
          <CommentCard
            imageSrc={data.imageSrc}
            text={data.text}
            name={data.name}
            position={data.position}
          />
        ))}
      </div>
    </section>
  );
}
export default CommentsList;
