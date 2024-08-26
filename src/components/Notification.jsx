import NotificationItem from "./NotificationItem";
import RoundedPanel from "./RoundedPanel"
import { HiOutlineBell } from "react-icons/hi2";

const Notification = () => {
  return (
    <div className="right-0">
      <RoundedPanel bgcolor={'bg-slate-100'}>
        <div className="w-80 max-w-80">
          <p className="flex flex-row items-center justify-start gap-2 font-medium">Notification<HiOutlineBell /></p>
          <ul className="overflow-y-auto overflow-x-hidden max-h-80">
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
            <NotificationItem message={'Hello'}/>
          </ul>
        </div>
      </RoundedPanel>
    </div>
  )
}

export default Notification