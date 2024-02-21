import classNames from "classnames/bind";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faHandBackFist,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./MainLayout.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);
let result;
function MainLayout() {
  const [selectionUser, setSelectionUser] = useState();
  const [scoreUser, setScoreUser] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);
  const [selectionComputer, setSelectionComputer] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRestart = () => {
    setScoreComputer(0);
    setScoreUser(0);
  };

  const checkResult = (selectionUser, selectionComputer) => {
    if (selectionUser === selectionComputer) return "It's a draw";
    if (selectionUser === 0 && selectionComputer === 1) return "You Lose";
    else if (selectionUser === 1 && selectionComputer === 2) return "You Lose";
    else if (selectionUser === 2 && selectionComputer === 0) return "You Lose";
    return "You Win";
  };
  const handleChoice = (value) => {
    setSelectionUser(value);
    const random = Math.floor(Math.random() * 3);
    setSelectionComputer(random);
    result = checkResult(value, random);
    if (result === "You Lose") setScoreComputer((prev) => prev + 1);
    if (result === "You Win") setScoreUser((prev) => prev + 1);
    showModal();
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("title")}>
          <h1>Rock Paper Scissors</h1>
        </div>
        <div className={cx("restart-game-btn")}>
          <Button type="primary" onClick={handleRestart}>
            Restart game
          </Button>
        </div>
        <div className={cx("score-game")}>
          <div className={cx("scoreboard-player")}>
            <h4>{`Player:${scoreUser}`}</h4>
          </div>
          <div className={cx("scoreboard-computer")}>
            <h4>{`Computer:${scoreComputer}`}</h4>
          </div>
        </div>
        <div className={cx("action")}>
          <div className={cx("choice-title")}>
            <h2>Make Your Selection</h2>
          </div>
          <div className={cx("choices")}>
            <div className="choice-item rock">
              <button onClick={() => handleChoice(0)}>
                <i>
                  <FontAwesomeIcon
                    icon={faHandBackFist}
                    style={{ color: "#1777ff" }}
                  />
                </i>
              </button>
            </div>
            <div className="choice-item paper">
              <button onClick={() => handleChoice(1)}>
                <i>
                  <FontAwesomeIcon icon={faHand} style={{ color: "#1777ff" }} />
                </i>
              </button>
            </div>
            <div className="choice-item scissors">
              <button onClick={() => handleChoice(2)}>
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
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className={cx("modal")}>
            <h1>{result}</h1>
            {selectionUser === 0 && (
              <i>
                <FontAwesomeIcon
                  icon={faHandBackFist}
                  style={{ color: "#1777ff" }}
                />
              </i>
            )}
            {selectionUser === 1 && (
              <i>
                <FontAwesomeIcon icon={faHand} style={{ color: "#1777ff" }} />
              </i>
            )}
            {selectionUser === 2 && (
              <i>
                <FontAwesomeIcon
                  icon={faHandScissors}
                  style={{ color: "#1777ff" }}
                />
              </i>
            )}
            <p>
              Computer chose{" "}
              <span className={cx("highlight")}>
                {selectionComputer === 0 && "ROCK"}
                {selectionComputer === 1 && "PAPER"}
                {selectionComputer === 2 && "SCISSORS"}
              </span>
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default MainLayout;
