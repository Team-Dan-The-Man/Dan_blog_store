import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./home.css";
// import Footer from "../../components/footer/Footer";

export default function Home() {

  return (
    <>
      <Header />
      <div className="home">
        <Posts />
      </div>
    </>
  );
}