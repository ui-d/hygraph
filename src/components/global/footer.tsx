import Items from './footer-navigation.json';

export const Footer = () => {
  const { items } = Items;
  return (
    <>
      <nav className='fixed w-full bg-white shadow dark:bg-gray-800'>
        {items.map((item) => (
          <a
            href={item.url}
            key={item.id}
            className='px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white'
          >
            {item.name}
          </a>
        ))}
      </nav>
    </>
  );
};
