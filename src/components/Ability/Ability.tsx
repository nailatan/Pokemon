import "./ability.css";

interface propsAbility {
  name: string
}

const Ability = ({ name } : propsAbility) : JSX.Element => {
  return <div className="ability">{name}</div>;
};

export default Ability;
