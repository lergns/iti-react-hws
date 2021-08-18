import classes from "./Preloader.module.css";
import preloader from "./1_9EBHIOzhE1XfMYoKz1JcsQ.gif";

export const Preloader = () => {
  return <img src={preloader} className={classes.preloader} alt={"Loading"} />;
};
