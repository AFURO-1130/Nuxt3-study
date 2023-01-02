import { Ref } from "nuxt/dist/app/compat/capi";
export const useCounter = () => {
    const count = useState<number>("current_count", () => {
        return 0
    })
    return {
        count,
        upCount: upCount(count),
        downCount: downCount(count),
        setCount: setCount(count)
    }
}
const upCount = (count: Ref<number>) => {
    return () => count.value++;
}
const downCount = (count: Ref<number>) => {
    return () => count.value--;
}
const setCount = (count: Ref<number>) => {
    console.log("setCount", count)
    return (value: number) => { count.value = value };
}