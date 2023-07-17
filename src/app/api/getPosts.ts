import { JsonProperty, Serializable, deserialize } from 'ts-jackson';
const DATA_SOURCE = 'https://www.reddit.com/r/androiddev.json';
@Serializable()
export class PostClass {
    @JsonProperty(`data.id`)
    idPost: any;
    @JsonProperty(`data.title`)
    title: any;
    @JsonProperty(`data.author`)
    author: any;
    @JsonProperty(`data.thumbnail`)
    thumbnail: any;
    @JsonProperty(`data.url`)
    url: any;
    @JsonProperty(`data.media_metadata`)
    mediaMetadata: any;
    @JsonProperty(`data.num_comments`)
    numComments: any;
    @JsonProperty(`data.ups`)
    likesAmount: any;
}

export default async function getData() {
    try {
        const response = await fetch(DATA_SOURCE);

        if(response.ok){
            const data = await response.json();

            let posts: PostClass[] = data.data.children.map((post: any) => deserialize(post, PostClass));
            // console.log('Publicaciones', posts);
            return posts;
        } else {
            console.error('Request failed with status code: ', response.status)
        }
    } catch (error) {
        console.error(error);
    }
}