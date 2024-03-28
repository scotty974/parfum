import axios from "axios";
const baseUrl = "https://api.airtable.com/v0/appGcxKtajImJb1ti/";

const instance = axios.create({
  baseURL: "https://api.airtable.com/v0/appGcxKtajImJb1ti/",

  token: `patn00PSws8GIifPq.266869c8ecb3d00c66e72b7cbfecd37e77f89acc13d51431064051580dcefef6`,
});

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${instance.defaults.token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export async function GetEvents() {
    
 
    const resp = await instance.get("Events");
    let items = resp.data.records.map((item) => {
      return {
        id: item.id,
        ...item.fields,
      };
    });
    
    return items;
  
}


export  async function GetFlacons() {

  const resp = await instance.get("Flacons");
  let items = resp.data.records.map((item) => {
    return {
      id: item.id,
      ...item.fields,
    };
  });
  return items
}

export async function GetCollections(){
  const rep = await instance.get("Collections")
  let items = rep.data.records.map((item) => {
    return {
      id: item.id,
      ...item.fields,
    };
  });
  return items
}