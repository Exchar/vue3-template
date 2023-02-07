// interface requestMethod {
//     handler:Function,
//     type:'get'| 'post' | 'delete'
// }
// interface RequestCategory {
//     song:requestMethod,
//     user:requestMethod,
// }
import * as songRequest from "@/api/songRequset";
const Request = {
    songRequest,
}
export default Request;