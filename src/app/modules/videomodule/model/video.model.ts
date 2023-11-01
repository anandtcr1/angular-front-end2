export class Video {
    id: string | undefined;
    title: string | undefined;
    createdDate:Date | undefined;
    author: Author | undefined;
}

export class Author {
    id: string | undefined;
    name:string | undefined;
    pictureUrl: string | undefined;
    previewUrl: string | undefined
}