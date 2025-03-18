// import { useFrappeAuth, useFrappeGetDoc } from "frappe-react-sdk";
// import { useContext } from "react";
// import { Outlet } from "react-router-dom";
// import { LayoutContext } from "../layout/context/layoutcontext";

// const ProtectedRoutes = () => {
// const { currentUser, isLoading ,getUserCookie} = useFrappeAuth();
// const { data } = useFrappeGetDoc("User", `${currentUser}`);

// console.log('UserData',data)
//   if (isLoading) {
//     return
//   }
//   if (!currentUser || currentUser === "Guest") {
//     return (window.location.href = "/app");
//   }
//   return <Outlet />;
// };

// export default ProtectedRoutes;
