import { uuid } from 'uuidv4'

export interface Video {
    id?: String,
    title?: String,
    author?: String,
    views?: String,
    timeStamps?: String,
    thumbnail?: String,
    channelLogo?: String
}

export const VIDEOS: Video[] = [
    {
        id: uuid(),
        title: 'How to learn coding in 30 days | 30 day plan | Code with me',
        author: 'Ardhendu Roy',
        views: '129K',
        timeStamps: '13 days',
        thumbnail: '/YT.jpg',
        channelLogo: '/YTlogo.jpg'
    },
    {
        id: uuid(),
        title: 'How to learn coding in 30 days | 30 day plan | Code with me',
        author: 'Ardhendu Roy',
        views: '129K',
        timeStamps: '13 days',
        thumbnail: '/YT.jpg',
        channelLogo: '/YTlogo.jpg'
    },
    {
        id: uuid(),
        title: 'How to learn coding in 30 days | 30 day plan | Code with me',
        author: 'Ardhendu Roy',
        views: '129K',
        timeStamps: '13 days',
        thumbnail: '/YT.jpg',
        channelLogo: '/YTlogo.jpg'
    },
    {
        id: uuid(),
        title: 'How to learn coding in 30 days | 30 day plan | Code with me',
        author: 'Ardhendu Roy',
        views: '129K',
        timeStamps: '13 days',
        thumbnail: '/YT.jpg',
        channelLogo: '/YTlogo.jpg'
    },
    {
        id: uuid(),
        title: 'How to learn coding in 30 days | 30 day plan | Code with me',
        author: 'Ardhendu Roy',
        views: '129K',
        timeStamps: '13 days',
        thumbnail: '/YT.jpg',
        channelLogo: '/YTlogo.jpg'
    },
    {
        id: uuid(),
        title: 'How to learn coding in 30 days | 30 day plan | Code with me',
        author: 'Ardhendu Roy',
        views: '129K',
        timeStamps: '13 days',
        thumbnail: '/YT.jpg',
        channelLogo: '/YTlogo.jpg'
    },
]