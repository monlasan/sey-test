'use client';

import React from 'react';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import authService from '@/services/auth.service';
import { useAtom } from 'jotai';
import { userAtom } from '@/atoms/users.atom';
import { LocalStorage } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
  email: z.string().email('Veuillez entrez une adresse email valide'),
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit être d'au moins 6 caractères." }),
});

const LoginForm = () => {
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  const [isPending, setIsPending] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'seylehakouma@gmail.com',
      password: 'password',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsPending(true);
    try {
      const { email, password } = values;
      const res = await authService.login({ email, password });
      setUser({
        user: res.user,
        accessToken: res.token,
      });
      LocalStorage.set('token', res.token);
      navigate('/');
    } catch (err: String | any) {
      toast.error(err);
      console.error(err);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className='max-w-80 flex flex-col items-center'>
      <div className='mb-2 flex flex-col text-center'>
        <h1 className='text-zinc-800 font-medium text-3xl '>Bon retour</h1>
        <p className='text-zinc-400 w-full max-w-72 text-sm mt-2'>
          Veuillez entrer vos identifiants de connexion.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-3 w-full max-w-xs'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-zinc-600'>Email</FormLabel>
                <FormControl>
                  <Input
                    className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500 '
                    disabled={isPending}
                    placeholder='Adresse email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-zinc-600'>Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500'
                    disabled={isPending}
                    placeholder='*******'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='pt-4'>
            <Button disabled={isPending} className=' w-full' type='submit'>
              {isPending && <Loader className='mr-2 animate-spin' />}
              Se connecter
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
