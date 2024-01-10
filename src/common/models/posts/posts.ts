export interface IPost {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  owner: {
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
  // publishDate: string;
}
