import React from 'react';
import TiptapEditor from '@/components/TipTapEditor';
import { documentAtom } from '@/atoms/documents.atom';
import { useAtom } from 'jotai';
import ThemeToggle from '@/components/theme-toggle';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Activity } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Ds() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [editorText, setEditorText] = React.useState('');
  const [document, setDocument] = useAtom(documentAtom);

  return (
    <>
      <div className='bg-background flex flex-col items-center text-foreground text-4xl p-10 text-center'>
        Design System
        <ThemeToggle />
        <Button
          onClick={() => setDocument((prev) => (prev = { data: 'test' }))}
          variant='dark'
          size='icon'
        >
          <Activity />
        </Button>
        <pre>{JSON.stringify(document, null, 2)}</pre>
        <div className='flex flex-wrap'>
          <Button>Click</Button>
          <Button size='lg'>Click</Button>
          <Button variant='destructive' size='sm'>
            Click
          </Button>
          <Button variant='ghost'>Click</Button>
          <Button variant='link'>Click</Button>
          <Button variant='outline'>Czzzlick</Button>
          <Button variant='secondary'>Click</Button>
          <Button variant='accent'>Click</Button>
          <div className={buttonVariants({ variant: 'outline' })}>
            APPLY ON NON-UI
          </div>
          <Input />
          <div
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'text-indigo-600'
            )}
          >
            APPLY ON NON-UI + CN
          </div>
        </div>
      </div>
      <TiptapEditor
        isSubmitting={isSubmitting}
        editorText={editorText}
        setEditorText={setEditorText}
      />
      <pre>{JSON.stringify(document, null, 2)}</pre>
    </>
  );
}
