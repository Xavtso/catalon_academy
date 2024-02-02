import BlogCard from "../BlogCard/BlogCard";
import styles from "./BlogCardsList.module.scss";

const BlogCardsList = function() {
  const card1Img = "/assets/images/Blog/blog1.jpg";
  const card2Img = "/assets/images/Blog/blog2.jpg";
  const card3Img = "/assets/images/Blog/blog3.jpg";

  const data = [
    {
      imageSrc: card1Img,
      tag: "Business",
      time: "7 min read",
      title: "Top 10 mistakes startaps in 2022 make and how to avoid them",
      text: "Ipsum nostrum nihil. Veniam sit eius sed non accusamus ut officiis. Eligendi impedit rerum et beatae itaque corrupti. Sed nesciunt delectus sequi harum d",
    },
    {
      imageSrc: card2Img,
      tag: "Business",
      time: "11 min read",
      title: "How many participants for a new hire interview",
      text: "Et ad placeat quo rerum earum. Est est ea perspiciatis facere voluptas qui sit exercitationem autem. Qui maxime pariatur nobis est et culpa itaque consequatur.",
    },
    {
      imageSrc: card3Img,
      tag: "Tools",
      time: "5 min read",
      title: "Two business tools that have made my job way easier",
      text: "Est est ea perspiciatis facere voluptas qui sit exercitationem autem. Et ad placeat quo rerum earum. Qui maxime pariatur nobis est et culpa itaque consequatur.",
    },
  ];

  return (
    <div className={styles.list}>
      {data.map((card, index) => (
        <BlogCard key={index} info={card} />
      ))}
    </div>
  );
}

export default BlogCardsList;