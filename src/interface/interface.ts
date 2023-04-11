import { ReactNode } from 'react';

export interface IOffer {
    id: number | string;
    text: string;
    src: string;
    title: string;
}

export interface ILastNewsItem {
    id: string | number;
    title: string;
    text: string;
    src: string;
    date: string;
}

export interface IDoc {
    name: string;
    url: string;
    ext: string;
}

export interface ILink {
    url: string;
    children: ReactNode;
    styles: {}
}

export interface AuthModel {
    api_token: string
    refreshToken?: string
}

export interface IUnreadMessages {
    messageId: number
    chatId: number
    isPrivat: boolean
}

export interface IUserModel {
    api_token: string
    email: string
    first_name: string
    id: number
    last_name: string
    img: string | false
    ws: string
    unreadMessages: IUnreadMessages[]
}