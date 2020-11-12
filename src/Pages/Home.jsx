import { React } from "react";
const Home = () => {
  return (
    <div>
      <div>
        <div className="bar">
          <i class="primary md fa fa-user" aria-hidden="true"></i>
        </div>
      </div>
      <div className="center">
        <h1 className="main-title">ALTIUS</h1>
      </div>
      <div className="menu">
        <div className="m-item">
          <div>
            <div className="circle"></div>
          </div>
          <div>About</div>
        </div>
        <div className="m-item">
          <div>
            <div className="circle"></div>
          </div>
          <div>Category</div>
        </div>
        <div className="m-item">
          <div className="circle"></div>
          <div>Ask Query</div>
        </div>
        <div className="m-item">
          <div className="circle"></div>
          <div>Contact</div>
        </div>
        <div className="m-item">
          <div className="circle"></div>
          <div>Devs</div>
        </div>
      </div>
    </div>
  );
};

export { Home };
