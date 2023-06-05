module.exports= {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/mixins.scss"
                `
            }
        }
    }
}