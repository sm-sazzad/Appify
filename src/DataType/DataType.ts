export interface IData {
    image: string
    title: string
    companyName: string
    id: number
    description: string
    size: number
    reviews: string
    ratingAvg: number
    downloads: string
    ratings: Rating[]
}

export interface Rating {
    name: string
    count: number
}
