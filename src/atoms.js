import { atom, selector}  from "recoil"
export const notifications = atom({
    key: "networkAtom",
    default: {
         posts: 4,
        job:6, 
        msg:44

    }
});
export const totalNotificationSelector = selector ({
    key : "totalNotificationSelector",
    get: ({get}) => {
 const allNotifications = get(notifications);
 return allNotifications.jobs +
 allNotifications.posts +
 allNotifications.msg ;
    
    }
  }) 