const url = "https://api.nal.usda.gov/fdc/v1/foods/search?query=pear&pageSize=2&api_key=a2JlS3v4B2tZxehAnVaGmRZnvw99cfactPuj9izA"

const API = {
    nutrients: function() {
        return fetch(`${url}`)
    }
}

module.exports = API;