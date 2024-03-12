export type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: any;
  user_metadata: {
    organization: {
      id: number;
      name: string;
      logo_url: string | undefined;
    };
    first_name: string;
    last_name: string;
    photo_url: string;
  };
  identities: any[];
  created_at?: Date | undefined;
  updated_at?: string;
};
