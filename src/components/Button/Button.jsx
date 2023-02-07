import classNames from 'classnames';
import PropTypes from 'prop-types';
import buttonStyle from './Button.module.css';
import iconCross from '../../assets/cross.svg';
import iconSave from '../../assets/save.svg';
import iconAdd from '../../assets/add.svg';
import iconSearch from '../../assets/search.svg';

const icon = { iconCross, iconAdd, iconSave };

const Button = (props) => {
  const { type, label, onClick, className, iconName } = props;

  return (
    <button
      type={type}
      className={classNames([className, buttonStyle.button])}
      onClick={onClick}
    >
      <img src={icon[iconName]} height={15} width={15} />
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconName: PropTypes.string.isRequired,
};
