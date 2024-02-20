import classNames from "classnames/bind";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faHandBackFist,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./MainLayout.module.scss";
const cx = classNames.bind(styles);
function MainLayout() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("title")}>
          <h1>Rock Paper Scissors</h1>
        </div>
        <div className={cx("restart-game-btn")}>
          <Button type="primary">Restart game</Button>
        </div>
        <div className={cx("score-game")}>
          <div className={cx("scoreboard-player")}>
            <h4>{`Player:${"score"}`}</h4>
          </div>
          <div className={cx("scoreboard-computer")}>
            <h4>{`Computer:${"score"}`}</h4>
          </div>
        </div>
        <div className={cx("action")}>
          <div className={cx("choice-title")}>
            <h2>Make Your Selection</h2>
          </div>
          <div className={cx("choices")}>
            <div className="choice-item rock">
              <button>
                <i>
                  <FontAwesomeIcon
                    icon={faHandBackFist}
                    style={{ color: "#1777ff" }}
                  />
                </i>
              </button>
            </div>
            <div className="choice-item paper">
              <button>
                <i>
                  <FontAwesomeIcon icon={faHand} style={{ color: "#1777ff" }} />
                </i>
              </button>
            </div>
            <div className="choice-item scissors">
              <button>
                <i>
                  <FontAwesomeIcon
                    icon={faHandScissors}
                    style={{ color: "#1777ff" }}
                  />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
