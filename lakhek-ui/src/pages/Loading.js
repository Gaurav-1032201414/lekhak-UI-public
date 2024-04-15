import ErrorMessage from "../components/ErrorMessage";
import "../styles/Loading.css";
import Star from "../images/stars_404.png";

const Loading = () => {
  return (
    <div className="loading">
      <img className="delete-icon-loading" alt="" src="/delete.svg" />
      <main className="frame-parent-loading">
        <img className="group-icon" alt="" src={Star} />
      </main>
      <ErrorMessage />
    </div>
  );
};

export default Loading;
