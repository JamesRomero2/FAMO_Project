import NotificationItem from "./NotificationItem";
import RoundedPanel from "./RoundedPanel"
import { HiOutlineBell } from "react-icons/hi2";

const Notification = ({notificationItems}) => {
  const getTimeElapsed = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const elapsed = now - date; // Difference in milliseconds

    const minutes = Math.floor(elapsed / (1000 * 60));
    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  };

  // Sort notifications: important ones first, then by date
  const sortedNotifications = notificationItems.sort((a, b) => {
    if (a.important === b.important) {
      return new Date(b.date_published) - new Date(a.date_published);
    }
    return a.important ? -1 : 1;
  });
  return (
    <div className="right-0">
      <RoundedPanel bgcolor={'bg-slate-100'}>
        <div className="w-80 max-w-80">
          <p className="flex flex-row items-center justify-start gap-2 font-medium">Notification<HiOutlineBell /></p>
          <ul className="overflow-y-auto overflow-x-hidden max-h-80">
          {sortedNotifications.map((notification, index) => (
            <NotificationItem
              key={index}
              message={notification.message}
              timeElapsed={getTimeElapsed(notification.date_published)}
              important={notification.important}
            />
          ))}
          </ul>
        </div>
      </RoundedPanel>
    </div>
  )
}

export default Notification