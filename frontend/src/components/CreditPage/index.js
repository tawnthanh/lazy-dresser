import github from "../../imgs/github-logo2.png";
import linkedIn from "../../imgs/linkedin-icon-1.png";
import "./CreditPage.css";

const CreditPage = () => {

  return (
    <div className="content">
      <h2>I hope you enjoyed your time here!</h2>
      <h2>Feel free to reach out to me below.</h2>
      <div className="social">
        <a href="https://github.com/tawnthanh"><img src={github} alt="github"/></a>
        <a href="https://www.linkedin.com/in/thanh-nguyen-15a50437/"><img src={linkedIn} alt="linkedIn"/></a>
      </div>
    </div>
  )
}

export default CreditPage;
