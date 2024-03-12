// import React from 'react';
import { LocalStorage, cn } from '@/lib/utils';
import {
  ArrowLeftRight,
  BookOpenText,
  BookUser,
  Boxes,
  FileBox,
  List,
  LogOut,
  Menu,
  PackagePlus,
  PieChart,
  ReceiptText,
  Scroll,
  ScrollText,
  ShoppingCart,
  Store,
  Truck,
  // User,
  UserPlus,
  Users,
} from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';
// import authService from '@/services/http/auth.service';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { useAtom } from 'jotai';
import { userAtom } from '@/atoms/users.atom';
import { toggleSideNavAtom } from '@/atoms/sideNav.atom';
import authService from '@/services/auth.service';
// import { useDispatch } from 'react-redux';
// import { signOut } from '@/redux/user/user.slice';

const AsideNavigation = () => {
  const [isToggled, setToggle] = useAtom(toggleSideNavAtom);
  const [currentUser, setUser] = useAtom(userAtom);
  const location = useLocation();
  const currentPath = location.pathname;

  async function logout() {
    try {
      LocalStorage.remove('token');
      setUser(null);
      await authService.logout();
      toast.success('Disconnected successfully!');
      // Hpow1O4k
    } catch (err: any) {
      toast.error(err);
    }
  }

  const GROUP_LINKS = [
    // {
    //   groupName: 'Dashboard',
    //   groupIcon: <PieChart size={20} />,
    //   groupLink: '/dashboard',
    //   groupLinkIsActive: currentPath.startsWith('/dashboard'),
    // },
    {
      groupName: 'Projet',
      groupIcon: <BookUser size={20} />,
      groupLink: null,
      groupLinkIsActive: currentPath.startsWith('/dashboard'),
      groupLinks: [
        {
          to: '/projet/list',
          text: 'Projets',
          linkIcon: <List size={20} />,
          isActive: currentPath.startsWith('/contact/list'),
        },
        {
          to: '/projet/new',
          text: 'Ajouter un projet',
          linkIcon: <UserPlus size={20} />,
          isActive: currentPath.startsWith('/contact/create'),
        },
      ],
    },
    // {
    //   groupName: 'Articles',
    //   groupIcon: <BookOpenText size={20} />,
    //   groupLink: null,
    //   groupLinkIsActive: currentPath.startsWith('/article'),
    //   groupLinks: [
    //     {
    //       to: '/article/list',
    //       text: 'Articles list',
    //       linkIcon: <List size={20} />,
    //       isActive: currentPath.startsWith('/article/list'),
    //     },
    //     {
    //       to: '/article/new',
    //       text: 'Add an article',
    //       linkIcon: <PackagePlus size={20} />,
    //       isActive: currentPath.startsWith('/article/new'),
    //     },
    //   ],
    // },
    // {
    //   groupName: 'Inventories',
    //   groupIcon: <Boxes size={20} />,
    //   groupLink: null,
    //   groupLinkIsActive: currentPath.startsWith('/inventory'),
    //   groupLinks: [
    //     {
    //       to: '/inventory/overview',
    //       text: 'Inventories overview',
    //       linkIcon: <FileBox size={20} />,
    //       isActive: currentPath.startsWith('/inventory/overview'),
    //     },
    //     {
    //       to: '/dashboard',
    //       text: 'Marchandise transfert',
    //       linkIcon: <ArrowLeftRight size={20} />,
    //       isActive: currentPath.startsWith('/dashboard'),
    //     },
    //   ],
    // },
    // {
    //   groupName: 'Purchase',
    //   groupIcon: <ShoppingCart size={20} />,
    //   groupLink: null,
    //   groupLinkIsActive: currentPath.startsWith('/purchase'),
    //   // cotation, commande, livraison, facture
    //   groupLinks: [
    //     {
    //       to: '/purchase/list',
    //       text: 'Documents list',
    //       linkIcon: <List size={20} />,
    //       isActive: currentPath.startsWith('/purchase/list'),
    //     },
    //     {
    //       to: '/purchase/document/quotation/new',
    //       text: 'Create a quotation',
    //       linkIcon: <Scroll size={20} />,
    //       isActive: currentPath.startsWith('/purchase/document/quotation/new'),
    //     },
    //     {
    //       to: '/purchase/document/delivery/new',
    //       text: 'Create a delivery',
    //       linkIcon: <Truck size={20} />,
    //       isActive: currentPath.startsWith('/purchase/document/delivery/new'),
    //     },
    //     {
    //       to: '/purchase/document/order/new',
    //       text: 'Create an order',
    //       linkIcon: <ReceiptText size={20} />,
    //       isActive: currentPath.startsWith('/purchase/document/order/new'),
    //     },
    //     {
    //       to: '/purchase/document/bill/new',
    //       text: 'Create a bill',
    //       linkIcon: <ScrollText size={20} />,
    //       isActive: currentPath.startsWith('/purchase/document/bill/new'),
    //     },
    //   ],
    // },
    // {
    //   groupName: 'Sale',
    //   groupIcon: <Store size={20} />,
    //   groupLink: null,
    //   groupLinkIsActive: currentPath.startsWith('/sale'),
    //   // devis, commande, livraison, facture
    //   groupLinks: [
    //     {
    //       to: '/sale/list',
    //       text: 'Documents list',
    //       linkIcon: <List size={20} />,
    //       isActive: currentPath.startsWith('/sale/list'),
    //     },
    //     {
    //       to: '/sale/document/quote/new',
    //       text: 'Create a quote',
    //       linkIcon: <Scroll size={20} />,
    //       isActive: currentPath.startsWith('/sale/document/quote/new'),
    //     },
    //     {
    //       to: '/sale/document/delivery/new',
    //       text: 'Create a delivery',
    //       linkIcon: <Truck size={20} />,
    //       isActive: currentPath.startsWith('/sale/document/delivery/new'),
    //     },
    //     {
    //       to: '/sale/document/order/new',
    //       text: 'Create an order',
    //       linkIcon: <ReceiptText size={20} />,
    //       isActive: currentPath.startsWith('/sale/document/order/new'),
    //     },
    //     {
    //       to: '/sale/document/bill/new',
    //       text: 'Create a bill',
    //       linkIcon: <ScrollText size={20} />,
    //       isActive: currentPath.startsWith('/sale/document/bill/new'),
    //     },
    //   ],
    // },
  ];

  return (
    // bg-secondary text-secondary-foreground
    <div
      className={cn(
        'fixed z-30 left-0 top-[58px] bottom-0 dark:bg-secondary dark:text-secondary-foreground flex flex-col justify-center flex-shrink transition-all border-r pt-4 pb-2 border-zinc-200 dark:border-zinc-700',
        !isToggled && 'max-w-52 sm:w-full transition-all'
      )}
    >
      <div className='flex justify-center mx-3.5 mb-3'>
        <button
          onClick={() => setToggle(!isToggled)}
          className='bg-secondary mr-auto h-6 px-1.5 text-sm flex items-center'
        >
          <Menu size={14} />
          <span className={cn('hidden', !isToggled && 'sm:inline-block ml-2')}>
            Menu
          </span>
        </button>
      </div>

      <div className='flex-1'>
        {GROUP_LINKS.map((group) => (
          <div
            key={group.groupName}
            className='relative grid text-sm group font-medium dark:font-normal'
          >
            {group.groupLink && (
              <Link
                to={group.groupLink}
                className={cn(
                  ' flex gap-2 items-center border-l-4  border-transparent hover:border-primary hover:bg-background transition-all font-medium px-3.5 py-3 ',
                  group.groupLinkIsActive &&
                    'border-l-4 border-primary bg-muted hover:bg-muted'
                )}
              >
                <span
                  className={cn(
                    'text-foreground opacity-30 dark:opacity-50 dark:group-hover:opacity-100',
                    group.groupLinkIsActive && 'opacity-60 dark:opacity-100'
                  )}
                >
                  {group.groupIcon}
                </span>

                <span
                  className={cn(
                    'ml-1 hidden dark:group-hover:opacity-100 transition-all',
                    !group.groupLinkIsActive && 'dark:opacity-60',
                    !isToggled && 'sm:inline-block '
                  )}
                >
                  {group.groupName}
                </span>
              </Link>
            )}
            {!group.groupLink && (
              <div
                className={cn(
                  ' flex gap-2 items-center border-l-4 border-transparent hover:border-primary hover:bg-background  dark:opacity-50 dark:hover:opacity-100 transition-all font-medium px-3.5 py-3 select-none',
                  group.groupLinkIsActive &&
                    'border-primary bg-muted hover:bg-muted  dark:opacity-100'
                )}
              >
                <span
                  className={cn(
                    'text-foreground opacity-60 dark:opacity-100 mr-1 inline-block',
                    !group.groupLinkIsActive && 'opacity-30 dark:opacity-100'
                  )}
                >
                  {group.groupIcon}
                </span>

                <span
                  className={cn(
                    'transition-all hidden',
                    !isToggled && 'sm:inline-block '
                  )}
                >
                  {group.groupName}
                </span>
              </div>
            )}
            {group.groupLinks && (
              <ul className='absolute  z-50 w-60  right-0 hidden dark:bg-secondary bg-white border dark:border-border border-l-border dark:border-l-secondary group-hover:flex flex-col translate-x-full top-0'>
                {group.groupLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={cn(
                      'border-l-4 hover:border-primary border-transparent hover:bg-background inline-block',
                      link.isActive &&
                        'border-l-4 border-primary hover:bg-muted bg-muted'
                    )}
                  >
                    <li
                      className={cn(
                        'flex items-center gap-3 px-3 whitespace-nowrap py-3 opacity-80 hover:opacity-100',
                        link.isActive && 'opacity-100'
                      )}
                    >
                      <span className='opacity-70'>{link.linkIcon}</span>
                      <span>{link.text}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className='flex justify-center'>
        <Button
          onClick={logout}
          variant='ghost'
          size={!isToggled ? 'default' : 'icon'}
        >
          {/* className='mr-auto mx-3 h-9 px-1.5 text-sm flex items-center' */}
          {/* <Menu size={14} /> */}
          <LogOut size={19} className='text-destructive' />
          <span
            className={cn(
              'hidden transition-all text-destructive',
              !isToggled && 'sm:inline-block ml-2'
            )}
          >
            Déconnexion
          </span>
        </Button>
      </div>
    </div>
  );
};

export default AsideNavigation;
