import axios from "axios";

class Axios {
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
    });
  }

  async request(method, path, data, config) {
    const response = await this.instance.request({
      method,
      url: path,
      data,
      ...config,
    });
    return response.data;
  }

  get(path, config) {
    return this.request("get", path, null, config);
  }

  post(path, data, config) {
    return this.request("post", path, data, config);
  }

  put(path, data, config) {
    return this.request("put", path, data, config);
  }

  patch(path, data, config) {
    return this.request("patch", path, data, config);
  }

  delete(path, config) {
    return this.request("delete", path, null, config);
  }
}

export default new Axios();
