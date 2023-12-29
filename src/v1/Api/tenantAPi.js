import requestMaker from "../Lib";

export const fetchTenant = (data)=>{
    const url = `/account/tenants/`
    const payload = {};
    const params = { ...data };
    return requestMaker(url, "get", { params, payload });
}