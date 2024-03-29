export interface IUserDetails {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  email: string;
  location: {
    city: string;
    country: string;
    state: string;
  };
}
