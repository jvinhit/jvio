const env = process.env.REACT_APP_ENV;
export default class API {
    static Domain = env === 'production' ? 'https://raw.githubusercontent.com' : 'https://raw.githubusercontent.com';

    static Get(endPoint) {
        return fetch(`${API.Domain}/${endPoint}`, {
            method: 'GET',
        });
    }
}
