import "./BottomMenu.scss";
export default () => {
  const toggleMenu = () => {
    let first = document.querySelector(".first-menu");
    let second = document.querySelector(".second-menu");
    let triangleUp = document.querySelector(".triangle-up");
    let triangleDown = document.querySelector(".triangle-down");

    if (first.style.display.toString() === "flex") {
      first.style.display = "none";
      second.style.display = "flex";
      triangleUp.style.borderColor = "gray transparent transparent transparent";
      triangleDown.style.borderColor =
        "transparent transparent white transparent";
    } else {
      first.style.display = "flex";
      second.style.display = "none";
      triangleUp.style.borderColor =
        "white transparent transparent transparent";
      triangleDown.style.borderColor =
        "transparent transparent gray transparent";
    }
  };

  return (
    <div className="bottom-menu">
      <div className="container-bottom first-menu">
        <div>Lorem</div>
        <div>Ipsum</div>
        <div>Dolor</div>
        <div>Sit</div>
        <div>Amet</div>
        <div>Consec</div>
      </div>
      <div className="container-bottom second-menu">
        <div>Dolor</div>
        <div>Sit</div>
        <div>Amet</div>
        <div>Consec</div>
      </div>
      <div className="triangle-container" onClick={toggleMenu}>
        <div className="triangle-up"></div>
        <div className="triangle-down"></div>
      </div>
    </div>
  );
};
