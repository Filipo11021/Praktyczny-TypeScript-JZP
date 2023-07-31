import type { FC, ReactNode } from "react";

type ButtonTypeProps = {
  as: "button";
  onClick: () => void;
};

type LinkTypeProps = {
  as: "link";
  href: string;
};

type ButtonProps = {
  children: ReactNode;
} & (ButtonTypeProps | LinkTypeProps);

export const Button: FC<ButtonProps> = ({ as, ...props }) => {
  if (as === "link") {
    return <a {...props} />;
  }

  return <button {...props} />;
};

const GameInProgressState: FC<GameInProgress> = () => {
  return <div>in progress</div>;
};

const BeforeGameState: FC<BeforeGame> = () => {
  return <div>before</div>;
};
export const Card: FC<CardProps> = (props) => {
  if (props.type === "beforeGame") {
    return <BeforeGameState {...props} />;
  }

  if (props.type === "gameInProgress") {
    return <GameInProgressState {...props} />;
  }

  return null;
};

type Match = {
  homeTeam: {
    name: string;
  };
  awayTeam: {
    name: string;
  };
};

type CardProps = GameInProgress | BeforeGame;

type GameInProgress = {
  type: "gameInProgress";
  score: number;
} & Match;

type BeforeGame = {
  type: "beforeGame";
  timer: string;
} & Match;
