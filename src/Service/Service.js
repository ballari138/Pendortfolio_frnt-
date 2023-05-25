import axios from "axios";
const THEME_BASE_URL="http://localhost:8089/Themes"
class Service
{
    createTheme(themeObj){
        return axios.post(`${THEME_BASE_URL}/addThemes`,themeObj);
    }

    getData(){
        return axios.get(`${THEME_BASE_URL}/fetchThemes`);
    }

    deleteTheme(themeName) {
        return axios.delete(`${THEME_BASE_URL}/deleteTheme/`+themeName);
      }
}
export default new Service();
