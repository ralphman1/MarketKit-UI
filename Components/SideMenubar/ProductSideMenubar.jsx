import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import logo from '../../assets/Images/SideMenubarImages/Tradly Logo.png';
import { useRouter } from 'next/dist/client/router';
import { authSelector } from '../../store/feature/authSlice';

const ProductSideMenubar = () => {
  const router = useRouter();
  const { login } = useSelector(authSelector);
  const [logo, setLogo] = useState(null);
  useEffect(() => {
    setLogo(localStorage.getItem('logo'));
  }, [0]);
  return (
    <div className="  w-full ">
      <div className=" mt-1 flex justify-center items-center py-9 cursor-pointer relative w-[100%] h-[40px] ">
        <Link href="/" passHref={true}>
          <div>
            {logo && (
              <Image
                src={logo}
                layout="fill"
                objectFit="contain"
                alt="logo"
                className="cursor-pointer"
              />
            )}
          </div>
        </Link>
      </div>
      <Link href="/" passHref={true}>
        <div
          className={[
            'w-full h-12 flex mt-3 mb-1   items-center  pl-7 cursor-pointer hover:bg-primary_light',
            router.pathname === '/' ? 'bg-primary_light' : '',
          ].join(' ')}
        >
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 21"
            fill={router.pathname === '/' ? 'var( --primary_color)' : '#959393'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.0001 7.00001L11.0001 1.74001C10.4501 1.24805 9.73803 0.976074 9.00009 0.976074C8.26216 0.976074 7.55012 1.24805 7.00009 1.74001L1.00009 7.00001C0.682463 7.28408 0.428995 7.63256 0.256567 8.02225C0.0841385 8.41194 -0.00329256 8.83389 9.47941e-05 9.26001V18C9.47941e-05 18.7957 0.316165 19.5587 0.878775 20.1213C1.44138 20.6839 2.20445 21 3.00009 21H15.0001C15.7957 21 16.5588 20.6839 17.1214 20.1213C17.684 19.5587 18.0001 18.7957 18.0001 18V9.25001C18.0021 8.82557 17.9139 8.40555 17.7416 8.01769C17.5692 7.62983 17.3165 7.28296 17.0001 7.00001ZM11.0001 19H7.00009V14C7.00009 13.7348 7.10545 13.4804 7.29299 13.2929C7.48052 13.1054 7.73488 13 8.00009 13H10.0001C10.2653 13 10.5197 13.1054 10.7072 13.2929C10.8947 13.4804 11.0001 13.7348 11.0001 14V19ZM16.0001 18C16.0001 18.2652 15.8947 18.5196 15.7072 18.7071C15.5197 18.8946 15.2653 19 15.0001 19H13.0001V14C13.0001 13.2044 12.684 12.4413 12.1214 11.8787C11.5588 11.3161 10.7957 11 10.0001 11H8.00009C7.20444 11 6.44138 11.3161 5.87877 11.8787C5.31616 12.4413 5.00009 13.2044 5.00009 14V19H3.00009C2.73488 19 2.48052 18.8946 2.29299 18.7071C2.10545 18.5196 2.00009 18.2652 2.00009 18V9.25001C2.00027 9.10802 2.03069 8.9677 2.08931 8.83839C2.14794 8.70907 2.23343 8.59372 2.3401 8.50001L8.34009 3.25001C8.52258 3.08969 8.75719 3.00127 9.00009 3.00127C9.243 3.00127 9.47761 3.08969 9.66009 3.25001L15.6601 8.50001C15.7668 8.59372 15.8523 8.70907 15.9109 8.83839C15.9695 8.9677 15.9999 9.10802 16.0001 9.25001V18Z" />
          </svg>{' '}
          <p
            className={[
              ' text-sm font-semibold   ml-5',
              router.pathname === '/' ? 'text-primary' : ' text-default_gray',
            ].join(' ')}
          >
            Home
          </p>
        </div>
      </Link>
      {}
      <Link
        href={login ? '/orders?page=1' : `/sign-in?to=/orders?page=1`}
        passHref={true}
      >
        <div
          className={[
            'w-full h-12 flex   items-center   pl-7 cursor-pointer  hover:bg-primary_light',
            router.pathname === '/orders' || router.pathname === '/orders/[id]'
              ? 'bg-primary_light'
              : '',
          ].join(' ')}
        >
          <svg
            width="20"
            height="22"
            viewBox="0 0 18 21"
            fill={
              router.pathname === '/orders' ||
              router.pathname === '/orders/[id]'
                ? 'var( --primary_color)'
                : '#959393'
            }
            className="mt-[9px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.7089 4.33856C17.316 3.94427 17.316 3.0556 16.7089 2.66131L13.5448 0.606136C12.8795 0.17403 12.0001 0.651477 12.0001 1.44476L12.0001 1.99993L4.00008 1.99994C3.4478 1.99994 3.00008 2.44765 3.00008 2.99994L3.00008 3.99994C3.00008 4.55222 3.4478 4.99994 4.00008 4.99994L12.0001 4.99993L12.0001 5.55511C12.0001 6.34839 12.8795 6.82584 13.5448 6.39373L16.7089 4.33856ZM1.29123 8.66131C0.684172 9.0556 0.684173 9.94427 1.29123 10.3386L4.45538 12.3937C5.12065 12.8258 6.00008 12.3484 6.00008 11.5551L6.00008 10.9999H14.0001C14.5524 10.9999 15.0001 10.5522 15.0001 9.99994V8.99994C15.0001 8.44765 14.5524 7.99993 14.0001 7.99993H6.00008L6.00008 7.44476C6.00008 6.65148 5.12065 6.17403 4.45537 6.60614L1.29123 8.66131Z"
            />
          </svg>{' '}
          <p
            className={[
              ' text-sm font-semibold   ml-5 ',
              router.pathname === '/orders' ||
              router.pathname === '/orders/[id]'
                ? 'text-primary'
                : ' text-default_gray',
            ].join(' ')}
          >
            Orders
          </p>
        </div>
      </Link>
      {}
      {}
    </div>
  );
};

export default ProductSideMenubar;
