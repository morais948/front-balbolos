type item = {
    id: number,
    src: string,
    desc: string,
    price: number
}

type page = {
    page: number,
    items: item[]
}

export default page