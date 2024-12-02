import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import Projects from "../../components/Projects";

interface ProfilePageProps {
  onToggleTheme: () => void;
}

export default function ProfilePage({ onToggleTheme }: ProfilePageProps) {
  return (
    <>
      <Header />
      <Profile />
      <Projects />
      <Posts />
      <button onClick={onToggleTheme}>Alternar Tema</button>
      <Footer />
    </>
  );
}
