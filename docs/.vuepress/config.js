const pkg = require('../../package.json')
module.exports={
    title: `${pkg.name} (${pkg.version})`,
    description: `${pkg.description}`,
    themeConfig: {
        nav:[
            {text:'Home', link:'/'},
            {text:'Guide', link:'/guide/'},
            {text:'About me', link:'https://github.com/somteacodes'},
        ],
        logo: '/images/vue3paystack_logo.png',
        sidebar:'auto'
    }
}