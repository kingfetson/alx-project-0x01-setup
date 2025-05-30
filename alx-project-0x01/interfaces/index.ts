// interfaces/index.ts

// Reuse this for both display and form data
export interface UserProps {
  id?: number; // optional for new users
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

export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: UserProps) => void; // <- ✅ This is the missing line
}
