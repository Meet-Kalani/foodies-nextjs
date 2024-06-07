import Image from "next/image";
import styles from "./page.module.css";
import { getMeal } from "@/services/api";
import { notFound } from "next/navigation";

const MealPage = ({ params }) => {
  const meal = getMeal(params.mealSlug);

  if(!meal){
    notFound();
  }

  const {
    image,
    title,
    creator_email: creatorEmail,
    summary,
    creator,
    instructions
  } = meal;

  const formattedInstructions = instructions.replace(/\n/g,'<br />')

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} alt={title}  fill />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creatorEmail}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: formattedInstructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealPage;
