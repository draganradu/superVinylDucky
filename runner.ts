const fs = require('fs');


const routes = [
    '/',
    '/site-map/',
    '/:locale/',
    '/:locale/radu-dragan',
    '/:locale/info',
    '/:locale/stickers/:id',
    '/:locale/stickers-category/:name/',
    '/:notFound/',
];

const params = {
    ":locale": ['en', 'nl'],
}

const baseUrl = "https://vinylducky.nl"


const buildOneLine = (url: string) => {
    return `  <url>\n  <loc>${baseUrl}${url}</loc>  \n</url>\n`
}
// build map
const dataXML = () => {
    let output = ''
    const paramsKeys = Object.keys(params)
    const lookUp: any = []

    routes.forEach(x => {
        let i = 0
        let build = true
        paramsKeys.forEach((param: string) => {
            if (x.indexOf(param) > -1) {
                lookUp.push(x)
                build = false
                console.log(x, param, x.indexOf(param))
            }
        })
        // to do : has a error
        // do {
        //     lookUp.forEach((items: => {
        //         if (items.indexOf(param)) {
        //             params[param].forEach {
        //                 lookUp.push(x)
        //             }

        //         }
        //         i++
        //     })
        // } while (lookUp.length > 0 && i < 100);

        if (build) {
            console.log("built", x)
            output = output + buildOneLine(x)
        }
    })

    console.log("look up", lookUp)
    output = `<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>\n${output}\n</urlset>`
    output = `<?xml version='1.0' encoding='UTF-8'?>\n${output}`
    return output
}
// let data = "<?xml version='1.0' encoding='UTF-8'?>
// <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
//     <url>
//         <loc>https://maxschmitt.me/</loc>
//         <lastmod>2020-06-01</lastmod>
//         <changefreq>daily</changefreq>
//         <priority>1</priority>
//     </url>
//     <url>
//         <loc>https://maxschmitt.me/posts</loc>
//         <lastmod>2020-06-01</lastmod>
//         <changefreq>daily</changefreq>
//         <priority>1</priority>
//     </url>
//     <url>
//         <loc>https://maxschmitt.me/posts/github-actions-ssh-key</loc>
//         <lastmod>2020-05-17</lastmod>
//         <changefreq>monthly</changefreq>
//         <priority>0.5</priority>
//     </url>
//     <url>
//         <loc>https://maxschmitt.me/posts/error-reporting-rollbar-nextjs</loc>
//         <lastmod>2020-01-10</lastmod>
//         <changefreq>monthly</changefreq>
//         <priority>0.5</priority>
//     </url>
//     <!-- ... -->
// </urlset>"

// build file
// fs.writeFile('./dist/sitemap.xml', dataXML(), function (err) {
//     if (err) throw err;
//     console.log('File is created successfully.');
// });

// console.log(dataXML())
dataXML()