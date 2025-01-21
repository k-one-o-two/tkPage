// import 'primereact/resources/primereact.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css';

import { Image } from 'primereact/image';

import { useState } from 'react';
import { useRouter } from 'next/router';

export function Layout({ children, active }) {
  const [activeIndex, setActiveIndex] = useState(active);
  const router = useRouter();

  const model = [
    {
      label: '_about',
      icon: 'pi-user',
      url: '/',
    },
    {
      label: '_photos',
      icon: 'pi-camera',
      url: '/photo',
    },
  ];

  return (
    <div>
      <div
        className="flex justify-content-center flex-wrap header"
        style={{ display: 'flex', gap: '10px' }}
      >
        <Image src="k102.svg" height="40"></Image>
        {model.map((item) => {
          return (
            <div
              className="button"
              key={item.label}
              icon={`pi ${item.icon}`}
              severity="secondary"
              onClick={() => {
                router.push(item.url);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div className="paper">{children}</div>
    </div>
  );
}
