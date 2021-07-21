import "./TopMenu.scss";

export default () => {
  return (
    <div className="container-top">
      <div className="player-data">
        <div className="player-level">
          Lvl
          <br />
          147
        </div>
        <div className="player-name">PlayerName</div>
      </div>
      <div className="resources-wrapper">
        <div className="resources-container">
          <div className="resources">
            <div className="resources-img">
              <div class="manpower-icon"></div>
              <div class="manpower-icon-2"></div>
            </div>
            <div className="resources-name-number">
              <div className="resources-name">MANPOWER</div>
              <div className="resources-number">63345</div>
            </div>
          </div>
          <div className="resources-bottom"></div>
        </div>
        <div className="resources-container">
          <div className="resources">
            <div className="resources-img">
              <div class="ammo-icon"></div>
              <div class="ammo-icon" style={{ marginLeft: "0.6vw" }}></div>
              <div class="ammo-icon" style={{ marginLeft: "1.2vw" }}></div>
            </div>
            <div className="resources-name-number">
              <div className="resources-name">AMMUNITION</div>
              <div className="resources-number">53673</div>
            </div>
          </div>
          <div className="resources-bottom"></div>
        </div>
        <div className="resources-container">
          <div className="resources">
            <div className="resources-img">
              <div className="rations-icon"></div>
            </div>
            <div className="resources-name-number">
              <div className="resources-name">RATION</div>
              <div className="resources-number">47587</div>
            </div>
          </div>
          <div className="resources-bottom"></div>
        </div>
        <div className="resources-container">
          <div className="resources">
            <div className="resources-img">
              <div className="parts-icon">&#9881;</div>
              <div className="parts-icon" style={{ marginLeft: "1.3vw" }}>
                &#9881;
              </div>
            </div>
            <div className="resources-name-number">
              <div className="resources-name">PARTS</div>
              <div className="resources-number">85868</div>
            </div>
          </div>
          <div className="resources-bottom"></div>
        </div>
        <div className="resources-plus">+</div>
      </div>
    </div>
  );
};
