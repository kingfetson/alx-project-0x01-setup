// interfaces/index.ts

// For post data
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// Props for PostModal component
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// For user data
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Props for UserModal component
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (user: UserData) => void;
}
