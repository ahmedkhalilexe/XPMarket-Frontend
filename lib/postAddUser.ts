import {TAddUser} from "@/lib/types";
import {privateAxiosInstance} from "@/lib/axios";

const postAddUser = (data: TAddUser, token: string) => {
    return privateAxiosInstance.post("/user/addUser", {
        ...data,
        userRoleId: parseInt(data.userRoleId)
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export default postAddUser;