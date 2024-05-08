import blogsData from './blogsData.json'


const blogService = {
    getData: ({ from, to }) => {
        return new Promise((resolve, reject) => {
            const data = blogsData.slice(from, to)

            resolve({
                count: blogsData.length,
                data: data
            })

        })
    }
}


export default blogService