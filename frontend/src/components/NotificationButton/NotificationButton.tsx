import icon from '../../assets/img/notification-icon.svg';
import './notificationButton.css';

function NotificationButton() {
  return (
    <div className="systemreg-red-btn">
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
