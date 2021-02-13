import github from "../../imgs/github-logo2.png";
import linkedIn from "../../imgs/linkedin-icon-1.png";

const CreditPage = () => {

  return (
    <div className="content">
      <h2>I hope you enjoyed your time here!</h2>
      <h2>Feel free to visit my profiles below</h2>
      <div className="social">
        <a href="">{github}</a>
        <a href="">{linkedIn}</a>
      </div>
    </div>
  )
}

export default CreditPage;
