
import { getJsonHolder } from '../types'
// useFetchの後ろに返り値のtypeをつける
export const useGetJsons = () => {
    const { data: posts } = useFetch<getJsonHolder>('https://jsonplaceholder.typicode.com/posts/')
    console.log("posts: ", posts)
    return posts
}

