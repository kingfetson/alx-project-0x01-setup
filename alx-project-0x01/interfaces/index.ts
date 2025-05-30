// interfaces/index.ts

// Interface for User Data (used in props and forms)
export interface UserProps {
  id?: number; // optional for new user submissions
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

// Interface for User Modal Props
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: UserProps) => void; // ✅ This line satisfies the requirement
}
