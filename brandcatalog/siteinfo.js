const siteinfo = require('./siteinfo-master.json')


module.exports = {
    //get all brands
    getAllBrands: function () {
        return siteinfo.brands.map(function (entry) {
            return entry.brand
        })
    },

    getAllBrandLocales: function (brandName) {
        return siteinfo.brands.filter(function (entry) {
            return entry.brand === brandName
        }).map(function (entry) {
            return entry.locale
        })
    },
    getAllBrandSiteMaps: function (brandName) {
        return siteinfo.brands.filter(function (entry) {
            return entry.brand === brandName
        }).map(function (entry) {
            return entry.sitemappath
        })
    }

};